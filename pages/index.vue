<template>
  <div>
    <section id="homePage">
    <VParallax :src="parallaxImg" height="100%" class="px-2">
      <VContainer fluid class="h-100">
        <VRow align="center" justify="center" class="h-100">
          <VCol cols="12" lg="5" md="6">
            <div class="mt-6">
              <div class="font-weight-bold text-h5 text-md-h4 text-white mt-5">
                Unify HR management with our multi-company platform. One tenant, one login, endless possibilities.
              </div>

              <VTextField class="mt-5" :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                label="Search templates" variant="solo" hide-details single-line @click:append-inner="onClick"
                width="350"></VTextField>
            </div>

          </VCol>
          <VCol cols="12" lg="5" md="6">
          </VCol>
        </VRow>

      </VContainer>
      <div class="svg-border-waves ">
        <img src="/img/border-waves.svg" />
      </div>
    </VParallax>
 
  </section>
  <Pricing></Pricing>
  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import parallaxImg from "/img/index/bg.jpg";
import spacexImage from "/img/agency-logo/spacex.png";
import metaImage from "/img/agency-logo/meta.png";
import microsoftImage from "/img/agency-logo/microsoft.png";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();

const title = ref("Unicos");
useSeoMeta({
  title,
});

const agencies = [
  { name: "Microsoft", img: microsoftImage },
  { name: "Meta", img: metaImage },
  { name: "Spacex", img: spacexImage },
];

const loaded = ref(false)
const loading = ref(false)

function onClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}
</script>


<style scoped>
</style>