<template>
  <VApp>
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
</script>

<style>
.updown-animation {
  animation-name: updown;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  transition: all 0.3s;
}

@keyframes updown {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>