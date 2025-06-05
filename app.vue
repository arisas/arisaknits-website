<template>
  <div class="grid justify-items-center">
    <NuxtPage />
    <NuxtLayout></NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: 'ArisaMakes %s',
  link: [{ rel: 'icon', type: 'image/png', href: '/yarnemoji.png' }],
  meta: [
    {
      name: 'ArisaMakes',
      content:
        'Try the ArisaMakes row counter, learn more about the watchOS app, and read my blog!',
    },
  ],
});
</script>
