<template>
    <section id="contactSection">
      <PageTitle :title="title"></PageTitle>
      <VContainer fluid class="pa-0">
        <VRow justify="center" :class="smAndDown ? 'pa-6' : 'pa-16'">
          <VCol cols="12" md="6">
            <div style="position: relative" class="h-100">
              <div class="text-h2 font-weight-bold">Talk to us!</div>
              <div class="text-h6 font-weight-medium">
                At OOBRA, we value your feedback, inquiries, and suggestions.
                Whether you're a digital worker looking for support or a client
                with questions about our platform, we're here to assist you.
              </div>
              <div
                style="bottom: 0"
                :style="mdAndUp ? 'position: absolute;' : ''"
              >
                <div><VIcon icon="mdi-phone" class="mr-2" />(123) 456-7890</div>
                <div><VIcon icon="mdi-email" class="mr-2" />info@oobra.com</div>
                <div class="mt-6">
                  <VIcon icon="mdi-facebook" color="blue" class="mr-1" />
                  <VIcon icon="mdi-twitter" class="mr-1" />
                  <VIcon icon="mdi-instagram" class="mr-1" />
                  <VIcon icon="mdi-linkedin" color="primary" class="mr-1" />
                </div>
              </div>
            </div>
          </VCol>
          <VCol cols="12" md="6">
            <VCard>
              <VCardText>
                <VForm @submit.prevent>
                  <div class="text-subtitle-2 mb-2">Fullname</div>
                  <VTextField density="compact" variant="outlined"></VTextField>
                  <div class="text-subtitle-2 mb-2">Email Address</div>
                  <VTextField density="compact" variant="outlined"></VTextField>
                  <div class="text-subtitle-2 mb-2">Message</div>
                  <VTextarea label="" variant="outlined"></VTextarea>
                  <v-btn color="primary" class="text-caption px-8"> Send </v-btn>
                </VForm>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VContainer>
    </section>
  </template>
  
  <script setup>
  import { useDisplay } from "vuetify";
  
  const { smAndDown, mdAndUp } = useDisplay();
  
  const title = ref("Contact");
  useSeoMeta({
    title: title,
    titleTemplate: "%s - OOBRA",
  });
  </script>
  
  <style lang="scss" scoped>
  #contactSection {
    background-color: #e9f2fb;
  }
  </style>