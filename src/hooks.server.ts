import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  const path = event.url.pathname;
  const isImmutable =
    /\/_app\//.test(path) || /\.[a-f0-9]{8,}\.\w+$/.test(path);
  const isStatic =
    /\.(webp|png|jpg|jpeg|gif|ico|svg|woff2?|ttf|eot|css|js)$/.test(path);

  if (isImmutable) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
  } else if (isStatic) {
    response.headers.set("Cache-Control", "public, max-age=86400");
  }

  return response;
};
