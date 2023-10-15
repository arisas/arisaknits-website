import { resolve } from 'path'
// import { defineNuxtConfig } from '@nuxt/kit'
import MyModule from './netlifycms/netlifycms.mjs'
// import MyModule from './my-module'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [MyModule, '@nuxt/content', '@nuxt/image', "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  image: {
    presets: {
      blog: {
        modifiers: {
          quality: '80',
          format: 'jpg',
        }
      }
    }
  },

})