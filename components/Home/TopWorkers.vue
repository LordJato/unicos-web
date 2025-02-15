<template>
  <section id="homeTopWorkers">

    <VRow justify="center" align="center" class="h-100">
      <VCol cols="12" xl="9" lg="10">
        <VContainer class="h-100">
          <VRow justify="center" align="center">
            <VCol cols="12" md="6">
              <div class="mb-6">
                <div class="d-md-flex align-center text-center">
                  <v-icon icon="mdi-trophy-award" color="secondary" data-aos="fade-down" data-aos-duration="1000"
                  ></v-icon>
                <div class="text-uppercase text-h6 text-md-h4 mt-2 ml-2" data-aos="fade-up" data-aos-duration="1000">Meet Our
                  Top Achievers!</div>
                </div>
                <div class="text-subtitle-1 text-md-h6 mt-6 text-left" data-aos="fade-down"
                  data-aos-duration="200" data-aos-delay="1000">
                  Leading the charge in innovation and excellence. Explore their profiles, learn from their expertise,
                  and collaborate with the best on Unicos.
                </div>
              </div>
              <div class="d-flex align-center mb-2" v-for="(trait, i) in traits" :key="i" data-aos="zoom-in-right"
                data-aos-duration="1000" :data-aos-delay="200 * (i + 1)">
                <v-icon color="secondary" icon="mdi-tag-check-outline" class="mr-2" size="small"></v-icon>
                <p class="text-subtitle-1">
                  {{ trait }}
                </p>
              </div>
            </VCol>
            <VCol cols="12" md="6" class="d-flex justify-center align-center position-relative">
              <div class="pulsating-circle"></div>
              <div class="pulsating-circle"></div>
              <div class="pulsating-circle"></div>
              <div class="pulsating-circle"></div>
              <VRow justify="center" align="center">
                <VCol cols="12" md="6" :class="i % 2 === 0 ? 'mt-md-16' : 'mb-md-16'"
                  v-for="(achiever, i) in achievers.slice(0, 2)">
                  <VHover>
                    <template v-slot:default="{ isHovering, props }">
                      <VCard v-bind="props" :color="isHovering ? 'secondary' : ''"
                        class="mb-4 text-center rounded-xl py-10 px-8 px-lg-2 " :class="{ 'text-white': isHovering }"
                        elevation="8">
                        <VImg class="rounded-circle mx-auto" :class="{ 'black-white-overlay': !isHovering }" cover
                          height="120" width="120" :src="achiever.img">
                        </VImg>
                        <VCardTitle><nuxt-link to="#" class="text-decoration-none"
                            :class="{ 'text-grey': !isHovering, 'text-white': isHovering }">{{ achiever.name
                            }}</nuxt-link></VCardTitle>
                        <VCardSubtitle> {{ achiever.designation }}</VCardSubtitle>
                        <VCardText class="d-flex justify-center align-center">
                          <div class="position-relative circle-image pa-1 mr-2" style="width: 40px; height: 40px;"
                            :class="{ 'black-white-overlay': !isHovering }" v-for="(tool, i) in achiever.tools">
                            <VTooltip activator="parent" location="bottom" class="custom-tooltip" open-on-click>
                              <div class="text-white font-weight-bold">{{ tool.name }}</div>
                            </VTooltip>
                            <img :alt="tool.name" :src="tool.imageSrc" />
                          </div>
                        </VCardText>
                      </VCard>
                    </template>
                  </VHover>
                </VCol>
                <VCol cols="12" md="6" :class="i % 2 === 0 ? 'mt-md-16' : 'mb-md-16'"
                  v-for="(achiever, i) in achievers.slice(2)">
                  <VHover>
                    <template v-slot:default="{ isHovering, props }">
                      <VCard v-bind="props" :color="isHovering ? 'secondary' : ''"
                        class="mb-4 text-center rounded-xl py-10 px-8 px-lg-2" :class="{ 'text-white': isHovering }"
                        elevation="8">
                        <VImg class="rounded-circle mx-auto" :class="{ 'black-white-overlay': !isHovering }" cover
                          height="120" width="120" :src="achiever.img">
                        </VImg>
                        <VCardTitle><nuxt-link to="#" class="text-decoration-none"
                            :class="{ 'text-grey': !isHovering, 'text-white': isHovering }">{{ achiever.name
                            }}</nuxt-link></VCardTitle>
                        <VCardSubtitle> {{ achiever.designation }}</VCardSubtitle>
                        <VCardText class="d-flex justify-center align-center">
                          <div class="position-relative circle-image pa-1 mr-2" style="width: 40px; height: 40px;"
                            :class="{ 'black-white-overlay': !isHovering }" v-for="(tool, i) in achiever.tools">
                            <VTooltip activator="parent" location="bottom" class="custom-tooltip" open-on-click>
                              <div class="text-white font-weight-bold">{{ tool.name }}</div>
                            </VTooltip>
                            <img :alt="tool.name" :src="tool.imageSrc" />
                          </div>
                        </VCardText>
                      </VCard>
                    </template>
                  </VHover>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </VContainer>
      </VCol>
    </VRow>
  </section>
