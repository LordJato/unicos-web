<template>
    <div id="opportunitiesSection">
      <VContainer fluid class="pa-0">
        <VSheet
          :height="100"
          width="100w"
          color="success"
          class="text-center d-flex align-center justify-center"
        >
          <div class="w-25">
            <div class="text-h5 font-weight-bold">
              <span>{{ jobsFound }}</span> Jobs Found
            </div>
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
        </VSheet>
        <VRow justify="center" align="center">
          <VCol cols="12" md="8">
            <VRow class="py-8">
              <VCol cols="12" md="4">
                <div class="font-weight-bold text-h6">Filter</div>
                <div>
                  <div class="font-weight-bold mt-2">Job Type</div>
                  <v-checkbox
                    v-model="selected"
                    label="Full Time"
                    value="Full Time"
                    hide-details
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="Part Time"
                    value="Part Time"
                    hide-details
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="Contractor"
                    value="Contractor"
                    hide-details
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="Temporary"
                    value="Temporary"
                    hide-details
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="Intern"
                    value="Intern"
                    hide-details
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <div class="font-weight-bold mt-2">Experience Level</div>
                  <v-checkbox
                    v-model="selected"
                    label="Entry Level"
                    value="Entry Level"
                    hide-details
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="Intermediate"
                    value="Intermediate"
                    hide-details
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="Expert"
                    value="Expert"
                    hide-details
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <div class="font-weight-bold mt-2">Salary</div>
                  <VTextField
                    density="compact"
                    variant="solo"
                    placeholder="Search for the Perfect Job"
                    hide-details
                    flat
                    class="d-inline"
                  />
                  <VTextField
                    density="compact"
                    variant="solo"
                    placeholder="Search for the Perfect Job"
                    hide-details
                    flat
                  />
                </div>
              </VCol>
              <VCol cols="12" md="8">
                <div class="font-weight-bold text-h6">
                  Jobs recommended for you
                </div>
                <div>
                  <VCard class="pa-5 rounded-lg my-4" elevation="0">
                    <VCardText>
                      <VRow>
                        <VAvatar class="rounded-lg" size="60">
                          <VImg
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          ></VImg>
                        </VAvatar>
                        <div class="ml-4">
                          <div class="text-h5 font-weight-bold">
                            Content Writer
                          </div>
                          <div class="text-subtitle-1">
                            Spring Valley Tech Corp.
                          </div>
                        </div>
                        <VSpacer />
                        <VBtn
                          color="grey-darken-2"
                          variant="text"
                          icon="mdi-bookmark"
                        ></VBtn>
                      </VRow>
                      <VRow class="mt-7" align="center">
                        <v-chip label color="primary"> Full Time </v-chip>
                        <v-chip label color="#9E9E9E" class="ml-2">
                          Intermediate
                        </v-chip>
                        <v-chip label color="success" class="ml-2">
                          <span class="font-weight-bold mr-2"> &#8369; </span>
                          <span class="font-weight-bold mr-1">36K - 58k</span> per
                          month</v-chip
                        >
                        <VSpacer />
  
                        <span> Posted 3 days ago </span>
                      </VRow>
                    </VCardText>
                  </VCard>
                  <VCard class="pa-5 rounded-lg my-4" elevation="0">
                    <VCardText>
                      <VRow>
                        <VAvatar class="rounded-lg" size="60">
                          <VImg
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          ></VImg>
                        </VAvatar>
                        <div class="ml-4">
                          <div class="text-h5 font-weight-bold">
                            Content Writer
                          </div>
                          <div class="text-subtitle-1">
                            Spring Valley Tech Corp.
                          </div>
                        </div>
                        <VSpacer />
                        <VBtn
                          color="grey-darken-2"
                          variant="text"
                          icon="mdi-bookmark"
                        ></VBtn>
                      </VRow>
                      <VRow class="mt-7" align="center">
                        <v-chip label color="primary"> Full Time </v-chip>
                        <v-chip label color="#9E9E9E" class="ml-2">
                          Intermediate
                        </v-chip>
                        <v-chip label color="success" class="ml-2">
                          <span class="font-weight-bold mr-2"> &#8369; </span>
                          <span class="font-weight-bold mr-1">36K - 58k</span> per
                          month</v-chip
                        >
                        <VSpacer />
  
                        <span> Posted 3 days ago </span>
                      </VRow>
                    </VCardText>
                  </VCard>
                  <VCard class="pa-5 rounded-lg my-4" elevation="0">
                    <VCardText>
                      <VRow>
                        <VAvatar class="rounded-lg" size="60">
                          <VImg
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          ></VImg>
                        </VAvatar>
                        <div class="ml-4">
                          <div class="text-h5 font-weight-bold">
                            Content Writer
                          </div>
                          <div class="text-subtitle-1">
                            Spring Valley Tech Corp.
                          </div>
                        </div>
                        <VSpacer />
                        <VBtn
                          color="grey-darken-2"
                          variant="text"
                          icon="mdi-bookmark"
                        ></VBtn>
                      </VRow>
                      <VRow class="mt-7" align="center">
                        <v-chip label color="primary"> Full Time </v-chip>
                        <v-chip label color="#9E9E9E" class="ml-2">
                          Intermediate
                        </v-chip>
                        <v-chip label color="success" class="ml-2">
                          <span class="font-weight-bold mr-2"> &#8369; </span>
                          <span class="font-weight-bold mr-1">36K - 58k</span> per
                          month</v-chip
                        >
                        <VSpacer />
  
                        <span> Posted 3 days ago </span>
                      </VRow>
                    </VCardText>
                  </VCard>
                </div>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VContainer>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useDisplay } from "vuetify";
  const { smAndDown } = useDisplay();
  const selected = ref([]);
  
  let jobsFound = 0;
  
  useSeoMeta({
    title: "Jobs Opportunities - OOBRA",
  });
  </script>
  
  <style scoped>
  #opportunitiesSection {
    background-color: #e9f2fb;
  }
  </style>