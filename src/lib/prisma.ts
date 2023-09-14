import { PrismaClient } from '@prisma/client'

// Create a singleton function for the Prisma Client instance
const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Define the type for the Prisma Client singleton
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// Access the global object (e.g., window in browsers) and cast it to a custom type
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

// Initialize the Prisma Client using the singleton pattern
const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// Export the Prisma Client instance
export default prisma

// In development mode, assign the Prisma Client instance to the global object
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
