<template>
  <VFooter absolute class="pa-0">
    <VContainer fluid class="px-6 px-md-16">
      <VRow class="py-8">
        <VCol cols="12" md="6">
          <div>
            <div>
              <VImg src="/img/unicos-logo.png" max-height="125" max-width="125" />
            </div>
            <p class="text-body-2 text-caption mt-2">
              Simplify human resources management across your entire organization with UNICOS, the ultimate
              centralized HR solution. Designed for conglomerates, holding companies, and multi-entity organizations,
              our platform enables seamless management of HR operations across multiple companies within a single
              tenant.
            </p>
          </div>
        </VCol>
        <VCol cols="12" md="3">
          <div>
            <div class="font-weight-bold mb-2">Contact Us</div>
            <div class="text-body-2 text-caption">
              <span class="font-weight-bold">Email:</span> info@unicos.com
            </div>
            <div class="text-body-2 text-caption">
              <span class="font-weight-bold">Phone:</span> (123) 456-7890
            </div>
          </div>
        </VCol>
        <VCol cols="12" md="3">
          <div>
            <div class="font-weight-bold mb-2">Contact with us</div>
            <v-btn v-for="(item, i) in icons" :key="i" :icon="item.icon" variant="text" class="text-caption ml-n4"
              :color="item.color"></v-btn>
          </div>
        </VCol>
      </VRow>
      <VDivider color="white-thirdy" thickness="2"></VDivider>
      <div class="py-6 text-caption text-center">
        Copyright &#9400;
        {{ new Date().getFullYear() }} UNICOS. All rights reserved.
      </div>
    </VContainer>
  </VFooter>
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