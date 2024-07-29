/**
 * This middleware is used to check if the user is already signed in, if they
 * are, they will be redirected to the application home page. This middleware
 * is used to prevent users from accessing the sign in page if they are already
 * signed in.
 */
export default defineNuxtRouteMiddleware(async() => {
  const { isSignedIn } = await useClient().request('OPTIONS /api/me')
  if (isSignedIn) return navigateTo({ name: 'AppHome' })
})
