import { useEffect } from 'react';

// Based on the Chrome developer guideline at this website: https://developer.chrome.com/docs/lighthouse/seo/meta-description/
// Describes a page's content for search engines to include in results.

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta');

    document.title = title;
    meta.name = 'description';
    meta.content = description;
    meta.dataset.pageMeta = 'true';

    if (!meta.parentElement) document.head.appendChild(meta);

    return () => {
      document.title = previousTitle;
      if (meta.dataset.pageMeta === 'true') meta.remove();
    };
  }, [title, description]);
}