<template>
  <div class="position-relative">
    <div class="svg-border-waves ">
      <img :src="useThemeStore().borderWavesSrc" />
    </div>
    <VFooter absolute class="pa-0">
      <VContainer fluid>
        <VRow class="py-8" justify="center">
          <VCol cols="12" lg="4" md="6">
            <div>
              <div>
                <VImg :src="useThemeStore().logoSrc" max-height="125" max-width="125" />
              </div>
              <p class="text-body-2 text-caption mt-2">
                Simplify human resources management across your entire organization with UNICOS, the ultimate
                centralized HR solution. Designed for conglomerates, holding companies, and multi-entity organizations,
                our platform enables seamless management of HR operations across multiple companies within a single
                tenant.
              </p>
            </div>
          </VCol>
          <VCol cols="12" lg="3" md="3" sm="12">
            <div class="font-weight-bold mb-3">Contact Us</div>
            <div class="text-body-2 text-caption mb-3">
              <span class="font-weight-bold">Email:</span> info@unicos.com
            </div>
            <div class="text-body-2 text-caption">
              <span class="font-weight-bold">Phone:</span> (123) 456-7890
            </div>
            <div>
              <v-btn v-for="(item, i) in icons" :key="i" :icon="item.icon" variant="text" color="primary" class="text-caption ml-n4"></v-btn>
            </div>
          </VCol>
          <VCol cols="12" lg="3" md="3" sm="12">
            <div class="font-weight-bold mb-3">Help</div>
            <div>
              <a href="#" class="text-caption mb-1 text-decoration-none">For Company</a>
            </div>
            <div>
              <a href="#" class="text-caption mb-1 text-decoration-none">For Client</a>
            </div>
            <div>
              <a href="#" class="text-caption mb-1 text-decoration-none">For Worker</a>
            </div>
          </VCol>
        </VRow>
        <VDivider color="white-indigo-darken-3" thickness="2" class="mx-md-16"></VDivider>
        <div class="py-6 text-caption text-center">
          Copyright &#9400;
          {{ new Date().getFullYear() }} UNICOS. All rights reserved.
        </div>
      </VContainer>
    </VFooter>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const icons = [
  {
    icon: "mdi-facebook",
    color: "primary",
  },
  {
    icon: "mdi-twitter",
    color: "primary",
  },
  {
    icon: "mdi-linkedin",
    color: "primary",
  },
  {
    icon: "mdi-instagram",
    color: "primary",
  },
];

</script>


<style scoped>
.svg-border-waves img {
  position: absolute;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  overflow: hidden;
  margin-top: -60px;
}
</style>