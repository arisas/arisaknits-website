<template>
  <div class="container">
    <div>
      <h1 class="title">
        <!-- <img
          alt="ArisaMakes Logo"
          title="ArisaMakes Logo"
          class="relative mx-auto max-h-[400px] object-cover"
          decoding="auto"
          src="/img/Arisamakes_Logo_I_w_HankNeedlesnHook.png"
          loading="lazy"
        /> -->
        <span class="text-purple-600">arisa</span
        ><span class="-ml-1">makes</span>
      </h1>
      <div class="overflow-hidden bg-gray-50 pb-0 pt-8 sm:py-16 lg:py-24">
        <div
          class="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-screen-xl lg:px-8"
        >
          <svg
            class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div class="relative">
            <h2
              class="text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
            >
              อริซ่า รวิวรรณ จอห์นซี
            </h2>

            <p
              class="mx-auto mt-4 max-w-3xl text-center text-xl leading-7 text-gray-500"
            >
              👾 I do devrel in games 💻 I made a
              <a
                href="http://arisamakes.com/rowcounter"
                class="text-purple-500 hover:text-purple-700"
                >row counter app</a
              >
              ▶️ I post knitting reels & want to make crafts more accessible
            </p>
            <p
              class="mx-auto mt-4 max-w-3xl text-center text-xl leading-7 text-gray-500"
            >
              🐶 You can follow my dogs
              <a
                href="https://www.instagram.com/cheyenneanddundee/"
                class="text-purple-500 hover:text-purple-700"
                title="Follow Arisa's dog on Instagram!"
                >@cheyenneanddundee</a
              >
            </p>
          </div>

          <div
            class="relative mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
          >
            <div class="relative">
              <nuxt-link
                to="/rowcounter"
                class="mt-10 flex items-center justify-center drop-shadow-xl hover:drop-shadow-2xl"
              >
                <img
                  alt="ArisaMakes Row Counter App Icon of Skeins and a Cake of Yarn"
                  title="ArisaMakes Row Counter App Icon of Skeins and a Cake of Yarn"
                  class="relative mx-auto max-h-20 rounded-full object-cover"
                  decoding="auto"
                  src="~assets/img/icon_234.png"
                  loading="lazy"
                />
              </nuxt-link>

              <nuxt-link
                to="/rowcounter"
                class="flex items-center justify-center drop-shadow-xl hover:drop-shadow-2xl"
              >
                <h3
                  class="mt-3 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9"
                >
                  ArisaMakes Row Counter
                </h3>
              </nuxt-link>

              <p class="mt-3 text-lg leading-7 text-gray-500">
                Keep track of your rows when crocheting and knitting
              </p>
              <p class="text-lg leading-7 text-gray-500">
                on Apple Watch or for free on the web!
              </p>

              <nuxt-link
                to="/rowcounter"
                class="mt-10 flex items-center justify-center drop-shadow-xl hover:drop-shadow-2xl"
              >
                <img
                  alt="ArisaMakes Row Counter App Screenshot of Counter and Repeat Linked Counter"
                  title="ArisaMakes Row Counter App Screenshot of Counter and Repeat Linked Counter"
                  src="/img/v2.0screenshot_counter_w_repeat.png"
                  decoding="auto"
                  loading="lazy"
                  class="applewatch max-h-96 items-center"
                />
              </nuxt-link>

              <!-- https://content.nuxt.com/components/content-list
              <ul class="mt-10">
                <ContentList :query="query" v-slot="{ list }">
                  <li
                    v-for="article in list"
                    :key="article._path"
                    class="mt-10 hover:bg-pink-200"
                  >
                    <NuxtLink
                      :to="article._path"
                      :title="`Read More: ${article.title}`"
                    >
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
                          <h4
                            class="text-lg font-medium leading-6 text-gray-900"
                          >
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
              </ul>-->
            </div>

            <div class="relative -mx-4 mt-10 lg:mt-0">
              <svg
                class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <NuxtImg
                src="/img/2025-1080w.jpg"
                sizes="750px sm:640px md:1080px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
