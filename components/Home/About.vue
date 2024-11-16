<template>
    <section id="homeAbout">
        <VRow align="center" justify="center" class="h-100">
            <VCol cols="10">
                <VContainer class="h-100">
            <VRow align="stretch">
                <VCol cols="12" md="4"   v-for="(about, i) in aboutUser"
                :key="i">
                    <VCard height="100%" class="rounded-lg pa-5" elevation="8">
                        <VImg :src="about.img" class="mx-auto rounded-circle" max-width="150" />
                        <VCardItem>
                            <VCardTitle>{{ about.title }}</VCardTitle>
                            <VCardSubtitle>{{ about.subtitle }}</VCardSubtitle>
                        </VCardItem>
                        <VCardText style="height: 120px;">
                              {{ about.text }}
                        </VCardText>
                        <VCardActions>
                            <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="How it works"
                                variant="outlined" :to="about.url"></v-btn>
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

interface AboutUser {
  img: string;
  title: string;
  subtitle: string;
  text: string;
  url : string
}


const aboutUser = ref<AboutUser[]>([
  {
    img: '/img/index/job-seeker.gif',
    title: "Job Seeker",
    subtitle : "Find Your Dream Job or Client with UNICOS",
    text: "As a job seeker or worker, unlock opportunities with UNICOS: Search and apply to job openings from various clients and companies Highlight your expertise and showcase your portfolio to attract top employers and land your dream job. Find temporary or project-based work with leading clients.",
    url: "#"
  },
  {
    img: '/img/index/job-seeker.gif',
    title: "Client or Company",
    subtitle : "Find Your Perfect Match with UNICOS",
    text: "  As a client or a company, find skilled workers tailored to your needs: Search our vast pool of qualified candidates Filter by skills, experience, and location Connect with top talent for your business needs.",
    url: "#"
  },
  {
    img: '/img/index/job-seeker.gif',
    title: "Tenant",
    subtitle : "UNICOS: Simplify HR management across your organization.",
    text: " As tenant, you can: Manage multiple companies under one account Post jobs, hire skilled workers, and manage applications Access HRIS, payroll, and employee self-service portals",
    url: "#"
  }
]);

</script>

<style scoped>
#homeAbout {
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-color: transparent;
    background:
        url("/img/index/sprinkle.svg") no-repeat center / cover fixed;
}
</style>