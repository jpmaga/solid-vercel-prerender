import { defineConfig } from "vite"
import solid from "solid-start/vite"
import vercel from "solid-start-vercel"

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
      adapter: vercel({
        prerender: {
          bypassToken: "87734ad8259d67c3c11747d3e4e112d0",
        },
      }),
    }),
  ],
})
