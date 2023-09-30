import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcrypt";
import { error } from 'console';

export const authOptions: NextAuthOptions= {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/signin',
    },
    providers: [
        CredentialsProvider({
          
          name: "Credentials",
        
          credentials: {
            email: { label: "Email", type: "email", placeholder: "mail@example.com" },
            password: { label: "Password", type: "password" }
          },

          async authorize(credentials) {
            // Check if email or password is missing in credentials
            if (!credentials?.email || !credentials?.password) {
              // Return null to indicate authentication failure due to incomplete credentials
              return null;
            }
          
            // Attempt to find a user with the provided email using Prisma
            const existingUser = await prisma.user.findUnique({
              where: { email: credentials?.email },
            });
          
            // If no user with the provided email is found
            if (!existingUser) {
              // Return null to indicate authentication failure due to an unknown email
              return null;
            }
          
            // If the user's password is stored securely, compare the provided password
            // with the stored password using a secure comparison function like bcrypt's compare
            if (existingUser.password) {
              const passwordMatch = await compare(
                credentials.password,
                existingUser.password
              );
          
              // If the passwords don't match
              if (!passwordMatch) {
                // Return null to indicate authentication failure due to an incorrect password
                throw new Error('password don&apost match');
                return null
              }
            }
          
            // If email and password are valid and match, return user information
            return {
              id: existingUser.id + '', // Convert user ID to a string if necessary
              username: existingUser.username,
              email: existingUser.email,
              // Add any other user-related information here if needed
            };
          }          
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }