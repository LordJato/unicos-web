<template>
    <div id="opportunitiesSection">
        <VContainer class="overlay" fluid>
          <VRow justify="center" align="center">
            <VCol cols="12" md="6" class="d-flex justify-center align-center">
              <h1 class="text-white text-h3 font-weight-bold">Career Opportunities at Your Fingertips</h1>
            </VCol>
            <VCol cols="12" md="6"></VCol>
          </VRow>
        </VContainer>
    </div>
  </template>
  
  <script setup>
  import opportunitiesBG from '@/public/img/opportunities/bg.jpg'
  import { ref } from "vue";
  const title = ref("Opportunities");
  useSeoMeta({
    title: title,
    titleTemplate: "%s - Unicos",
  });
  </script>
  
  <style scoped>
#opportunitiesSection {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e9f2fb;
}

#opportunitiesSection::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80%;
  background-image: url('img/opportunities/bg.jpg'); 
  background-size: cover;
  background-position: center;
  opacity: 0.75;
  border-radius: 0 0 120px 120px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80%;
  background: radial-gradient(circle, rgba(22,26,51,0.8379726890756303) 15%, rgba(33,50,104,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 120px 120px;
}
  </style>  