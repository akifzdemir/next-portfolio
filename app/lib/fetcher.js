const NEXT_PUBLIC_GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;

export const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${NEXT_PUBLIC_GITHUB_AUTH_TOKEN}`,
    },
  }).then((r) => r.json());
