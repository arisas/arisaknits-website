<template>
  <div class="container">
    <div>
      <h1 class="title">
        <span class="text-purple-600">arisa</span><span class="-ml-1">knits</span>
      </h1>
      <div class="pt-8 pb-0 sm:py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404"
            height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>

          <div class="relative">
            <h2
              class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Arisa Raviwan Johnsey (She / Her)<br />
              อริซ่า รวิวรรณ จอห์นซี
            </h2>

            <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              👾 I do devrel in games
              💻 I made a row counter app (more info <a href="http://arisaknits.com/rowcounter"
                class="text-purple-500 hover:text-purple-700">here</a>)
              ▶️ I post knitting reels & want to make crafts more accessible
            </p>
            <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              🐶 You can follow my dogs
              <a href="https://www.instagram.com/cheyenneanddundee/" class="text-purple-500 hover:text-purple-700"
                title="Follow Arisa's dog on Instagram!">@cheyenneanddundee</a>
            </p>
          </div>

          <div class="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center text-left">
            <div class="relative">
              <h3 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Recent Posts
              </h3>
              <p class="mt-3 text-lg leading-7 text-gray-500">
                Check out my latest posts. Enjoy!
              </p>
              <!-- https://content.nuxt.com/components/content-list -->
              <ul class="mt-10">
                <ContentList :query="query" v-slot="{ list }">
                  <li v-for="article in list" :key="article._path" class="mt-10 hover:bg-pink-200">
                    <NuxtLink :to="article._path" :title="`Read More: ${article.title}`">
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-4">
                          <h4 class="text-lg leading-6 font-medium text-gray-900">
                            {{ article.title }}
                          </h4>
                          <p class="mt-2 text-base leading-6 text-gray-500">
                            {{ article.description }}
                          </p>
                        </div>
                      </div>


                    </NuxtLink>
                  </li>
                </ContentList>
              </ul>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0">
              <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404"
                fill="none" viewBox="0 0 784 404">
                <defs>
                  <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
              </svg>
              <NuxtImg src="/img/1080w.jpg" sizes="750px sm:640px md:1080px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'ArisaKnits Website',
  link: [{ rel: 'icon', type: 'image/png', href: '/yarnemoji.png' }],
})

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/blog', limit: 5, sort: [{ publishedAt: - 1 }] }
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
  .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: -0.05em;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
  