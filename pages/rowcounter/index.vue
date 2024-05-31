<template>
  <div class="m-4 text-center">
    <img
      alt="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
      title="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
      class="relative mx-auto h-20 rounded-full object-cover md:h-28"
      decoding="auto"
      src="~assets/img/icon_234.png"
      loading="lazy"
    />

    <h1 class="mt-7 text-3xl font-extrabold md:m-9">
      🧶 ArisaKnits Row Counter
    </h1>

    <p class="text-wrap mx-4 my-2 text-center text-gray-500 lg:mx-40">
      Thanks for trying out my app! I'm actively updating and love to hear from
      you on how I can make the experience better. If there are any features
      you'd like or a way to improve the app, let me know by email me at
      <span class="font-bold">support@arisaknits.com</span>!
    </p>
  </div>

  <div class="flex flex-wrap justify-center">
    <nuxt-link
      to="/rowcounter/web"
      class="drop-shadow-xl hover:drop-shadow-2xl"
    >
      <h2 class="mb-4 text-center text-2xl font-extrabold hover:underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="inline-block h-10 w-10"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
          />
        </svg>
        Web Version (beta)
      </h2>
      <img
        alt="ArisaKnits Row Counter Web Version Screenshot"
        title="ArisaKnits Row Counter Web Version Screenshot"
        class="m-8 max-h-96 rounded-lg"
        decoding="auto"
        src="~assets/img/rowcounter-web-screenshot2.png"
      />
    </nuxt-link>

    <nuxt-link
      to="/rowcounter/watchos"
      class="drop-shadow-xl hover:drop-shadow-2xl"
    >
      <h2
        class="mb-4 text-center text-2xl font-extrabold hover:underline md:mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="inline-block h-10 w-10"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
          />
        </svg>
        watchOS App
      </h2>
      <img
        alt="ArisaKnits Row Counter App Screenshot of Counter and Repeat Linked Counter"
        title="ArisaKnits Row Counter App Screenshot of Counter and Repeat Linked Counter"
        src="/img/v2.0screenshot_counter_w_repeat.png"
        decoding="auto"
        loading="lazy"
        class="applewatch max-h-96 items-center"
      />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Row Counter',
});
</script>

<style>
.applewatch {
  border-radius: 46px;
  border: 1px solid black;
  /* object-fit: cover; */
  /* max-width: 300px; */
}
</style>
