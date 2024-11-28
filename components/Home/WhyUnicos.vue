<template>
    <div id="whyUnicos" class="background-video-section" v-intersect="onIntersect">
        <video v-if="isIntersecting" autoplay loop muted playsinline class="background-video">
            <source src="/img/index/why-us-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script setup lang="ts">


const isIntersecting = ref(false)

const onIntersect = (isIntersectingValue: any) => {
    isIntersecting.value = isIntersectingValue
}

</script>

<style scoped>
.background-video-section {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
}

.background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>