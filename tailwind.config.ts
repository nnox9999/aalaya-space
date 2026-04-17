import type { Config } from "tailwindcss";

/**
 * Tailwind v4 uses CSS-first tokens in app/globals.css (@theme).
 * Dark mode is class-scoped via @custom-variant there; this file satisfies
 * tooling that expects a config path (e.g. shadcn).
 */
const config = {} satisfies Config;

export default config;
