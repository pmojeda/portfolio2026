import { useLanguage } from '../context/useLanguage.js';

// Small ergonomic alias: pages can import from `/hooks` without reaching into `/context`.
export function useTranslation() {
  return useLanguage();
}
