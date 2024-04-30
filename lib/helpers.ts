import { Env } from '@/lib/env.mjs';

export const getURL = (path: string = '') => {
  // Check if NEXT_PUBLIC_SITE_URL is set and non-empty. Set this to your site URL in production env.
  let url =
    Env.NEXT_PUBLIC_SITE_URL && Env.NEXT_PUBLIC_SITE_URL.trim() !== ''
      ? Env.NEXT_PUBLIC_SITE_URL
      : // If neither is set, default to localhost for local development.
        'http://localhost:3000/';

  // Trim the URL and remove trailing slash if exists.
  url = url.replace(/\/+$/, '');
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Ensure path starts without a slash to avoid double slashes in the final URL.
  const modifiedPath = path.replace(/^\/+/, '');

  // Concatenate the URL and the path.
  return modifiedPath ? `${url}/${modifiedPath}` : url;
};
