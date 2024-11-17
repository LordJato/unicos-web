<template>
  <div>
    <!-- Hero -->
    <section id="home">
      <VParallax :src="parallaxImg" style="height: calc(100vh + 30px);">
        <VContainer fluid class="h-100">
          <VRow align="center" justify="center" class="h-100">
            <VCol cols="12" lg="9">
              <VRow align="center" justify="center" class="h-100">
                <VCol cols="12" md="6">
                  <div class="mt-6">
                    <p class="font-weight-bold text-h5 text-md-h4 mt-5">
                      Unify job search, job posting, and HR management. One platform, endless possibilities.
                    </p>
                    <VTextField class="mt-5" :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                      label="Search for any services" variant="solo" hide-details single-line
                      @click:append-inner="onClick" width="350"></VTextField>
                  </div>
                </VCol>
                <VCol cols="12" md="6">
                </VCol>
              </VRow>
            </VCol>
          </VRow>

        </VContainer>
      </VParallax>
    </section>

    <div class="border-waves">
      <img :src="useThemeStore().borderWavesSrc" />
    </div>

    <div class="position-relative">
      <div class="left-bg d-none d-md-flex"></div>
      <div class="right-bg d-none d-md-flex"></div>
      <HomeAbout />
      <HomePopularServices />
    </div>


    <!-- Popular services -->


    <section id="hireNow">
      <h1>Hire Now</h1>
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
import parallaxImg from "/img/index/bg.png";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();

const title = ref("Unicos");
useSeoMeta({
  title,
});

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
:deep(.v-card__image) {
  -webkit-mask-image: linear-gradient(to right,
      transparent 0%,
      rgba(0, 0, 0, 0.10) 70%,
      rgba(0, 0, 0, 0.20) 80%,
      rgba(0, 0, 0, 0.50) 100%);
}

#home {
  background: hsla(226, 52%, 27%, 1);
  background: linear-gradient(90deg, hsla(226, 52%, 27%, 1) 0%, hsla(227, 72%, 10%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(226, 52%, 27%, 1) 0%, hsla(227, 72%, 10%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(226, 52%, 27%, 1) 0%, hsla(227, 72%, 10%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#213268", endColorstr="#070F2B", GradientType=1);
}

.border-waves img {
  position: absolute;
  width: 100%;
  height: 3rem;
  margin-top: -40px;
}

.left-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  background: url('/img/index/dots-bg-left.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.right-bg {
  position: absolute;
  top: -2%;
  right: 0;
  width: 25%;
  height: 100%;
  background: url("/img/index/dots-bg-right.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>