import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

const path = require("path");

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    resolve: {
      alias: {
        styles: path.resolve(__dirname, "./src/styles"),
        interfaces: path.resolve(__dirname, "./src/interfaces"),
      },
    },
    server: {
      port: 3000,
      // proxy: {
      //   "/api": {
      //     target: "https://api.boardgameatlas.com/api",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },
    },
  });
};
