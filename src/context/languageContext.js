import { createContext } from 'react';

// Split from the Provider on purpose: `react-refresh` works best when a file exports either
// a component tree OR hooks — not both from the same module.
export const LanguageContext = createContext(null);
