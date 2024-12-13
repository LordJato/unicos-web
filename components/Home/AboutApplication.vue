<template>
  <section id="aboutApplication">
    <div class="dot-bg-left d-none d-md-flex"></div>
    <div class="dot-bg d-none d-md-flex"></div>
    <VRow justify="center" align="center" class="h-100">
      <VCol cols="12" lg="9">
        <VContainer class="h-100">
          <VRow justify="center" align="center">
            <VCol cols="12" md="6">
              <div data-aos="fade-down-left" data-aos-duration="1000">
                <VCard class="mx-auto">
                  <VImg src="~/assets/images/hero/about-application/tenancy.png" cover max-height="400"></VImg>
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
                        This innovative design ensures separate instances for each organization's data, automatic
                        updates,
                        customization capabilities and enhanced security measures. The architecture boasts scalability,
                        cost efficiency and streamlined maintenance benefits.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </VCard>
              </div>
            </VCol>
            <VCol cols="12" md="6">
              <div data-aos="fade-down-right" data-aos-duration="1000">
                <VCard class="mx-auto">
                  <VImg src="~/assets/images/hero/about-application/cloud-based.png" cover max-height="400" eager></VImg>
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
              </div>

            </VCol>
          </VRow>
        </VContainer>
      </VCol>
    </VRow>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'
const showCloudBased = ref(false)
const showMultitenant = ref(false)

</script>

<style scoped>
.dot-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url('~/assets/images/hero/about-application/bg-dots.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -25%;
  z-index: -1;
}


.dot-bg-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background: url('~/assets/images/hero/about-application/bg-dots-left.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  margin-top: -80px;
}
</style>