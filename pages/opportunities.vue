<template>
  <section id="opportunitiesSection">
    <div id="opportunitiesBackground">
      <div class="overlay">
      </div>
      <div class="position-relative h-100">
        <VContainer fluid style="padding-top: 20%;">
          <VRow justify="center" align="center">
            <VCol cols="12" md="6" >
              <h1 class="text-white text-h3 font-weight-bold">Career Opportunities at Your Fingertips</h1>
            </VCol>
            <VCol cols="12" md="6"></VCol>
          </VRow>
        </VContainer>
        <VContainer>
          <VRow justify="center" align="center" style="margin-top: 15%;">
            <VCol cols="12" md="4" class="d-flex justify-center align-center">
              <v-card prepend-icon="$vuetify" subtitle="The #1 Vue UI Library" width="400">
                <template v-slot:title>
                  <span class="font-weight-black">Welcome to Vuetify</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
                  voluptatibus!
                  Eaque
                  cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde
                  voluptatem!
                </v-card-text>
              </v-card>
            </VCol>
            <VCol cols="12" md="4" class="d-flex justify-center align-center">
              <v-card prepend-icon="$vuetify" subtitle="The #1 Vue UI Library" width="400">
                <template v-slot:title>
                  <span class="font-weight-black">Welcome to Vuetify</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
                  voluptatibus!
                  Eaque
                  cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde
                  voluptatem!
                </v-card-text>
              </v-card>
            </VCol>
            <VCol cols="12" md="4" class="d-flex justify-center align-center">
              <v-card prepend-icon="$vuetify" subtitle="The #1 Vue UI Library" width="400">
                <template v-slot:title>
                  <span class="font-weight-black">Welcome to Vuetify</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
                  voluptatibus!
                  Eaque
                  cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde
                  voluptatem!
                </v-card-text>
              </v-card>
            </VCol>
          </VRow>
        </VContainer>
      </div>
    </div>
    <div class="svg-border-waves ">
        <img src="/img/border-waves.svg" />
      </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const title = ref("Opportunities");
useSeoMeta({
  title: title,
  titleTemplate: "%s - Unicos",
});
</script>

<style scoped>
#opportunitiesBackground::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80%;
  background-size: cover;
  background-position: center;
  opacity: 0.75;
  border-radius: 0 0 120px 120px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80%;
  background: radial-gradient(circle, rgba(22, 26, 51, 0.8379726890756303) 15%, rgba(33, 50, 104, 1) 100%);
  border-radius: 0 0 120px 120px;
}
</style>