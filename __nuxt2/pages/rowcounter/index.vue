<template>
  <div class="text-center my-8">
    <h1 class="text-3xl font-extrabold">ArisaKnits Row Counter App</h1>
    <p class="text-gray-500 text-xl my-8">A watchOS app!</p>
    <img
      alt="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
      title="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
      class="relative mx-auto rounded-full"
      decoding="auto"
      src="/img/icon_234.png"
      style="object-fit: cover; max-width: 400px"
      loading="lazy"
    />

    <p class="text-gray-500 text-xl mt-8">
      A simple way of keeping track of your rows while knitting or crocheting.
    </p>

    <p class="text-gray-500 text-xl mb-4">
      Increase and decrease the number of rows using the + or - or turn the
      watch crown. Reset your row counter using the Reset Counter button.
    </p>

    <h3
      class="flex justify-center text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9 my-8"
    >
      Screenshots
    </h3>

    <div class="flex justify-center gap-6 overflow-auto">
      <img
        v-for="screenshot in screenshots"
        :key="screenshot.src"
        :alt="screenshot.alt"
        :title="screenshot.title"
        decoding="auto"
        :src="screenshot.src"
        style="object-fit: cover; max-width: 400px"
        loading="lazy"
        class="applewatch"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      screenshots: [
        {
          alt: 'ArisaKnits Row Counter App Screenshot with Zero',
          title: 'ArisaKnits Row Counter App Screenshot with Zero',
          src: '/img/v1.2screenshot_zero.png',
        },
        {
          alt: 'ArisaKnits Row Counter App Screenshot with Increase Numbers',
          title: 'ArisaKnits Row Counter App Screenshot with Increase Numbers',
          src: '/img/v1.2screenshot_increase.png',
        },
        {
          alt: 'ArisaKnits Row Counter App Screenshot with Reset Row Counter Button',
          title: 'ArisaKnits Row Counter App Screenshot with Reset Row Counter Button',
          src: '/img/v1.2screenshot_resetbutton.png',
        },
      ],
    }
  },
}
</script>

<style>
.applewatch {
  border-radius: 5rem;
  border: 1rem solid black;
}
</style>
