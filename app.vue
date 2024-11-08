<template>
  <NuxtLayout>
    <v-app>
      <div v-if="isLoading" class="loader"></div>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from '#imports';

const isLoading = ref(false);
const router = useRouter();

router.beforeEach(() => {
  isLoading.value = true;
});

router.afterEach(() => {
  isLoading.value = true;
});
</script>