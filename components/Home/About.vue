<template>
    <section id="homeAbout">
        <VContainer class="h-100">
        <VRow>
            <VCol cols="12" md="4">  <VCard>
            <VImg src="/public/img/index/job-seeker.gif" class="mx-auto rounded-circle" max-width="150"/>
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
                <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="How it works" variant="outlined"
                  block></v-btn>
              </VCardActions>
        </VCard></VCol>
            <VCol cols="12" md="4">   <VCard>
            <VImg src="/public/img/index/job-seeker.gif" class="mx-auto rounded-circle" max-width="150"/>
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
        </VCard></VCol>
            <VCol cols="12" md="4">  <VCard>
            <VImg src="/public/img/index/job-seeker.gif" class="mx-auto rounded-circle" max-width="150"/>
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
        </VCard></VCol>
        </VRow>
    </VContainer>
    </section>

</template>

<script setup lang="ts">

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