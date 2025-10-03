// Prefix a relative path with Vite's base at runtime ("/" in dev, 
// "/<repo>/" on GitHub Pages in production).
export function withBase(path = "") {
  const base = (import.meta.env?.BASE_URL ?? "/");
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  if (!path) return cleanBase + "/";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
