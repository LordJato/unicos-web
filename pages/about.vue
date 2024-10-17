<template>
    <div id="aboutPage">
      <VContainer fluid class="pa-0">
        <PageTitle title="About Us"></PageTitle>
        <div :class="smAndDown ? '' : 'px-16'">
          <div id="aboutMainSection" class="pt-6 pb-16 px-8">
            <VRow justify="center" align="center">
              <VCol
                cols="12"
                md="6"
                class="d-flex"
                :class="smAndDown ? 'justify-center' : 'justify-start'"
              >
                <VImg max-width="500" src="/img/about-us/main.png" />
              </VCol>
              <VCol cols="12" md="6">
                <div :class="smAndDown ? '' : 'pr-10'" class="mt-5">
                  <h1 class="font-weight-bold text-h4">
                    OOBRA is a digital jobs platform whose unique focus is the
                    creation of digital agencies to further empower and develop
                    digital workers.
                  </h1>
                  <div
                    class="text-subtitle-1 mt-5"
                    :class="smAndDown ? '' : 'pr-10'"
                  >
                    Accountability is at the heart of OOBRA’s value proposition by
                    allowing digital workers to focus on delivering world-class
                    services while the agencies leverage their competencies
                    enhancing their attractiveness to the global clients.
                  </div>
                  <div class="mt-4">
                    <VBtn color="primary" class="text-caption">
                      Discover More
                    </VBtn>
                  </div>
                </div>
              </VCol>
            </VRow>
          </div>
          <div id="aboutMissionAndVision" class="px-8 py-16">
            <VSheet class="rounded-xl pa-16" color="warning">
              <VRow>
                <VCol cols="12" md="6" class="pa-0 pa-1">
                  <VCard class="rounded-xl pa-8">
                    <VCardTitle class="font-weight-black text-h6">
                      Vision
                    </VCardTitle>
                    <VCardText class="text-subtitle-2">
                      We envision a world where digital workers have access to the
                      same benefits and opportunities as traditional employees,
                      where clients can effortlessly find the best talent for
                      their projects, and where the digital workspace is a
                      vibrant, inclusive, and dynamic ecosystem.
                    </VCardText>
                  </VCard>
                </VCol>
                <VCol cols="12" md="6" class="pa-0 pa-1">
                  <VCard class="rounded-xl pa-8">
                    <VCardTitle class="font-weight-black text-h6">
                      Mission
                    </VCardTitle>
                    <VCardText class="text-subtitle-2">
                      Our mission is to empower and connect digital workers,
                      providing them with agency benefits, real-world experiences,
                      and a supportive community while offering clients a reliable
                      channel for seamless recruitment. We're committed to
                      transforming the way digital work is done.
                    </VCardText>
                  </VCard>
                </VCol>
              </VRow>
            </VSheet>
          </div>
        </div>
        <div id="aboutWhoWeAre" class="pt-16">
          <VSheet class="rounded-bottom pa-16" width="100%" color="white-primary">
            <VRow justify="center" align="center">
              <VCol cols="3">
                <VImg src="/img/about-us/who-we-are-left.png" />
              </VCol>
              <VCol cols="6" class="text-center">
                <h1 class="font-weight-black">Who We Are</h1>
                <div class="text-h6 px-2 mt-5">
                  We are a team of digital enthusiasts, visionaries, and
                  problem-solvers who share a passion for creating a platform that
                  truly serves the digital workforce. Our backgrounds span
                  technology, entrepreneurship, and design, and we bring a wealth
                  of experience to the table.
                </div>
              </VCol>
              <VCol cols="3">
                <VImg src="/img/about-us/who-we-are-right.png" />
              </VCol>
            </VRow>
          </VSheet>
        </div>
        <h2 class="text-center font-weight-black pt-16 pb-10">
          What Sets Us Apart
        </h2>
        <div :class="smAndDown ? '' : 'px-16'">
          <div id="aboutSetsUsApart" class="py-6 px-8">
            <VRow>
              <VCol cols="12" md="4"
                ><VCard class="rounded-xl pa-5" hover>
                  <VCardTitle>
                    <VSheet
                      color="primary"
                      class="rounded-xl pa-4 d-flex justify-center align-center"
                      height="80"
                      width="80"
                      ><VImg
                        src="/img/about-us/tailored-for-digital-worker.svg"
                      />
                    </VSheet>
                  </VCardTitle>
                  <VCardText>
                    <div class="font-weight-black my-2 text-subtitle-1">
                      Tailored for Digital Workers
                    </div>
                    <div class="text-subtitle-2 font-weight-medium">
                      OOBRA is built with the unique needs of digital workers in
                      mind. We understand the challenges and aspirations of those
                      in the digital workspace and have designed our platform to
                      address them.
                    </div>
                  </VCardText>
                </VCard>
              </VCol>
              <VCol cols="12" md="4"
                ><VCard class="rounded-xl pa-5" hover>
                  <VCardTitle>
                    <VSheet
                      color="primary"
                      class="rounded-xl pa-4 d-flex justify-center align-center"
                      height="80"
                      width="80"
                      ><VImg src="/img/about-us/dedicated-to-clients.svg" />
                    </VSheet>
                  </VCardTitle>
                  <VCardText>
                    <div class="font-weight-black my-2 text-subtitle-1">
                      Dedicated to Clients
                    </div>
                    <div class="text-subtitle-2 font-weight-medium">
                      OOBRA is built with the unique needs of digital workers in
                      mind. We understand the challenges and aspirations of those
                      in the digital workspace and have designed our platform to
                      address them.
                    </div>
                  </VCardText>
                </VCard>
              </VCol>
              <VCol cols="12" md="4"
                ><VCard class="rounded-xl pa-5" hover>
                  <VCardTitle>
                    <VSheet
                      color="primary"
                      class="rounded-xl pa-4 d-flex justify-center align-center"
                      height="80"
                      width="80"
                      ><VImg src="/img/about-us/community-driven.svg" />
                    </VSheet>
                  </VCardTitle>
                  <VCardText>
                    <div class="font-weight-black my-2 text-subtitle-1">
                      Community-Driven
                    </div>
                    <div class="text-subtitle-2 font-weight-medium">
                      OOBRA is more than a platform; it's a community. We believe
                      in the power of collaboration and networking, and we've
                      created a space where digital workers and clients come
                      together to thrive.
                    </div>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </div>
        </div>
  
        <div class="d-flex justify-center pt-16">
          <div
            class="text-center text-subtitle-2 font-weight-bold"
            style="max-width: 34%"
          >
            At OOBRA, we believe that the future of work is digital. In a rapidly
            evolving world, where flexibility, innovation, and talent know no
            boundaries, we're here to bridge the gap between digital workers and
            clients.
          </div>
        </div>
        <div class="text-center py-16">
          <div class="text-h4 text-primary my-5">Ready to get started?</div>
          <div>
            <v-btn size="large" class="text-body-1 mb-5 px-9" color="primary"
              >Sign up now</v-btn
            >
          </div>
          <div>or explore our <a href="#">opportunities</a></div>
        </div>
      </VContainer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useDisplay } from "vuetify";
  const { smAndDown } = useDisplay();
  
  useSeoMeta({
    title: "About - OOBRA",
  });
  </script>
  
  <style scoped>
  #aboutPage {
    background-color: #e9f2fb;
  }
  
  .rounded-bottom {
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  </style>