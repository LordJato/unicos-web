<template>
  <section id="homeTopWorkers">
    <VRow justify="center" align="center" class="h-100">
      <VCol cols="12" lg="9">
        <VContainer class="h-100">
          <VRow justify="center" align="center">
            <VCol cols="12" md="6">
              <h1 class="text-h4">Meet Our Top Achievers!</h1>
              <h3 class="text-h6 my-6">Leading the charge in innovation and excellence. Explore their profiles, learn
                from their expertise,
                and collaborate with the best on Unicos.</h3>
              <div class="d-flex align-center mb-2" v-for="(trait, i) in traits" :key="i">
                <v-icon color="secondary" icon="mdi-tag-check-outline" class="mr-2" size="small"></v-icon>
                <p class="text-h6">
                  {{ trait }}
                </p>
              </div>
            </VCol>
            <VCol cols="12" md="6" class="d-flex justify-center align-center">
              <VRow justify="center" align="center">
                <VCol cols="12" md="6" class="mb-md-16">
                  <VHover v-for="(achiever, i) in achievers">
                    <template v-slot:default="{ isHovering, props }">
                      <VCard v-bind="props" :color="isHovering ? 'secondary' : 'dark-grey'"
                        class="mb-4 text-center rounded-xl pa-8 extra-rounded" :class="{ 'text-white': isHovering }">
                        <VImg class="rounded-circle mx-auto" :class="{ 'black-white-overlay': !isHovering }" cover
                          height="120" width="120" :src="achiever.img">
                        </VImg>
                        <VCardTitle>{{ achiever.name }}</VCardTitle>
                        <VCardSubtitle> {{ achiever.designation }}</VCardSubtitle>
                        <VCardText class="d-flex justify-space-around align-center">
                          <div class="position-relative rounded-circle bg-white pa-1" style="width: 40px; height: 40px;"
                            :class="{ 'black-white-overlay': !isHovering }" v-for="(tool, i) in achiever.tools">
                            <VImg :alt="tool.name" :src="tool.imageSrc"
                              class="rounded-circle" />
                          </div>
                        </VCardText>
                      </VCard>
                    </template>
                  </VHover>
                  <VHover>
                    <template v-slot:default="{ isHovering, props }">
                      <VCard v-bind="props" :color="isHovering ? 'secondary' : 'dark-grey'"
                        class="mb-4 text-center rounded-xl pa-8 extra-rounded" :class="{ 'text-white': isHovering }">
                        <VImg class="rounded-circle mx-auto" :class="{ 'black-white-overlay': !isHovering }" cover
                          height="120" width="120"
                          src="https://rszr.getimg.ai/resize?url=https%3A%2F%2Fimg.getimg.ai%2Fgenerated%2Fimg-mGtSk9modTnvsDVsxaXZC.jpeg&type=auto&width=640&speed=5">
                        </VImg>
                        <VCardTitle>Steto Javellana</VCardTitle>
                        <VCardSubtitle>Software Developer</VCardSubtitle>
                        <VCardText>Content for card 1</VCardText>
                      </VCard>
                    </template>
                  </VHover>
                </VCol>
                <VCol cols="12" md="6" class="mt-md-16">
                  <VHover>
                    <template v-slot:default="{ isHovering, props }">
                      <VCard v-bind="props" :color="isHovering ? 'secondary' : 'dark-grey'"
                        class="mb-4 text-center rounded-xl pa-8 extra-rounded" :class="{ 'text-white': isHovering }">
                        <VImg class="rounded-circle mx-auto" :class="{ 'black-white-overlay': !isHovering }" cover
                          height="120" width="120"
                          src="https://rszr.getimg.ai/resize?url=https%3A%2F%2Fimg.getimg.ai%2Fgenerated%2Fimg-mGtSk9modTnvsDVsxaXZC.jpeg&type=auto&width=640&speed=5">
                        </VImg>
                        <VCardTitle>Steto Javellana</VCardTitle>
                        <VCardSubtitle>Software Developer</VCardSubtitle>
                        <VCardText>Content for card 1</VCardText>
                      </VCard>
                    </template>
                  </VHover>

                  <VHover>
                    <template v-slot:default="{ isHovering, props }">
                      <VCard v-bind="props" :color="isHovering ? 'secondary' : 'dark-grey'"
                        class="mb-4 text-center rounded-xl pa-8 extra-rounded" :class="{ 'text-white': isHovering }">
                        <VImg class="rounded-circle mx-auto" :class="{ 'black-white-overlay': !isHovering }" cover
                          height="120" width="120"
                          src="https://rszr.getimg.ai/resize?url=https%3A%2F%2Fimg.getimg.ai%2Fgenerated%2Fimg-mGtSk9modTnvsDVsxaXZC.jpeg&type=auto&width=640&speed=5">
                        </VImg>
                        <VCardTitle>Steto Javellana</VCardTitle>
                        <VCardSubtitle>Software Developer</VCardSubtitle>
                        <VCardText>Content for card 1</VCardText>
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
        'name': 'Vuetify',
        imageSrc: 'https://i.pinimg.com/736x/9f/62/88/9f62881241737d130bb6b32f90e0886c.jpg'
      },
      {
        'name': 'JavaScript',
        imageSrc: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'
      },
    ]
  },
])

</script>

<style scoped>
#homeTopWorkers {
  background-image: url('/img/index/top-profile-bg.png');
  background-size: 48% auto;
  background-position: left top;
  background-repeat: no-repeat;
}

.black-white-overlay {
  filter: grayscale(100%) brightness(50%);
  transition: ease-in 1s;
}

.extra-rounded {
  border-radius: 60px !important;
}
</style>