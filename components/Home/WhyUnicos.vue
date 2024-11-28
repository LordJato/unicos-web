<template>
    <section id="whyUnicos" v-intersect="onIntersect">
            <video v-if="isIntersecting" autoplay muted loop class="background-video">
                <source :src="videoSrc" type="video/mp4">
            </video>

    </section>
</template>

<script setup lang="ts">

import videoBg from '@/public/img/index/why-us-bg.mp4'


const isIntersecting = ref(false)

const onIntersect = (isIntersectingValue: any) => {
    isIntersecting.value = isIntersectingValue
}
const videoSrc = videoBg

</script>

<style scoped>
.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
</style>