import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aryan Srivastava | Full Stack Developer",
    short_name: "aryan.dev",
    description:
      "Full Stack Developer portfolio building scalable web apps and distributed platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0c10",
    theme_color: "#00e599",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
