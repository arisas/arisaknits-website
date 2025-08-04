<template>
  <div class="bg-gray-50 pb-0 pt-8 sm:py-16 sm:pl-8 lg:px-[300px] lg:py-24">
    <h1 class="text-center text-3xl font-extrabold">Pattern</h1>
    <p class="mt-8 text-2xl text-gray-600">
      Thank Goodness You're Here Crochet Doll
    </p>

    <img
      alt="Thank Goodness You're Here Crochet Doll Photo"
      title="Thank Goodness You're Here Crochet Doll Photo"
      class="mt-8 max-h-[400px] object-cover"
      decoding="auto"
      src="/img/tgyhcrochetdollphoto.jpeg"
      loading="lazy"
    />

    <h2 class="mt-8 text-xl font-bold text-gray-600">Supplies Needed:</h2>

    <ul class="mt-2 list-none text-xl text-gray-500">
      <li>Crochet hook: 2.75mm</li>
      <li>Darning Needle</li>
      <li>Stuffing</li>
      <li>DK/Worsted weight yarn in:</li>
    </ul>

    <ul class="mt-2 list-inside list-disc text-xl text-gray-500">
      <li>Pishkun in flower point (orange)</li>
      <li>American fiber DK yarn dandelion (yellow)</li>
      <li>HiKoo Sueno in Robin’s Egg (turquoise/aqua)</li>
      <li>Sadnes Garn Double Sunday in 1002 (white)</li>
      <li>Sadnes Garn Double Sunday in 5846 (blue)</li>
      <li>Sadnes Garn Double Sunday in 4236 (red)</li>
      <li>Blue Sky Fibers Woolstok Worsted in Midnight Seas (dark blue)</li>
    </ul>

    <button
      type="button"
      class="text-l mt-8 h-10 w-52 touch-manipulation rounded-lg bg-indigo-600 p-1 font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
      @click="downloadDoll"
    >
      Download Pattern
    </button>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: 'Pattern',
    });
  },

  methods: {
    downloadDoll() {
      const link = document.createElement('a');
      link.href = '/tgyhcrochetdollpattern.pdf';
      link.download = 'tgyhcrochetdollpattern.pdf';
      link.target = '_blank';
      link.click();
    },
  },
};
</script>
