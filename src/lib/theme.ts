import { DEFAULT_THEME } from "@/lib/site";

export const THEME_STORAGE_KEY = "aryan-portfolio-theme";
export const BOOT_STORAGE_KEY = "aryan-portfolio-booted";

export const preloadScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY
)});if(t!=="dark"&&t!=="light"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":${JSON.stringify(
  DEFAULT_THEME
)};}d.classList.toggle("dark",t==="dark");if(sessionStorage.getItem(${JSON.stringify(
  BOOT_STORAGE_KEY
)})==="1"){d.setAttribute("data-boot-seen","1");}}catch(e){}})()`;

export function getTheme(): "dark" | "light" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {}
}
