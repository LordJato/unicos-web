<template>
  <VFooter absolute class="pa-0">
    <VContainer fluid class="px-6 px-md-16">
      <VRow  class="py-8">
        <VCol cols="12" md="6">
          <div>
            <div>
              <VImg src="/img/unicos-logo.png" max-height="125" max-width="125" />
            </div>
            <p class="text-body-2 text-caption mt-2">
              UNICOS is a platform that empowers digital workers by allowing them
              to take advantage of an agency's benefits, while simultaneously
              providing Clients a reliable channel for effortless recruitment;
              Grow your portfolio with real world experiences through Oobra, the
              Digital Worker's platform.
            </p>
          </div>
        </VCol>
        <VCol cols="12" md="3">
          <div >
            <div class="font-weight-bold mb-2">Contact Us</div>
            <div class="text-body-2 text-caption">
              <span class="font-weight-bold">Email:</span> info@oobra.com
            </div>
            <div class="text-body-2 text-caption">
              <span class="font-weight-bold">Phone:</span> (123) 456-7890
            </div>
          </div>
        </VCol>
        <VCol cols="12" md="3">
          <div>
            <div class="font-weight-bold mb-2">Contact with us</div>
            <v-btn
              v-for="(item, i) in icons"
              :key="i"
              :icon="item.icon"
              variant="text"
              class="text-caption ml-n4"
              :color="item.color"
            ></v-btn></div
        ></VCol>
      </VRow>
      <VDivider color="white-thirdy" thickness="2"></VDivider>
      <div class="py-6 text-caption text-center">
        Copyright &#9400;
        {{ new Date().getFullYear() }} Unicos. All rights reserved.
      </div>
    </VContainer>
  </VFooter>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const icons = [
  {
    icon: "mdi-facebook",
    color: "blue",
  },
  {
    icon: "mdi-twitter",
    color: "blue",
  },
  {
    icon: "mdi-linkedin",
    color: "blue",
  },
  {
    icon: "mdi-instagram",
    color: "blue",
  },
];
</script>