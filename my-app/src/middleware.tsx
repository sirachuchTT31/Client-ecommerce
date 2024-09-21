import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('access_token');
    if (token) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/auth", request.url));
}

export const config = {
    matcher: ['/shop']
}