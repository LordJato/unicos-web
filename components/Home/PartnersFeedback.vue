<template>
    <section id="homeFeedback">
        <div class="w-100 text-center">
            <h1 class="text-h4">Voices from Our Community</h1>
            <p class="text-h6 mt-4 mb-8"> We're proud of the results we've achieved together. Here's what our clients
                say about working with us </p>
            <v-carousel hide-delimiters show-arrows height="100%">
                <v-carousel-item color="transparent">
                    <VCard max-width="1080" class="position-relative rounded-xl mx-auto" elevation="9">
                        <VImg src="/public/img/index/business.jpg" cover>
                            <div class="overlay"></div>
                            <VContainer class="h-100 text-start pa-16">
                                <VRow>
                                    <v-col cols="12" md="7">
                                        <v-icon icon="mdi-format-quote-open-outline" size="100"
                                            color="secondary"></v-icon>
                                        <p class="text-subtitle-1 text-justify mt-2">
                                            Unicoss has been our trusted partner for over five years, providing top-tier
                                            development resources through their team of 40+ skilled professionals. Under
                                            Steto's leadership, they've consistently demonstrated exceptional quality,
                                            loyalty, and commitment.
                                        </p>
                                        <p class="mt-8">
                                            We strongly recommend Unicoss for their outstanding expertise and service.
                                        </p>
                                        <div class="d-flex align-center mt-10">
                                            <span class="mr-3">
                                                <v-avatar size="large">
                                                    <v-img alt="John" style="filter: grayscale(100%);"
                                                        src="https://imgix.ranker.com/user_node_img/50082/1001639646/original/being-strong-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355" />
                                                </v-avatar>
                                            </span>
                                            <span>
                                                <div class="text-body-1 font-weight-bold">Steto Javellana</div>
                                                <div class="text-caption">Junior Software Developer</div>
                                            </span>
                                        </div>
                                    </v-col>
                                </VRow>
                            </VContainer>
                        </VImg>
                    </VCard>

                </v-carousel-item>

                <template v-slot:prev="{ props }">
                    <v-btn color="secondary" variant="elevated" @click="props.onClick"
                        prepend-icon="mdi-page-previous-outline" class="text-white text-caption">Prev</v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn color="secondary" variant="elevated" elevation="5" @click="props.onClick"
                        append-icon="mdi-page-next-outline" class="text-white text-caption">Next</v-btn>
                </template>
            </v-carousel>
        </div>

    </section>
</template>

<script setup lang="ts">

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

}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(90deg, rgba(7, 15, 43, 1) 15%, rgba(7, 15, 43, 0.9) 70%, rgba(33, 50, 104, 0.9) 100%);
    z-index: -1;
}
</style>