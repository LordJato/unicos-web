<template>
  <div class="position-relative">
    <div class="svg-border-waves ">
      <img :src="useThemeStore().borderWavesSrc" />
    </div>
    <VFooter absolute class="pa-0">
      <VRow justify="center" align="center" >
        <VCol cols="12" lg="9">
          <VContainer >
            <VRow justify="center" class="pt-16 pb-4" >
            <VCol cols="12" md="6">
              <div>
                  <VImg :src="useThemeStore().logoSrc" max-height="125" max-width="125" />
                <p class="text-body-2 text-caption mt-2">
                  Simplify human resources management across your entire organization with UNICOS, the ultimate
                  centralized HR solution. Designed for conglomerates, holding companies, and multi-entity
                  organizations,
                  our platform enables seamless management of HR operations across multiple companies within a
                  single
                  tenant.
                </p>
              </div>
            </VCol>
            <VCol cols="12" md="6" class="d-flex justify-space-between justify-md-space-around">
              <div id="contactDetails">
                <div class="font-weight-bold mb-3">Contact Us</div>
                <div class="text-body-2 text-caption mb-3">
                  <span class="font-weight-bold">Email:</span> info@unicos.com
                </div>
                <div class="text-body-2 text-caption">
                  <span class="font-weight-bold">Phone:</span> (123) 456-7890
                </div>
                <div>
                  <v-btn v-for="(item, i) in icons" :key="i" :icon="item.icon" variant="text" color="secondary"
                    class="text-caption ml-n4"></v-btn>
                </div>
              </div>

              <div id="helpDetails" class="d-inline">
                <div class="font-weight-bold mb-3">Help</div>
                <div>
                  <a href="#" class="text-caption mb-1 text-decoration-none text-secondary">For Company</a>
                </div>
                <div>
                  <a href="#" class="text-caption mb-1 text-decoration-none text-secondary">For Client</a>
                </div>
                <div>
                  <a href="#" class="text-caption mb-1 text-decoration-none text-secondary">For Worker</a>
                </div>
              </div>
            </VCol>
          </VRow>
          <VDivider color="white-indigo-darken-3" thickness="2" ></VDivider>
          <div class="py-6 text-caption text-center">
            Copyright &#9400;
            {{ new Date().getFullYear() }} UNICOS. All rights reserved.
          </div>

          </VContainer>
      
        </VCol>
      </VRow>
    </VFooter>
  </div>
</template>

<script setup lang="ts">

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