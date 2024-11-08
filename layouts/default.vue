<template>
  <VApp>
    <div class="loader-wrapper" :class="{ hide: !progressBar }" v-if="progressBar">
      <div class="loader"></div>
    </div>
    <Navigation :color="color" :flat="flat" />
    <VMain class="pa-0">
      <slot />
    </VMain>
    <Footer />
    <VScrollYTransition>
      <VBtn v-show="fab" v-scroll="onScroll" position="fixed" color="primary" icon="mdi-arrow-up"
        location="bottom right" class="ma-5" @click="toTop"></VBtn>
    </VScrollYTransition>
  </VApp>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useRoute } from 'vue-router'

const route = useRoute()

// const isHomePage = computed(() => {
//   const arr = ['/', '/contact', '/opportunities']
//   return arr.includes(route.path)
// } )

// watch(route, (val, newVal) => {
//   const result = isHomePage.value
//   // Use the result as needed
//   console.log(result)
// })

const show = ref<boolean>(false);
const fab = ref<boolean | null>(false);
const flat = ref<boolean>(true);
const color = ref<string>("transparent");


// Destructure only the keys you want to use
const { mdAndDown } = useDisplay();


watch(fab, (newVal) => {
  if (newVal) {
    color.value = "white-primary";
    flat.value = false;
  } else {
    color.value = "transparent";
    flat.value = true;
  }
});

const onScroll = (e: any): void => {
  const top = window.scrollY || e.target.scrollTop || 0;
  fab.value = top > 50;
};

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const progressBar = ref(false);

const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
});

onMounted(() => {
  start();
  setTimeout(() => {
    finish();
  }, 1000);
});

watch(isLoading, (newValue) => {
  progressBar.value = newValue;
});
</script>