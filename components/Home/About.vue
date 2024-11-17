<template>
  <section id="homeAbout">
    <VRow align="center" justify="center" class="h-100">
      <VCol cols="10">
        <VContainer class="h-100" fluid>
          <VRow align="stretch">
            <VCol cols="12" md="4" v-for="(about, i) in aboutUser" :key="i">
              <VCard height="100%" class="rounded-lg pa-5 position-relative" elevation="8">
                <div style="background: #213268; left: 0; top: 0; height: 120px; width: 100%; position: absolute; ">
                </div>
                <VImg :src="about.img" class="mx-auto rounded-circle border-xl border-background mt-8"
                  max-width="130" />

                <VCardItem class="text-center">
                  <VCardTitle>{{ about.title }}</VCardTitle>
                  <VCardSubtitle>{{ about.subtitle }}</VCardSubtitle>
                </VCardItem>
                <VCardText class="mt-5">
                  <p class="mb-5">{{ about.text }}</p>
                  <div v-for="(benefit, i) in about.benefits" :key="i" class="d-flex mb-2">
                    <v-icon color="green-darken-2" icon="mdi-check" class="mr-2"></v-icon>
                    <p >
                      {{ benefit }}
                    </p>
                  </div>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </VContainer>
      </VCol>
    </VRow>

  </section>

</template>

<script setup lang="ts">

interface AboutUser {
  img: string;
  title: string;
  subtitle: string;
  text: string;
  benefits: string[];
  url: string;
}


const aboutUser = ref<AboutUser[]>([
  {
    img: '/img/index/job-seeker.gif',
    title: "Job Seeker",
    subtitle: "Follow Your Heart's Desire",
    text: "As a job seeker or worker, unlock opportunities:",
    benefits: ['Search and apply to job openings from various clients and companies', 'Highlight your expertise and showcase your portfolio to attract top employers and land your dream job.', 'Find temporary or project-based work with leading clients.'],
    url: "#",
  },
  {
    img: '/img/index/job-seeker.gif',
    title: "Client",
    subtitle: "Discover Your Ideal Partner",
    text: "  As a client or a company, find skilled workers tailored to your needs:",
    benefits: [
      'Search our vast pool of qualified candidates Filter by skills, experience, and location',
      "Post jobs, hire skilled workers, and manage applications",
      'Connect with top talent for your business needs.',
    ],
    url: "#"
  },
  {
    img: '/img/index/job-seeker.gif',
    title: "Tenant",
    subtitle: "Simplify HR management across your organization.",
    text: " As tenant, you can: ",
    benefits: [
      'Manage multiple companies under one account',
      "Post jobs, hire skilled workers, and manage applications",
      'Access HRIS, payroll, and employee self-service portals for multiple companies',
      "Simplify your workflow and get a unified view of all companies' status."
    ],
    url: "#"
  }
]);

</script>

<style scoped>
/* #homeAbout {
  overflow: hidden;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: transparent;
  background:
    url("/img/index/sprinkle.svg") no-repeat center / cover fixed;
} */
</style>