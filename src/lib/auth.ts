import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions= {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/signin',
        signOut: '/',
    },
    callbacks: {
      async jwt({ token, user} ) { 

        const dbUser = await prisma.user.findFirst({
          where: {
              email: token.email,
          },
        })
    
        if (!dbUser) {
          token.id = user!.id
          return token
        }

        return {
            id: dbUser.id,
            username: dbUser.username,
            email: dbUser.email,
            image: dbUser.image,
            name: dbUser.name,
            role: dbUser.role,
        }
      },
      async session({ session, token }) {
        // console.log("Session callback: ", session, "Token: ", token);
    
        if (token) {
          session.user.id = token.id
          session.user.name = token.name
          session.user.username = token.username
          session.user.email = token.email
          session.user.image = token.image as string
          session.user.role = token.role
      }

        return session
      },
    },    
    providers: [
        CredentialsProvider({
          
          name: "Credentials",
        
          credentials: {
            email: { label: "Email", type: "email", placeholder: "mail@example.com" },
            password: { label: "Password", type: "password" }
          },

          async authorize(credentials) {
            try {
              // Check if email or password is missing in credentials
              if (!credentials?.email || !credentials?.password) {
                return null; // Indicate authentication failure due to incomplete credentials
              }
          
              // Attempt to find a user with the provided email using Prisma
              const existingUser = await prisma.user.findUnique({
                where: { email: credentials?.email },
              });
          
              // If no user with the provided email is found
              if (!existingUser) {
                return null; // Indicate authentication failure due to an unknown email
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
                  return null; // Indicate authentication failure due to an incorrect password
                }
              }
          
              // If email and password are valid and match, return user information
              return {
                id: existingUser.id, 
                username: existingUser.username,
                email: existingUser.email,
                name: existingUser.name,
                image: existingUser.image,
              };
            } catch (error) {
              // Handle any other errors here (e.g., database errors)
              console.error('Error during authentication:', error);
              return null; // Indicate authentication failure due to an error
            }
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