</template>

<script setup lang="ts">

const traits = ref([
  'Professional Certifications',
  'Portfolio Showcasing Expertise',
  'High-quality Deliverables',
  'Adherence To Deadlines',
  'Clear and Concise Reporting',
  'Long-term Collaboration Potential',
  'Strong work ethic'
])


const achievers = ref([
  {
    'img': 'https://rszr.getimg.ai/resize?url=https%3A%2F%2Fimg.getimg.ai%2Fgenerated%2Fimg-mGtSk9modTnvsDVsxaXZC.jpeg&type=auto&width=640&speed=5',
    'name': 'Steto Javellana',
    'designation': 'Software Developer',
    'tools': [
      {
        'name': 'Nuxt',
        imageSrc: 'https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-icon.png'
      },
      {
        'name': 'Vue',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
      },
      {
        'name': 'Laravel',
        imageSrc: 'https://i.pinimg.com/736x/d6/4f/7a/d64f7aa027832cc02c1ec999e3f4fa65.jpg'
      },
      {
        'name': 'MySQL',
        imageSrc: 'https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png'
      },
    ]
  },
  {
    'img': 'https://img.freepik.com/premium-photo/lofi-anime-boy_863013-93528.jpg?w=360',
    'name': 'Steto Javellana',
    'designation': 'Backend Developer',
    'tools': [
      {
        'name': 'Laravel',
        imageSrc: 'https://i.pinimg.com/736x/d6/4f/7a/d64f7aa027832cc02c1ec999e3f4fa65.jpg'
      },
      {
        'name': 'ASP.NET Core',
        imageSrc: 'https://www.pulumi.com/logos/tech/dotnet.png'
      }
    ]
  },
  {
    'img': 'https://img.freepik.com/premium-photo/anime-boy-sitting-couch-with-his-fingers-up-generative-ai_900814-78704.jpg?w=360',
    'name': 'Steto Javellana',
    'designation': 'Frontend Developer',
    'tools': [
      {
        'name': 'Nuxt',
        imageSrc: 'https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-icon.png'
      },
      {
        'name': 'Vue',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
      },
      {
        'name': 'Vuetify',
        imageSrc: 'https://i.pinimg.com/736x/9f/62/88/9f62881241737d130bb6b32f90e0886c.jpg'
      },
      {
        'name': 'JavaScript',
        imageSrc: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'
      },
    ]
  },
  {
    'img': 'https://file.aiquickdraw.com/imgcompressed/img/compressed_ac7b0a7afaa9e70bec17638d56e9fad2.webp',
    'name': 'Steto Javellana',
    'designation': 'Database Developer',
    'tools': [
      {
        'name': 'MySQL',
        imageSrc: 'https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png'
      },
      {
        'name': 'MSSQL',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968364.png'
      }
    ]
  },
])

</script>

