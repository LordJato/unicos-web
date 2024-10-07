<template>
    <VApp>
      <VMain>
        <slot />
      </VMain>
      <VScrollYTransition>
        <VBtn
          v-show="fab"
          v-scroll="onScroll"
          position="fixed"
          color="primary"
          icon="mdi-arrow-up"
          location="bottom right"
          class="ma-5"
          @click="toTop"
        ></VBtn>
      </VScrollYTransition>
    </VApp>
  </template>
  
  <script setup>
  import { useDisplay } from "vuetify";
  
  // Destructure only the keys you want to use
  const { mdAndDown } = useDisplay();
  const fab = ref(false);
  
  function onScroll(e) {
    const top = window.pageYOffset || e.target.scrollTop || 0;
    fab.value = top > 50;
  }
  
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
  
  
  