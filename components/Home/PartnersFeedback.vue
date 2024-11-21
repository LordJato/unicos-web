<template>
    <section id="homeFeedback">
        <div class="w-100 text-center">
            <h1 class="text-h4">Voices from Our Community</h1>
            <p class="text-h6 mt-4 mb-10"> We're proud of the results we've achieved together. Here's what our clients
                say about working with us </p>
            <v-carousel hide-delimiters show-arrows class="h-100">
                <v-carousel-item color="transparent" v-for="(feedback, i) in feedbacks">
                    <VCard  max-width="1100" class=" rounded-xl mx-auto" elevation="9">
                        <VImg :src="feedback.backgroundImg" height="580" cover class="position-relative">
                            <div class="overlay"></div>
                            <VContainer class="h-100 text-start pa-16">
                                <VRow class="h-100">
                                    <VCol cols="12" md="7" class="d-flex align-start flex-column">
                                        <VIcon icon="mdi-format-quote-open-outline" size="100" color="secondary" />
                                        <p class="text-caption text-md-subtitle-1 text-justify mt-2">
                                            {{ feedback.message }}
                                        </p>
                                        <p class="mt-2 mt-md-8 text-caption text-md-subtitle-1" v-if="feedback.subMessage">
                                            {{ feedback.subMessage }}
                                        </p>
                                        <div class="d-flex align-center mt-4 mt-md-auto">
                                            <span class="mr-3">
                                                <VAvatar size="large">
                                                    <VImg :alt="feedback.name" style="filter: grayscale(100%);"
                                                        :src="feedback.img" />
                                                </VAvatar>
                                            </span>
                                            <span>
                                                <div class="text-body-1 font-weight-bold">{{ feedback.name }}</div>
                                                <div class="text-caption">{{ feedback.position }}</div>
                                            </span>
                                        </div>
                                    </VCol>
                                </VRow>
                            </VContainer>
                        </VImg>
                    </VCard>
                </v-carousel-item>
                <template v-slot:prev="{ props }">
                    <v-btn color="secondary" variant="elevated" @click="props.onClick"
                        icon="mdi-page-previous-outline" class="text-white text-caption" size="small"></v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn color="secondary" variant="elevated" elevation="5" @click="props.onClick"
                        icon="mdi-page-next-outline" class="text-white text-caption" size="small"></v-btn>
                </template>
            </v-carousel>
        </div>

    </section>
</template>

<script setup lang="ts">

const feedbacks = ref([
    {
        backgroundImg: '/img/index/business.jpg',
        message: "Unicos has been our trusted partner for over five years, providing top-tier development resources through their team of 40+ skilled professionals. Under Steto's leadership, they've consistently demonstrated exceptional quality,loyalty, and commitment.",
        subMessage: "We strongly recommend Unicos for their outstanding expertise and service.",
        img: "https://imgix.ranker.com/user_node_img/50082/1001639646/original/being-strong-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355",
        name: 'Steto Javellana',
        position: 'Junior Software Developer'
    },

    {
        backgroundImg: "https://img.freepik.com/premium-photo/business-woman-sitting-front-tablet-laptop-computer-with-financial-graphs-statistics-monitor-officexa_71455-2606.jpg",
        message: "Everything is hard in the beginning. It doesn’t matter how vast the sea or how profound the idea, there is always an origin. One step at a time to walk a thousand miles. Start from the bottom with the most sincere attitude towards the top. If it doesn’t work the first time, do it a second time. If you fail again, then go for the third. As long as you persevere, you will see results.",
        subMessage: "We highly praise Unicos for their exceptional expertise and commitment to excellence.",
        img: "https://i.pinimg.com/736x/11/aa/57/11aa571334382cab1e7e60d47b7a755a.jpg",
        name: 'Li Qiye',
        position: "Emperor's Domination"
    },

    {
        backgroundImg: "https://img.freepik.com/premium-photo/young-man-connecting-with-digital-tablet-home_738298-156.jpg",
        message: "Continue living, continue preserving. To us minor characters, crying is of no use, no one will hear us even if we shout, we can only persevere by ourselves.",
        subMessage: "Persevere until you accomplish great feats, become extraordinary.",
        img: "https://static1.personality-database.com/profile_images/75301bd9818c41ecb2b9690599629885.png",
        name: 'Fang Yuan',
        position: 'Reverened Insanity'
    },


    
])

</script>

<style scoped>
#homeFeedback {
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-color: transparent;
    background:
        url("/img/index/circuit-board.svg") no-repeat center,
        radial-gradient(circle, rgba(33, 50, 104, 1) 0%, rgba(7, 15, 43, 1) 76%);
    height: 100vh;

}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(90deg, rgba(7, 15, 43, 1) 25%, rgba(7, 15, 43, 0.9) 70%, rgba(33, 50, 104, 0.9) 100%);
    z-index: -1;
}
</style>