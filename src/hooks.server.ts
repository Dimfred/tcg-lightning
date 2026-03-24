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
    response.headers.set("Cache-Control", "public, max-age=604800");
  }

  // Security headers
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains",
  );
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin",
  );
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );

  return response;
};
