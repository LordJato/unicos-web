<template>
  <section id="contactSection">
    <div class="position-fixed top-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" height="530">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#161A33" />
            <stop offset="35%" stop-color="#133A85" />
            <stop offset="100%" stop-color="#1E2C53" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient)" fill-opacity="1"
          d="M0,192L48,213.3C96,235,192,277,288,293.3C384,309,480,299,576,272C672,245,768,203,864,197.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>
    </div>
    <VContainer class="position-relative">
      <div class="text-white-primary d-flex justify-center text-center">
        <div>
          <h2 class="text-h4 font-weight-bold mb-5">Have Some Question?</h2>
          <p class="w-75 mx-auto">Thank you for your interest in our services. Please fill out the form below or e-mail
            us at suppor@unicos.com. We'll respond promptly to your inquiry.</p>
        </div>
      </div>
      <VRow justify="center" align="center">
        <VCol cols="8">
          <VRow>
            <VCol cols="12" md="6" class="text-center">
              <VImg src="/img/contact/bg.svg" max-width="250" class="ms-auto" />
              <div class="px-16">
                <VDivider thickness="2"></VDivider>
                <h1 class="text-start">Get in touch</h1>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <VIcon class="me-2"
                      style="background: linear-gradient(90deg, rgba(33,50,104,1) 0%, rgba(22,26,51,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                      mdi-phone
                    </VIcon>
                    <span>+639764861327</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <VIcon class="me-2"
                      style="background: linear-gradient(90deg, rgba(33,50,104,1) 0%, rgba(22,26,51,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                      mdi-email
                    </VIcon>
                    <span>support@unicos.com</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <VIcon class="me-2"
                      style="background: linear-gradient(90deg, rgba(33,50,104,1) 0%, rgba(22,26,51,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                      mdi-map-marker-circle
                    </VIcon>
                    <span>Bacolod City, Negros Occidental, Philippines</span>
                  </div>
                </div>
              </div>

            </VCol>
            <VCol cols="12" md="6">
              <VCard class="mx-auto pa-6 pb-8" elevation="8" max-width="448" rounded="lg">
                <div class="text-subtitle-1 text-medium-emphasis">Name</div>

                <VTextField density="compact" prepend-inner-icon="mdi-account" variant="outlined"></VTextField>


                <div class="text-subtitle-1 text-medium-emphasis">Email</div>

                <VTextField density="compact" prepend-inner-icon="mdi-email-outline" variant="outlined"></VTextField>

                <div class="text-subtitle-1 text-medium-emphasis">Phone</div>

                <VTextField density="compact" prepend-inner-icon="mdi-phone" variant="outlined"></VTextField>

                <div class="text-subtitle-1 text-medium-emphasis">Message</div>

                <VTextarea density="compact" prepend-inner-icon="mdi-message" variant="outlined"></VTextarea>


                <VBtn color="primary" append-icon="mdi-email-fast" block>
                  Send Email
                </VBtn>
              </VCard>
            </VCol>
          </VRow>
        </VCol>
      </VRow>
    </VContainer>
    <div class="svg-border-waves ">
      <img src="/img/border-waves.svg" />
    </div>
  </section>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { smAndDown, mdAndUp } = useDisplay();

const title = ref("Contact");
useSeoMeta({
  title: title,
  titleTemplate: "%s - Unicos",
});
</script>


<style scoped>
section {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9f2fb;
}
</style>