import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const protectedRoutes = createRouteMatcher([
  '/',
  '/meeting(.*)',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
])

export default clerkMiddleware(async (auth, req) => {
  if (protectedRoutes(req)) {
    const { protect } = await auth()
    protect()
  }
})

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
}