<style scoped>
#homeTopWorkers {
  background: url('~/assets/images/hero/top-workers/bg.png') left top no-repeat #070f2b;
  background-size: 48% auto;
  margin-top: 60px;
}

.black-white-overlay {
  filter: grayscale(100%) brightness(50%);
  transition: ease-in 1s;
}

.extra-rounded {
  border-radius: 60px !important;
}

.pulsating-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(33, 50, 104, 1) 0%, rgba(7, 15, 43, 1) 10%);
  z-index: -1;
}

.pulsating-circle:before {
  content: '';
  position: relative;
  display: block;
  width: 120%;
  height: 120%;
  box-sizing: border-box;
  margin-left: -10%;
  margin-top: -10%;
  border-radius: 50%;
  background-color: rgb(54, 197, 200, 0.4);
  animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

.pulsating-circle:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(33, 50, 104, 0.8) 0%, rgba(7, 15, 43, 1) 60%);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(54, 197, 200, 0.2);
  animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
}


/* Pulsing Ring Animation */
@keyframes pulse-ring {
  0% {
    transform: scale(0.33);
  }

  80%,
  100% {
    opacity: 0;
  }
}

/* Pulsing Dot Animation */
@keyframes pulse-dot {
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.8);
  }
}

.pulsating-circle:nth-child(1) {
  width: 300px;
  height: 300px;
  top: 30%;
  left: 90%;
  animation: float 20s ease-in-out infinite;
  animation-delay: 2s;
}

/* Second Circle */
.pulsating-circle:nth-child(2) {
  width: 200px;
  height: 200px;
  top: 60%;
  left: 30%;
  animation: float2 15s ease-in-out infinite;
  animation-delay: 5s;
}

/* Third Circle */
.pulsating-circle:nth-child(3) {
  width: 350px;
  height: 350px;
  top: 25%;
  left: 10%;
  animation: float3 20s ease-in-out infinite;
  animation-delay: 1s;
}

/* Fourth Circle */
.pulsating-circle:nth-child(4) {
  width: 370px;
  height: 370px;
  top: 65%;
  left: 70%;
  animation: float4 10s ease-in-out infinite;
  animation-delay: 2s;
}


/* Floating Animation */
@keyframes float {
  0% {
    transform: translate(-50%, -50%) translate(0, 0);
  }

  25% {
    transform: translate(-50%, -50%) translate(130px, 15px);
  }

  50% {
    transform: translate(-50%, -50%) translate(-45px, 80px);
  }

  75% {
    transform: translate(-50%, -50%) translate(-20px, -110px);
  }

  100% {
    transform: translate(-50%, -50%) translate(0, 0);
  }
}

@keyframes float2 {
  0% {
    transform: translate(-50%, -50%) translate(0, 0);
  }

  25% {
    transform: translate(-50%, -50%) translate(75px, -20px);
  }

  50% {
    transform: translate(-50%, -50%) translate(-60px, 40px);
  }

  75% {
    transform: translate(-50%, -50%) translate(40px, -70px);
  }

  100% {
    transform: translate(-50%, -50%) translate(0, 0);
  }
}

@keyframes float3 {
  0% {
    transform: translate(-50%, -50%) translate(0, 0);
  }

  25% {
    transform: translate(-50%, -50%) translate(120px, -45px);
  }

  50% {
    transform: translate(-50%, -50%) translate(-90px, 75px);
  }

  75% {
    transform: translate(-50%, -50%) translate(60px, -30px);
  }

  100% {
    transform: translate(-50%, -50%) translate(0, 0);
  }
}

@keyframes float4 {
  0% {
    transform: translate(-50%, -50%) translate(0, 0);
  }

  25% {
    transform: translate(-50%, -50%) translate(90px, -10px);
  }

  50% {
    transform: translate(-50%, -50%) translate(-70px, 110px);
  }

  75% {
    transform: translate(-50%, -50%) translate(50px, -90px);
  }

  100% {
    transform: translate(-50%, -50%) translate(0, 0);
  }
}

.circle-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-image img {
  width: 70%;
  height: 70%;
  object-fit: cover;
}
</style>