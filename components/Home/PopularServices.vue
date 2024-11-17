<template>
    <VRow align="center" justify="center" class="h-100">
        <VCol cols="12" lg="9">
            <VContainer class="h-100">
                <div class="text-center text-h4 mb-5">Popular Services</div>
                <v-sheet class="mx-auto" elevation="8">
                    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                        <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                            <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200"
                                width="250" @click="toggle">
                                <div class="d-flex fill-height align-center justify-center">
                                    <v-scale-transition>
                                        <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline"
                                            size="48"></v-icon>
                                    </v-scale-transition>
                                </div>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </VContainer>
        </VCol>
    </VRow>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const model = ref(null)

</script>

<style scoped></style>