import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(req: NextRequestWithAuth){
    // console.log('User Role:', req.nextauth.token?.role); 
        
    if (req.nextUrl.pathname === "/adminDashboard/dashboard" && req.nextauth.token?.role !== "ADMIN")
        return NextResponse.rewrite(
            new URL("/admin/signin", req.url)
        );
    if (req.nextUrl.pathname === "/userDashboard/dashboard" && req.nextauth.token?.role !== "USER")
      return NextResponse.rewrite(
        new URL("/signin", req.url)
      );

    },
    {
        callbacks: {
            authorized: ({ token }) =>!!token,
        }
    }
)

export const config = {
    matcher: ["/adminDashboard/:path*", "/userDashboard/:path*"],
}