<template>
  <div class="my-8 text-center">
    <h1 class="text-3xl font-extrabold">ArisaKnits Row Counter App</h1>
    <p class="my-8 text-xl text-gray-500">An Apple Watch app!</p>
    <img
      alt="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
      title="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
      class="relative mx-auto h-40 rounded-full object-cover"
      decoding="auto"
      src="/img/icon_234.png"
      loading="lazy"
    />

    <div class="flex flex-col text-center">
      <p class="mx-2 mt-8 text-xl text-gray-500">
        Use this simple row counter right on your Apple Watch while you're
        crocheting or knitting!
      </p>
    </div>

    <a
      href="https://apps.apple.com/us/app/arisaknits-row-counter/id1598992914?itsct=apps_box_badge&amp;itscg=30200"
      class="my-6"
      style="
        display: inline-block;
        overflow: hidden;
        border-radius: 13px;
        width: 250px;
        height: 83px;
      "
    >
      <img
        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1643760000"
        alt="Download on the App Store"
        style="border-radius: 13px; width: 250px; height: 83px"
    /></a>

    <h3
      class="my-8 flex justify-center text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9"
    >
      Screenshots
    </h3>

    <div class="flex flex-wrap justify-center gap-6 overflow-auto">
      <img
        v-for="screenshot in screenshots"
        :key="screenshot.src"
        :alt="screenshot.alt"
        :title="screenshot.title"
        decoding="auto"
        :src="screenshot.src"
        style="object-fit: cover; max-width: 300px"
        loading="lazy"
        class="applewatch"
      />
    </div>

    <p class="mx-2 mt-10 text-xl text-gray-500 lg:mx-36">
      This app features a way to increase, decrease, reset the counter, and a
      setting to automatically reset the counter on a specific row. This reset
      row setting includes another counter to track repeats and may be helpful
      when following a repeating pattern.
    </p>

    <p class="mx-2 my-4 text-xl text-gray-500 lg:mx-36">
      <span class="font-bold">Note:</span> Apple Watches by default will close
      the app after 2 minutes. You can change this setting to 1 hour by going to
      Settings > General > scroll down to "Return to Clock" > select "After 1
      hour"
    </p>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: 'Row Counter',
    });
  },

  components: {},
  data() {
    return {
      screenshots: [
        {
          alt: 'ArisaKnits Row Counter App Screenshot of Counter and Repeat Linked Counter',
          title:
            'ArisaKnits Row Counter App Screenshot of Counter and Repeat Linked Counte',
          src: '/img/v2.0screenshot_counter_w_repeat.png',
        },
        {
          alt: 'ArisaKnits Row Counter App Screenshot of Counter Set to Zero',
          title: 'ArisaKnits Row Counter App Screenshot of Counter Set to Zero',
          src: '/img/v2.0screenshot_counter.png',
        },
        {
          alt: 'ArisaKnits Row Counter App Screenshot of the Settings Face',
          title: 'ArisaKnits Row Counter App Screenshot of the Settings Face',
          src: '/img/v2.0screenshot_settings.png',
        },
      ],
    };
  },
};
</script>

<style>
.applewatch {
  border-radius: 5rem;
  border: 1rem solid black;
}
</style>
