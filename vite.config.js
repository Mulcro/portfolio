import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from 'vite-plugin-svgr';
import tailwindcss from "tailwindcss";

export default defineConfig({
    build: {
        outDir: 'build'
    },
    plugins: [
        react(),
        svgrPlugin({
            svgrOptions:{
                icon:true
            }
        })
    ],
    css:{
        postcss:{
            plugins:[tailwindcss()]
        }
    },
    server: {
        port:3000
    }
});
