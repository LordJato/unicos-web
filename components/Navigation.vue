<template>
  <div>
    <VAppBar
      :elevation="2"
      height="70"
      class="px-6 px-md-16"
    >
      <VToolbarTitle class="mx-0">
        <NuxtLink to="/">
          <VImg
            src="/img/logo.png"
            cover
            max-height="225"
            max-width="225"
            alt="OOBRA"
          />
        </NuxtLink>
      </VToolbarTitle>
      <VSpacer />
      <VAppBarNavIcon @click.stop="drawer = !drawer" class="d-flex d-md-none">
        <VIcon size="x-large" color="primary"> mdi-reorder-horizontal </VIcon>
      </VAppBarNavIcon>
      <div class="d-none d-md-flex">
        <VBtn
          v-for="(tab, i) in tabs"
          :key="i"
          variant="plain"
          class="font-weight-bold text-body-1 text-black"
          nuxt
          :to="tab.path"
        >
          {{ tab.title }}
        </VBtn>
      </div>
      <VSpacer class="d-none d-md-flex" />
      <div class="d-none d-md-flex">
        <VBtn
          height="100"
          variant="text"
          class="font-weight-bold text-body-2"
          color="primary"
        >
          Login
        </VBtn>
        <VBtn
          variant="flat"
          height="100"
          class="font-weight-bold text-body-2"
          color="primary"
          >Sign Up</VBtn
        >
      </div>
    </VAppBar>

    <!-- Navigation Drawer -->
    <VNavigationDrawer v-model="drawer" position="fixed" temporary>
      <VList nav dense>
        <VListItem
          v-for="(tab, i) in tabs"
          :key="i"
          :title="tab.title"
          nuxt
          :to="tab.path"
        ></VListItem>
      </VList>
    </VNavigationDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
const tabs = reactive([
  { path: "/", title: "Home" },
  { path: "/how-it-works", title: "How It Works" },
  { path: "/benefits", title: "Benefits" },
  { path: "/opportunities", title: "Opportunities" },
  { path: "/about", title: "About Us" },
  { path: "/contact", title: "Contact" },
]);
</script>

<style scoped>
.btn {
  text-transform: unset !important;
}
.v-btn--active{
  color: #007ACC !important;
}
</style>
