<template>
  <section id="aboutApplication">
    <VRow justify="center" align="center" class="h-100">
      <VCol cols="12" lg="9">
        <VContainer class="h-100">
          <VRow justify="start" align="center" class="h-100">

            <VCol cols="12" md="6">

              <VCard class="mx-auto" data-aos="fade-down-left">
                <VImg src="/public/img/index/about-tenancy.png" cover max-height="400"></VImg>

                <VCardTitle class="text-center">
                  Multi-Tenant Architecture
                </VCardTitle>

                <VCardActions class="text-secondary">

                  <v-btn class="mx-auto" :icon="showMultitenant ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="showMultitenant = !showMultitenant"></v-btn>
                </VCardActions>

                <v-expand-transition>
                  <div v-show="showMultitenant">
                    <v-divider></v-divider>
                    <v-card-text>
                      Unicos' cloud-based HRIS and job portal utilizes a secure multi-tenant architecture, enabling
                      multiple organizations to share resources efficiently while maintaining isolated environments.
                      This innovative design ensures separate instances for each organization's data, automatic updates,
                      customization capabilities and enhanced security measures. The architecture boasts scalability,
                      cost efficiency and streamlined maintenance benefits.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </VCard>
            </VCol>
            <VCol cols="12" md="6">
              <VCard class="mx-auto" data-aos="fade-down-right">
                <VImg src="/img/index/about-on-boards-bg.png" cover max-height="400"></VImg>

                <VCardTitle class="text-center">
                  Cloud-based Application
                </VCardTitle>
                <VCardActions class="text-secondary">

                  <v-btn class="mx-auto" :icon="showCloudBased ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="showCloudBased = !showCloudBased"></v-btn>
                </VCardActions>

                <v-expand-transition>
                  <div v-show="showCloudBased">
                    <v-divider></v-divider>

                    <v-card-text class="">
                      Unicos is an innovative cloud-based Human Resource Information System (HRIS) and job portal
                      designed to transform the way organizations manage their workforce and connect with top talent.
                      Our intuitive platform seamlessly integrates HR processes, recruitment tools and job matching
                      capabilities, empowering businesses to optimize their HR operations and foster growth.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </VCard>
            </VCol>
          </VRow>
        </VContainer>
      </VCol>
    </VRow>
    <div class="dot-bg"></div>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const showCloudBased = ref(false)
const showMultitenant = ref(false)

</script>

<style scoped>
#aboutOnBoards {
  z-index: 1;
  position: relative;
  height: 100vh;
}

.dot-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 80%;
  background: url('/img/index/top-workers-dots-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -300px;
  z-index: -1;
}
</style>