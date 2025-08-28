<template>
  <h1 class="title">
    <span class="text-purple-600">arisa</span><span class="-ml-1">blogs</span>
  </h1>
  <div class="relative">
    <h3
      class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9"
    >
      All Posts
    </h3>
    <p class="mt-3 text-lg leading-7 text-gray-500">
      Check out my blog. Enjoy!
    </p>
    <!-- https://content.nuxt.com/components/content-list -->
    <ul class="mt-10">
      <li
        v-if="posts"
        v-for="article in posts"
        :key="article._path"
        class="mt-10 hover:bg-pink-200"
      >
        <NuxtLink :to="article.path" :title="`Read More: ${article.title}`">
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-medium leading-6 text-gray-900">
                {{ article.title }}
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                {{ article.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('content').all(),
);
// console.log('Posts?', posts.value.length);
</script>
