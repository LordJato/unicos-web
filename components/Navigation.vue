<template>
  <nav>
    <VAppBar height="60" class="px-3" :color="props.color" :flat="props.flat" :class="{ expand: props.flat }"
      scroll-behavior="hide" order="1">
      <VAppBarTitle class="px-md-10">
        <VImg src="/img/logo-white.png" :class="props.flat ? '' : 'ms-2'" cover :max-width="props.flat ? 220 : 150 " alt="Portfolio Icon" style="transition: 0.5s ease;"/>
      </VAppBarTitle>
      <VSpacer />
      <VAppBarNavIcon @click.stop="drawer = !drawer" class="d-flex d-md-none">
        <VIcon size="x-large" color="white"> mdi-reorder-horizontal </VIcon>
      </VAppBarNavIcon>
      <div class="d-none d-md-flex px-md-10">
        <VBtn v-for="(link, i) in links" :key="i" variant="text" @click="onClick(link.section)" class="text-white"  :to="link.path">
          {{ link.title }}
        </VBtn>
      </div>
    </VAppBar>
    <VNavigationDrawer v-model="drawer" temporary scrim order="0" class="d-md-none">
      <VListItem height="80" prepend-avatar="/img/icon.png" title="Steto Javellana"></VListItem>
      <VDivider />

      <VList density="compact" nav>
        <VListItem height="50" v-for="(link, i) in links" :key="i" variant="text" @click="onClick(link.section)"
          :prepend-icon="link.icon" :title="link.title"  :to="link.path" />
      </VList>
    </VNavigationDrawer>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  color: String,
  flat: Boolean,
});

import { ref } from "vue";
import { useGoTo } from "vuetify";

const scrollTo = useGoTo();

const goToOptions = {
  container: "__nuxt",
  duration: 300,
  easing: "easeInOutCubic",
  offset: -5,
};

const drawer = ref<boolean>(false);

const links = [
  {
    icon: "mdi-home",
    title: "Home",
    section: "#homeSection",
    path: "/",
  },
  {
    icon: "mdi-account-details",
    title: "How It Works",
    section: "#howItWorksSection",
    path: "/how-it-works",
  },

  {
    icon: "mdi-account-details",
    title: "About",
    section: "#aboutSection",
    path: "/about",
  },


  {
    icon: "mdi-account-details",
    title: "Pricing",
    section: "#pricingSection",
    path: "/pricing",
  },

  {
    icon: "mdi-account-tie",
    title: "Contact Us",
    section: "#contactUsSection",
    path: "/contact",
  },

  { 
    icon: "mdi-folder",
    title: "Careers",
    section: "#careersSection",
    path: "/careers",
  },
];

function onClick(e: string) {
  scrollTo(e, goToOptions);
}
</script>

<style scoped>
.v-toolbar {
  transition: 0.5s ease;
}

.expand {
  height: 70px !important;
  padding-top: 30px;
}
</style>
