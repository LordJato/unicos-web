<template>
  <div>
    <!-- Hero -->
    <section id="home">
      <VParallax :src="parallaxImg" height="100vh" class="px-2">
        <VContainer fluid class="h-100">
          <VRow align="center" justify="center" class="h-100">
            <VCol cols="12" lg="5" md="6">
              <div class="mt-6">
                <p class="font-weight-bold text-h5 text-md-h4 mt-5">
                  Unify HR management with our multi-company platform. One tenant, one login, endless possibilities.
                </p>

                <VTextField class="mt-5" :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                  label="Search templates" variant="solo" hide-details single-line @click:append-inner="onClick"
                  width="350"></VTextField>
              </div>

            </VCol>
            <VCol cols="12" lg="5" md="6">
            </VCol>
          </VRow>

        </VContainer>
      </VParallax>
    </section>
    <!-- Hire Now -->
    <section id="hireNow">

    </section>
    <!-- Popular services -->
    <section id="popularServices">

    </section>
    <!-- Numbers of Client/Workers/Companies -->
    <section id="numbersOnboard">

    </section>
    <!-- top workers -->
    <section id="topWorkers">

    </section>
    <!-- clients feedback -->
    <section id="clientsFeedback">

    </section>

    <!-- refer -->
    <section id="referral">

    </section>
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


<style scoped></style>