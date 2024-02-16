<template>
    <div class="text-center m-8">
        <img alt="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
            title="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn" class="relative mx-auto rounded-full mt-10"
            decoding="auto" src="~assets/img/icon_234.png" style="object-fit: cover; max-width: 100px" loading="lazy" />

        <h1 class="text-3xl font-extrabold">🧶 ArisaKnits Row Counter</h1>
    </div>

    <div class="justify-evenly flex items-center">
        <nuxt-link to="/rowcounter/web" class="hover:drop-shadow-2xl">
            <h2 class="text-center text-2xl font-extrabold m-6">Web Version (beta)</h2>
            <img alt="ArisaKnits Row Counter Web Version Screenshot" title="ArisaKnits Row Counter Web Version Screenshot"
                class="m-8 rounded-lg max-w-96 max-h-96" decoding="auto" src="~assets/img/rowcounter-web-screenshot2.png" />
        </nuxt-link>

        <nuxt-link to="/rowcounter/watchos" class="hover:drop-shadow-2xl">
            <h2 class="text-center text-2xl font-extrabold m-6">⌚️ watchOS App</h2>
            <img v-for="screenshot in screenshots" :key="screenshot.src" :alt="screenshot.alt" :title="screenshot.title"
                decoding="auto" :src="screenshot.src" loading="lazy" class="applewatch" />
        </nuxt-link>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            screenshots: [
                {
                    alt: 'ArisaKnits Row Counter App Screenshot with Increase Numbers',
                    title: 'ArisaKnits Row Counter App Screenshot with Increase Numbers',
                    src: '/img/v1.2screenshot_increase.png',
                },
            ],
        }
    },
}
</script>

<style>
.applewatch {
    border-radius: 46px;
    border: 1px solid black;
    /* object-fit: cover; */
    max-width: 300px;
}
</style>
