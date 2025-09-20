import { useEffect } from 'react';

export function useMeta(meta) {
  useEffect(() => {
    if (!meta) return;

    document.title = meta.title || '';

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = meta.description || '';
  }, [meta]);
}