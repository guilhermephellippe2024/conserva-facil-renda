export function getCheckoutHref(angle) {
  const configured = (
    angle === 'renda'
      ? import.meta.env.VITE_CHECKOUT_URL_RENDA
      : import.meta.env.VITE_CHECKOUT_URL_CASA
  ) || import.meta.env.VITE_CHECKOUT_URL || '';

  try {
    const url = new URL(configured);
    if (!['https:', 'http:'].includes(url.protocol)) return null;

    const current = new URLSearchParams(window.location.search);
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
      if (current.has(key) && !url.searchParams.has(key)) {
        url.searchParams.set(key, current.get(key));
      }
    }
    if (!url.searchParams.has('utm_content')) url.searchParams.set('utm_content', `pagina_${angle}`);

    return url.toString();
  } catch {
    return null;
  }
}
