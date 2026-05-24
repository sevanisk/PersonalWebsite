// Returns the correct image URL depending on whether a CDN base URL is configured.
// If VITE_IMAGE_CDN_URL is set, it rewrites image paths to that CDN.
// Otherwise it returns the local asset URL or public path.

const IMAGE_CDN_BASE = import.meta.env.VITE_IMAGE_CDN_URL?.replace(/\/+$/, '');

export function getImageUrl(publicPath, localAsset = null) {
  const normalizedPath = publicPath.startsWith('/') ? publicPath : `/${publicPath}`;
  if (IMAGE_CDN_BASE) {
    return `${IMAGE_CDN_BASE}${normalizedPath}`;
  }

  return localAsset ?? normalizedPath;
}
