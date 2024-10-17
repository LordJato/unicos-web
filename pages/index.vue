<template>
    <div id="homePage">
      <section id="homeSection" class="px-4 px-md-16 mt-md-n12 py-2">
        <VRow align="center" justify="center">
          <VCol cols="12" md="6">
            <div class="mt-6">
              <span
                class="font-weight-bold d-inline home-header text-h3 text-md-h2"
              >
              Experience the power of a unified HR solution that adapts to your growing business needs with
              </span>
              <span
                class="font-weight-bold home-header text-h3 text-md-h2"
                id="oobraText"
              >
                UNICOS
                <!-- <img src="/img/logo.png" class="d-inline" alt="OOBRA Logo" /> -->
              </span>
            </div>
  
            <div class="mt-12">
              <div class="d-flex">
                <VTextField
                  density="compact"
                  variant="solo"
                  placeholder="Search for the Perfect Job"
                  hide-details
                  flat
                >
                  <template v-slot:append-inner>
                    <v-btn color="primary" height="38" flat class="mr-n2"
                      ><v-icon>mdi-magnify</v-icon></v-btn
                    >
                  </template></VTextField
                >
              </div>
            </div>
  
            <div class="mt-12">
              <p class="text-overline font-weight-bold">Registered Agencies</p>
              <VRow>
                <VCol sm="4" cols="6" v-for="(agency, i) in agencies" :key="i">
                  <VCard flat color="transparent" max-width="150">
                    <VImg
                      :src="agency.img"
                      :alt="agency.img"
                      height="50px"
                      cover
                    />
                  </VCard>
                </VCol>
              </VRow>
            </div>
          </VCol>
          <VCol cols="12" md="6" class="d-flex justify-center justify-md-end">
            <VImg max-width="520" src="/img/freelancer.png" />
          </VCol>
        </VRow>
      </section>
      <section id="chooseOobraSection">
        <div class="py-6">
          <div class="font-weight-bold text-white text-h5 text-center mt-6 mb-16">
            Why Choose OOBRA?
          </div>
          <VRow justify="center" align="center">
            <VCol cols="9">
              <VRow align="center">
                <VCol cols="12" md="4">
                  <VCard class="rounded-lg pa-8" height="400">
                    <VCardText class="text-left">
                      <div class="font-weight-bold text-h5">
                        Empowerment for Digital Workers
                      </div>
                      <ul class="choose-oobra-ul">
                        <li>
                          Join a community that values your skills and offers
                          exclusive agency benefits for financial stability.
                        </li>
                        <li>
                          Explore diverse projects to build a real-world portfolio
                          and elevate your digital career.
                        </li>
                      </ul>
                    </VCardText>
                  </VCard>
                </VCol>
                <VCol cols="12" md="4">
                  <VCard class="rounded-lg pa-8">
                    <VCardText class="text-left">
                      <div class="font-weight-bold text-h5">
                        Seamless Recruitment for Clients
                      </div>
                      <ul class="choose-oobra-ul">
                        <li>
                          Source top digital talent globally with advanced search
                          functionality and detailed worker profiles.
                        </li>
                        <li>
                          Streamline your hiring process with a user-friendly
                          platform and access a pool of skilled professionals.
                        </li>
                      </ul>
                    </VCardText>
                  </VCard>
                </VCol>
                <VCol cols="12" md="4">
                  <VCard class="rounded-lg pa-8" height="400">
                    <VCardText class="text-left">
                      <div class="font-weight-bold text-h5">
                        Visionary Collaboration for Agencies
                      </div>
                      <ul class="choose-oobra-ul">
                        <li>
                          Build specialized teams with global talent to enhance
                          your agency's competitiveness.
                        </li>
                        <li>
                          Join a collaborative ecosystem where agencies and
                          digital workers thrive together.
                        </li>
                      </ul>
                    </VCardText>
                  </VCard>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>
        <!-- <div class="svg-border-waves">
          <img src="/img/borderWaves.svg" />
        </div> -->
      </section>
      <div>
        <VRow justify="center" align="center">
          <VCol cols="9">
            <VSheet
              width="100w"
              color="success"
              class=" rounded-bottom mb-16 py-16 px-8"
            >
              <div class="text-center text-h5 font-weight-bold mb-12">
                Explore OOBRA's Features
              </div>
              <VRow justify="center" align="center">
                <VCol cols="12" md="5" >
                  <VCard class="rounded-xl pa-8 text-left">
                    <VCardTitle class="font-weight-black text-h4 text-primary">
                      01.
                    </VCardTitle>
                    <VCardText class="font-weight-medium text-h6">
                      <div class="mb-3 font-weight-bold text-h5">
                        Advanced Search and Matching
                      </div>
                      <div class="line-height-175 font-weight-medium text-subtitle-1">
                        Find the perfect match for your project with our powerful
                        search and matching <br />algorithms.
                      </div>
                    </VCardText>
                  </VCard>
                </VCol>
                <VCol cols="12" md="5">
                  <VCard class="rounded-xl pa-8 text-left">
                    <VCardTitle class="font-weight-black text-h4 text-primary">
                      02.
                    </VCardTitle>
                    <VCardText class="font-weight-medium text-h6">
                      <div class="mb-3 font-weight-bold text-h5">
                        User-Friendly Platform
                      </div>
                      <div class="line-height-175 font-weight-medium text-subtitle-1">
                        Navigate seamlessly through our intuitive platform
                        designed for digital work <br />efficiency.
                      </div>
                    </VCardText>
                  </VCard>
                </VCol>
              </VRow>
              <VRow justify="center" align="center">
                <VCol cols="12" md="5">
                  <VCard class="rounded-xl pa-8 text-left">
                    <VCardTitle class="font-weight-black text-h4 text-primary">
                      03.
                    </VCardTitle>
                    <VCardText class="font-weight-medium text-h6">
                      <div class="mb-3 font-weight-bold text-h5">
                        Advanced Search and Matching
                      </div>
                      <div class="line-height-175 font-size-120">
                        Find the perfect match for your project with our powerful
                        search and matching algorithms.
                      </div>
                    </VCardText>
                  </VCard></VCol
                >
                <VCol cols="12" md="5">
                  <VCard class="rounded-xl pa-8 text-left">
                    <VCardTitle class="font-weight-black text-h4 text-primary">
                      04.
                    </VCardTitle>
                    <VCardText class="font-weight-medium text-h6">
                      <div class="mb-3 font-weight-bold text-h5">
                        Advanced Search and Matching
                      </div>
                      <div class="line-height-175 font-size-120">
                        Find the perfect match for your project with our powerful
                        search and matching algorithms.
                      </div>
                    </VCardText>
                  </VCard></VCol
                >
              </VRow>
            </VSheet>
          </VCol>
        </VRow>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import spacexImage from "/img/agency-logo/spacex.png";
  import metaImage from "/img/agency-logo/meta.png";
  import microsoftImage from "/img/agency-logo/microsoft.png";
  import { useDisplay } from "vuetify";
  
  const { mdAndUp } = useDisplay();
  
  const title = ref("Home");
  useSeoMeta({
    title,
  });
  
  const agencies = [
    { name: "Microsoft", img: microsoftImage },
    { name: "Meta", img: metaImage },
    { name: "Spacex", img: spacexImage },
  ];
  </script>
  
  <style scoped>
  #homePage {
    position: relative;
    z-index: 0;
    background-color: #e9f2fb;
  }
  
  section#chooseOobraSection {
    background-color: #007acc;
    z-index: -9999;
  }
  .rounded-bottom {
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  
  #oobraText {
    font-family: "Audiowide", cursive !important;
    color: #007acc;
  }
  </style>
  
  <style lang="scss" scoped>
  section {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .choose-oobra-ul > li {
    list-style: square;
    margin: 20px 15px;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.75rem;
  
    &::marker {
      font-size: 0.7em;
    }
  }
  
  .svg-border-waves {
    .v-image {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3rem;
      width: 100%;
      overflow: hidden;
    }
    img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      margin-bottom: -2px;
      z-index: -1;
    }
  }
  </style>
  
  