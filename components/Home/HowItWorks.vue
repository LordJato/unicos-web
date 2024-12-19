<template>
  <section id="homeAbout" class="py-16">
    <VRow align="center" justify="center" class="h-100">
      <VCol cols="12" xl="9" lg="10">
        <VContainer class="h-100" >
          <div class="mb-6 mb-16 text-center" > 
              <v-icon icon="mdi-application-brackets" color="secondary" data-aos="fade-down" data-aos-duration="1000" ></v-icon>
              <div class="text-uppercase text-h6 text-md-h4 mt-2" data-aos="fade-up" data-aos-duration="1000">How It Works</div>
          </div>
          <VRow align="stretch" justify="center">
            <VCol cols="12"  md="4" v-for="(about, i) in aboutUser" :key="i" class="d-flex justify-center" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="6000"
              :data-aos-delay="500 * (i + 1)">
              <VCard height="100%" class="rounded-lg pa-5 position-relative" elevation="4">
                <div style="background: #213268; left: 0; top: 0; height: 100px; width: 100%; position: absolute; ">
                </div>
                <VImg :src="about.img" class="mx-auto rounded-circle border-background mt-4"
                  max-width="130" />
                <VCardItem class="text-center mt-3">
                  <VCardTitle>{{ about.title }}</VCardTitle>
                  <VCardSubtitle>{{ about.subtitle }}</VCardSubtitle>
                </VCardItem>
                <VCardText class="mt-5 px-6 px-lg-1" :style="mdAndUp ? 'height: 280px' : ''">
                  <p class="mb-5">{{ about.text }}</p>
                  <div v-for="(benefit, i) in about.benefits" :key="i" class="d-flex mb-2">
                    <v-icon color="secondary" icon="mdi-check" class="mr-2"></v-icon>
                  <p>
                      {{ benefit }}
                    </p>
                  </div>
                </VCardText>
                <VCardActions>
                  <VBtn class="mx-auto text-subtitle-2 px-6" color="secondary" variant="outlined">View More</VBtn>
                </VCardActions>
              </VCard>
            </VCol>
          </VRow>
        </VContainer>
      </VCol>
    </VRow>
  </section>
</template>

<script setup lang="ts">

import { useDisplay } from 'vuetify'

import JobSeekerGIF from '~/assets/images/hero/how-it-works/job-seeker.gif'
import ClientsGIF from '~/assets/images/hero/how-it-works/clients.gif'
import TenantGIF from '~/assets/images/hero/how-it-works/tenant.gif'

const { mdAndUp } = useDisplay()

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
    img: JobSeekerGIF,
    title: "Job Seeker",
    subtitle: "Follow Your Heart's Desire",
    text: "As a job seeker or worker, unlock opportunities:",
    benefits: ['Search and apply to job openings from various clients and companies', 'Highlight your expertise and showcase your portfolio to attract top employers and land your dream job.', 'Find temporary or project-based work with leading clients.'],
    url: "#",
  },
  {
    img: ClientsGIF,
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
    img: TenantGIF,
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