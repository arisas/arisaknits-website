// import { defineTransformer } from "@nuxt/content/transformers"
import { defineTransformer } from "@nuxt/content/transformers/utils";

export default defineTransformer({
  name: 'my-transformer',
  extensions: ['.json'],
  parse (_id: string, rawContent: string) {
    console.error("BUJO TRANSFORMER")
    console.error(rawContent)
    return {
      _id,
      body: "BUJO is my body"
    }
  }
})