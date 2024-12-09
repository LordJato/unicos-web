<template>
  <nav>
    <VAppBar class="px-12" height="60" :color="props.color" :flat="props.flat"
      :class="{ expand: props.flat, 'add-padding': mdAndUp }" scroll-behavior="hide" order="1"
      :elevation="props.flat ? 0 : 5">
      <VAppBarTitle>
        <VImg :src="logoWhite" cover :max-width="props.flat ? 120 : 90" alt="Portfolio Icon"
          style="transition: 0.5s ease;" />
      </VAppBarTitle>
      <VAppBarNavIcon @click.stop="drawer = !drawer" class="d-flex d-md-none">
        <VIcon size="x-large"> mdi-reorder-horizontal </VIcon>
      </VAppBarNavIcon>

      <div class="d-none d-md-flex align-center">
        <VBtn v-for="(link, i) in links" :key="i" variant="plain" @click="onClick(link.section)"
          class="text-subtitle-2 font-weight-bold" :to="link.path">
          {{ link.title }}
        </VBtn>
        <VBtn class="text-subtitle-2 font-weight-bold text-white" color="secondary" rounded="xs" size="large" variant="flat">
          Get Started
        </VBtn>
      </div>
    </VAppBar>
    <VNavigationDrawer v-model="drawer" temporary scrim order="0" class="d-md-none">
      <VListItem height="80" prepend-avatar="/img/icon.png" title="Steto Javellana"></VListItem>
      <VDivider />

      <VList density="compact" nav>
        <VListItem height="50" v-for="(link, i) in links" :key="i" variant="text" @click="onClick(link.section)"
          :prepend-icon="link.icon" :title="link.title" :to="link.path" :value="link.title" />
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
import logoWhite from '/img/logo-white.png';
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

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
    title: "About",
    section: "#aboutSection",
    path: "#",
  },

  {
    icon: "mdi-account-tie",
    title: "Contact",
    section: "#contactSection",
    path: "#",
  },

  {
    icon: "mdi-folder",
    title: "Opportunities",
    section: "#opportunitiesSection",
    path: "#",
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
  padding-top: 40px;
}

.add-padding {
  padding-right: 255px !important;
  padding-left: 235px !important;
}
</style>
