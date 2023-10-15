<script setup>

import { UseTimeAgo } from '@vueuse/components'

//https://vueuse.org/core/useTimeAgo/

</script>

<template>
  <div>
    <div class="title">
      <span class="text-purple-600">arisa</span><span>blogs</span>
    </div>

    <ContentDoc v-slot="{ doc }">
      <article class="prose mx-auto">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc">
          <ContentRendererMarkdown :value="doc" />
        </ContentRenderer>
        <UseTimeAgo v-slot="{ timeAgo }" :time="doc.publishedAt">
          Time Ago: {{ timeAgo }}
        </UseTimeAgo>
      </article>
    </ContentDoc>
  </div>
</template>
