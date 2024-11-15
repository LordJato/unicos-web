<template>
  <div>
    <!-- Hero -->
    <section id="home">
      <VParallax :src="parallaxImg" style="height: calc(100vh + 30px);">
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

    <div class="border-waves">
        <img :src="useThemeStore().borderWavesSrc" />
    </div>
    <!-- About -->
    <section id="about">
      <VContainer class="position-relative h-100">
 
        <VRow align="stretch" justify="space-between">
          <VCol cols="12" md="4">
            <VCard height="100%"
              image="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/1c0249f2-14ba-49f5-94c9-14b82e95c356/Professional-headshots-vancouver--20.jpg">
              <VCardItem>
                <VCardTitle>Tenant or Company</VCardTitle>
                <VCardSubtitle>UNICOS: Simplify HR management across your organization.</VCardSubtitle>
              </VCardItem>
              <VCardText>
                <div>
                  As a company or tenant, you can:
                </div>
                <p>Manage multiple companies under one account</p>
                <p>Post jobs, hire skilled workers, and manage applications</p>
                <p>Access HRIS, payroll, and employee self-service portals</p>
              </VCardText>
              <VCardActions>
                <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="Book Activity" variant="outlined"
                  block></v-btn>
              </VCardActions>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard height="100%" image="https://freedesignfile.com/upload/2017/04/Smile-job-seekers-HD-picture.jpg">
              <VCardItem>
                <VCardTitle>Job Seeker</VCardTitle>
                <VCardSubtitle>Find Your Dream Job or Client with UNICOS</VCardSubtitle>
              </VCardItem>
              <VCardText>
                <div>As a job seeker or worker, unlock opportunities with UNICOS:</div>
                <p> Search and apply to job openings from various clients and companies</p>
                <p>Highlight your expertise and showcase your portfolio to attract top employers and land your dream
                  job.</p>
                <p>Find temporary or project-based work with leading clients.</p>
              </VCardText>
              <VCardActions>
                <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="Book Activity" variant="outlined"
                  block></v-btn>
              </VCardActions>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard height="100%"
              image="https://welovesalt.com/my/wp-content/uploads/sites/13/2021/12/my-human-resources-recruitment-agency.png">
              <VCardItem>
                <VCardTitle>Client</VCardTitle>
                <VCardSubtitle>Find Your Perfect Match with UNICOS</VCardSubtitle>
              </VCardItem>
              <VCardText>
                As a client, find skilled workers tailored to your needs:
                Search our vast pool of qualified candidates
                Filter by skills, experience, and location
                Connect with top talent for your business needs.
              </VCardText>
              <VCardActions>
                <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="Book Activity" variant="outlined"
                  block></v-btn>
              </VCardActions>
            </VCard>
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
import parallaxImg from "/img/index/bg.png";
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
</style>