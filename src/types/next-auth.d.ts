import { User } from 'next-auth'
import { UserRole } from '@prisma/client'

declare module "next-auth" {
    interface JWT{
        role: Role
    }
    interface Session {
        user: User & {
            id: UserId,
            username: Username | null,
            role: UserRole,
        }
        token: {
            username: string,
        }
    }
}