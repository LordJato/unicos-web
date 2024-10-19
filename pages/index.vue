<template>
  <section id="homePage">
    <VParallax src="/img/index/bg.jpg" height="950" class="px-2  px-md-16">
      <VContainer fluid class="h-100">
        <VRow align="center" justify="center" class="h-100">
          <VCol cols="12" md="6">
            <div class="mt-6">
              <div class="font-weight-bold text-h5 text-md-h4 text-white mt-5">
                Unify HR management with our multi-company platform. One tenant, one login, endless possibilities.
              </div>

              <VTextField class="mt-5" :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                label="Search templates" variant="solo" hide-details single-line @click:append-inner="onClick"
                width="350"></VTextField>
            </div>
            <div class="mt-12">
            <p class="text-overline font-weight-bold text-white">Registered Companies</p>
            <VRow>
              <VCol sm="4" cols="6" v-for="(agency, i) in agencies" :key="i">
                <VCard flat color="transparent" max-width="150">
                  <VImg
                    :src="agency.img"
                    :alt="agency.img"
                    height="50px"
                    style="box-shadow: 20px #000;"
                  />
                </VCard>
              </VCol>
            </VRow>
          </div>

          </VCol>
          <VCol cols="12" md="6">

          </VCol>
        </VRow>
      </VContainer>

    </VParallax>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import spacexImage from "/img/agency-logo/spacex.png";
import metaImage from "/img/agency-logo/meta.png";
import microsoftImage from "/img/agency-logo/microsoft.png";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();

const title = ref("Home");
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
section {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>