<template>
  <div id="aboutPage">
   <div class="text-h1">About</div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();

useSeoMeta({
  title: "About - OOBRA",
});
</script>

<style scoped>
#aboutPage {
  background-color: #e9f2fb;
}

.rounded-bottom {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
</style>