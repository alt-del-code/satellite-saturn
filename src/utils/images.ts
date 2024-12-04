import type { ImageMetadata } from 'astro';

export function resolveImage(src: string | ImageMetadata): string | ImageMetadata {
  if (typeof src === 'string') {
    // For remote images or public directory images, return as is
    return src;
  }
  // For imported images, return the ImageMetadata object
  return src;
}
