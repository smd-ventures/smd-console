/// <reference types="@cloudflare/workers-types" />

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url)

  if (url.hostname === 'www.smdurgan.com') {
    url.hostname = 'smdurgan.com'
    return Response.redirect(url.toString(), 301)
  }

  return context.next()
}
