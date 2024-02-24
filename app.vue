<template>
  <div class="grid justify-items-center">
    <NuxtPage />
    <NuxtLayout></NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: 'ArisaKnits %s',
  link: [{ rel: 'icon', type: 'image/png', href: '/yarnemoji.png' }],
  meta: [
    {
      name: 'ArisaKnits',
      content:
        'Read my blog, try the ArisaKnits row counter, and learn more about the watchOS app!',
    },
  ],
});
</script>
