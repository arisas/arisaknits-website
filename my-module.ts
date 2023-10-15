import { resolve } from 'path'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (_options, nuxt) {
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {}
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || []
    nuxt.options.nitro.externals.inline.push(resolve('./my-module'))
    // @ts-ignore
    nuxt.hook('content:context', (contentContext) => {
      console.error("HOOKING BUJO TRANSFORMER")
      console.error(resolve('./my-transformer.ts'))
      contentContext.transformers.push(resolve('./my-transformer.ts'))
      console.error(contentContext.transformers)
    })
  }
})