<template>
  <div>
    <!-- Hero -->
    <section id="home">
      <VParallax src="~/assets/images/hero/bg.png" style="height: calc(100vh + 30px);">
        <VContainer fluid class="h-100">
          <VRow align="center" justify="center" class="h-100">
            <VCol cols="12" lg="9">
              <VRow align="center" class="h-100">
                <VCol cols="12" lg="8" class="d-flex justify-center justify-md-start align-center" >
                  <div class="mt-6">
                    <p class="mt-2 text-h6 text-md-h4">
                      A revolutionary platform uniting 
                    </p>
                    <p class="mt-2">
                      <a href=""
                        class="typewrite text-h5 text-md-h3 text-secondary text-decoration-none font-weight-bold">
                        <span class="wrap"> {{ txt }}</span>
                      </a>
                    </p>
                    <p class="text-h6 text-md-h4 mt-2">
                      offering endless possibilities.
                    </p>
                    <VTextField class="mt-10 " :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                      label="Search for any services" variant="solo" hide-details single-line
                      @click:append-inner="onClick" max-width="350"></VTextField>
                  </div>
                </VCol>
                <VCol cols="12" md="4" class="d-md-none">
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
      <HomeHowItWorks />
      <!-- <HomePopularServices /> -->
    </div>

    <HomeChooseUnicos />

    <HomeAboutApplication />
    <!-- clients feedback -->
    <HomePartnersFeedback />
      
    <!-- top workers -->
    <HomeTopWorkers />
 

    <HomeWhyUnicos />

    <HomeContact />

    <!-- refer -->
    <HomeRefer />
  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

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

const txt = ref('');
const toRotate = ref(["Job Seekers", "Clients", "Companies", "Tenants"]);
const period = ref(1000);
const loopNum = ref(0);
const isDeleting = ref(false);

function tick() {
  const i = loopNum.value % toRotate.value.length;
  const fullTxt = toRotate.value[i];

  if (isDeleting.value) {
    txt.value = fullTxt.substring(0, txt.value.length - 1);
  } else {
    txt.value = fullTxt.substring(0, txt.value.length + 1);
  }

  let delta = 200 - Math.random() * 100;

  if (isDeleting.value) delta /= 2;

  if (!isDeleting.value && txt.value === fullTxt) {
    delta = period.value;
    isDeleting.value = true;
  } else if (isDeleting.value && txt.value === '') {
    isDeleting.value = false;
    loopNum.value++;
    delta = 500;
  }

  setTimeout(tick, delta);
}

onMounted(() => {
  tick();
});


</script>


<style scoped>
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
  z-index: 1;
}

.left-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 120%;
  background: url('~/assets/images/hero/how-it-works/bg-dots-left.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.right-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  height: 120%;
  background: url('~/assets/images/hero/how-it-works/bg-dots-right.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -30px;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
}
</style>