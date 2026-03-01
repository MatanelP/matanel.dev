/// <reference types="astro/client" />

interface Window {
  toggleTheme: () => void;
  rerenderMermaid: () => Promise<void>;
}
