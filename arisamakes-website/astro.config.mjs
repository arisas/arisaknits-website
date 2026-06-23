// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Lato",
    cssVariable: "--font-lato",
      },

      {
    provider: fontProviders.fontsource(),
    name: "Itim",
    cssVariable: "--font-itim",
      },

      {
    provider: fontProviders.fontsource(),
    name: "Playpen Sans Thai",
    cssVariable: "--font-playpen-sans-thai",
      },

      {
    provider: fontProviders.fontsource(),
    name: "Caveat",
    cssVariable: "--font-caveat",
      },

      {
    provider: fontProviders.fontsource(),
    name: "LXGW Marker Gothic",
    cssVariable: "--font-lxgw-marker-gothic",
      }
    ],

  @theme {

  }

});


