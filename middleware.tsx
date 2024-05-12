import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const matcherRegex = new RegExp('^(?!/(?:\\.webp|\\.png|\\.tsx|\\.ts|_next/static|assets|favicon\\.ico|swc\\.js|api)(?:/|$))');


export function middleware(request: NextRequest) {

    const isMiddlewareAllowed = matcherRegex.test(request.nextUrl.pathname)

    if (isMiddlewareAllowed) {
        console.log(request.nextUrl);
    } else return;


}