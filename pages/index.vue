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

    <!-- About -->
    <section id="about">
      <VContainer>
        <VRow>
          <VCol cols="12" md="7">
            <VRow class="d-flex justify-center align-center">
              <VCol>
                <VCard class="mx-auto" color="surface-variant"
                  image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg" max-width="340"
                  subtitle="Take a walk down the beach" title="Evening sunset">
                  <template v-slot:actions>
                    <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="Book Activity" variant="outlined"
                      block></v-btn>
                  </template>
                </VCard>
                <VCard class="mx-auto" color="surface-variant"
                  image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg" max-width="340"
                  subtitle="Take a walk down the beach" title="Evening sunset">
                  <template v-slot:actions>
                    <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="Book Activity" variant="outlined"
                      block></v-btn>
                  </template>
                </VCard>
              </VCol>
              <VCol>
                <VCard class="mx-auto" color="surface-variant"
                  image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg" max-width="340"
                  subtitle="Take a walk down the beach" title="Evening sunset">
                  <template v-slot:actions>
                    <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="Book Activity" variant="outlined"
                      block></v-btn>
                  </template>
                </VCard>
              </VCol>
            </VRow>
          </VCol>
          <VCol cols="12" md="5">

          </VCol>
        </VRow>
      </VContainer>

    </section>

    <!-- Hire Now -->
    <section id="hireNow">
      <h1>Hire Now</h1>

    </section>
    <!-- Popular services -->
    <section id="popularServices">
      <h1>Popular Services</h1>
    </section>
    <!-- Numbers of Client/Workers/Companies -->
    <section id="numbersOnboard">
      <h1>Total Onboards</h1>
    </section>
    <!-- top workers -->
    <section id="topWorkers">
      <h1>Our Top Workers</h1>
    </section>
    <!-- clients feedback -->
    <section id="clientsFeedback">
      <h1>Clients Feedback</h1>
    </section>

    <!-- refer -->
    <section id="referral">
      <h1>Refer</h1>
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