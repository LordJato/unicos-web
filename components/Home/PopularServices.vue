<template>
    <section id="popularServices">
        <VRow align="center" justify="center" class="h-100">
            <VCol cols="12" lg="9">
                <VContainer class="h-100">
                    <div class="text-center text-h4 mb-8">Explore Our Popular Services</div>
                    <VSheet class="mx-auto" elevation="8">
                        <VSlideGroup v-model="model" class="pa-4" center-active show-arrows>
                            <VSlideGroupItem v-for="(service, i) in services" :key="i" v-slot="{ isSelected, toggle }">
                                <VCard :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="250" @click="toggle">
                                    <VImg :src="service.img" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                                        <VCardTitle class="text-white" v-text="service.title"></VCardTitle>
                                    </VImg>
                                    <div class="d-flex fill-height align-center justify-center">
                                        <VScaleTransition>
                                            <VIcon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></VIcon>
                                        </VScaleTransition>
                                    </div>
                                </VCard>
                            </VSlideGroupItem>
                            <template v-slot:next="{}">
                                <VIcon size="x-large" color="secondary" v-bind="$attrs">mdi-chevron-right</VIcon>
                            </template>
                            <template v-slot:prev="{}">
                                <VIcon size="x-large" color="secondary" v-bind="$attrs">mdi-chevron-left</VIcon>
                            </template>
                        </VSlideGroup>
                    </VSheet>
                </VContainer>
            </VCol>
        </VRow>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const model = ref(null)

const services = ref([
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WvhkhkEyzcmE0UY24CQuna5ugHluT-gsLsMggfoBv0EgYXDq4H2tsaYUS8EoQSgc_VI&usqp=CAU',
        'title': 'House Maid'
    },
    {
        'img': 'https://vicekeeper.com/wp-content/uploads/2023/11/Why-Filipino.jpg',
        'title': 'Nanny'
    },
    {
        'img': 'https://images.metronewscentral.net/EMamozyufB17-construction.jpg',
        'title': 'Construction Worker'
    },
    {
        'img': 'https://img.freepik.com/premium-photo/construction-foreman-sits-talks-with-workers-takes-notes-progress-work-construction-site_697211-16610.jpg',
        'title': 'Foreman'
    },
    {
        'img': ' https://cloudfront-us-east-2.images.arcpublishing.com/reuters/W3BOW4LLMJM6BPWVIYPTXKKXIA.jpg',
        'title': 'Artist'
    },
    {
        'img': ' https://www.adb.org/sites/default/files/styles/content_media/public/content-media/7737-teach-philippines-2.jpg?itok=CJ8k830h',
        'title': 'Teacher'
    },
    {
        'img': 'https://thumbs.dreamstime.com/b/high-voltage-power-line-quezon-city-philippines-june-electricians-installing-new-electrical-concrete-post-inside-philippine-31485462.jpg',
        'title': 'Electrician'
    },
    {
        'img': 'https://pinoynegosyo.net/wp-content/uploads/2017/08/jollibee-counter-1024x576.jpg',
        'title': 'Fast Food Crew'
    }
])
</script>

<style scoped>
#popularServices {
    position: relative;
    z-index: 1;
}
</style>
