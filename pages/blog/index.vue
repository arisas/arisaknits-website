<script setup>
const { data: articles } = await useAsyncData('articles',
    () => queryContent('articles')
        .sort({ publishedAt: -1 })
        .find()
)
</script>

<template>
    <h1>Arisa's Blog</h1>
    <pre>{{ articles }}</pre>
</template>
