<template>
  <VApp >
    <div class="loader-wrapper" :class="{ hide: !loadingBar }" v-if="loadingBar">
      <div class="loader"></div>
    </div>
    <Navigation :color="color" :flat="flat" />
    <VMain class="pa-0">
      <slot />
    </VMain>
    <Footer />
    <VScrollYTransition>
      <VBtn v-show="fab" v-scroll="onScroll" position="fixed" color="secondary" icon="mdi-arrow-up"
        location="bottom right" class="ma-5 text-white" @click="toTop" style="z-index: 999" size="small"></VBtn>
    </VScrollYTransition>
  </VApp>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useRoute } from 'vue-router'

const route = useRoute()

// const isHomePage = computed(() => {


const show = ref<boolean>(false);
const fab = ref<boolean | null>(false);
const flat = ref<boolean>(true);
const color = ref<string>("transparent");


// Destructure only the keys you want to use
const { mdAndDown } = useDisplay();


watch(fab, (newVal) => {
  if (newVal) {
    color.value = "background";
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

const nuxtApp = useNuxtApp();
const loadingBar = ref(true);
nuxtApp.hook("page:finish", () => {
  loadingBar.value = false;
});
</script>
