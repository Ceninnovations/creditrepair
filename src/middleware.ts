import { clerkMiddleware } from '@clerk/nextjs/server';

// Login wall temporarily disabled: every route is public so the app opens
// straight into the design with no sign-in screen. Clerk is still loaded (so
// sign-in/account features keep working if used), it just no longer BLOCKS
// access. To re-enable the wall, restore the auth.protect() guard:
//
//   const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)', ...]);
//   export default clerkMiddleware(async (auth, req) => {
//     if (!isPublicRoute(req)) await auth.protect();
//   });
export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mjs)).*)',
    '/__clerk/:path*',
    '/(api|trpc)(.*)',
  ],
};
