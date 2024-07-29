/**
 * The middleware to protect a route from unauthorized access. This middleware will check
 * if the user is signed in and redirect them to the sign in page if they are not signed in.
 * This middleware is used to prevent users from accessing protected routes if they are not
 * signed in.
 */
export default defineNuxtRouteMiddleware(async() => {
  const { isSignedIn } = await useClient().request('OPTIONS /api/me')
  if (!isSignedIn) return navigateTo({ name: 'AuthSignin' })
})
