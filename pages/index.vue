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
          <VCol cols="12" md="4">
            <VCard>
              <VCardItem>
                <VCardTitle>Tenant or Company</VCardTitle>
                <VCardSubtitle>Simplify human resources management across your entire organization with UNICOS, the
                  ultimate multitenant
                  platform for all your workforce needs.</VCardSubtitle>
              </VCardItem>
              <VCardText>
                As a company or tenant:
                Manage multiple companies under one account
                Post jobs, hire skilled workers, and manage applications
                Access HRIS, payroll, and employee self-service portals
              </VCardText>
            </VCard>

          </VCol>
          <VCol cols="12" md="4">
            <VCard>
              <VCardItem>
                <VCardTitle>Job Seeker</VCardTitle>
                <VCardSubtitle>Find Your Dream Job or Client with UNICOS</VCardSubtitle>
              </VCardItem>
              <VCardText>
                As a job seeker or worker, unlock opportunities with UNICOS:
                Search and apply to job openings from various clients and companies
                Showcase your skills and experience to attract top employers
                Connect with clients and companies that need your services.
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard>
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