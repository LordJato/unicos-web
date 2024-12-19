<template>
    <div id="whyUnicos" v-intersect="{
        handler: onIntersect,
        options: {
            threshold: 0,
        },
    }">
        <div class="svg-layered-border layered-top">
            <img src="~/assets/images/hero/why-unicos/layered-top.svg" class="w-100 h-25" />
        </div>
        <video v-if="isIntersecting" autoplay loop muted playsinline class="background-video">
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <VRow justify="center" align="center" class="h-100">
            <VCol cols="12" lg="10" xl="9">
                <VContainer class="h-100">
                    <VRow align="center">
                        <VCol cols="12" md="6">
                            <VCard class="pa-12 my-16 my-md-none" rounded="xl" max-width="600"
                                style="background-color: rgba(7, 15, 43, 0.9);">
                                <div class="d-md-flex align-center text-center">
                                    <v-icon icon="mdi-cloud-question" color="secondary" data-aos="fade-down"
                                        data-aos-duration="1000" ></v-icon>
                                    <div class="text-h6 text-md-h4 ml-2" data-aos="fade-up"
                                        data-aos-duration="1000">Why Unicos?</div>
                                </div>
                                <div class="text-subtitle-1 text-md-h6  mt-6 text-left" data-aos="fade-down"
                                    data-aos-duration="200" data-aos-delay="1000">
                                    A different approach, using a multi-tenant
                                    HRIS.
                                </div>
                                <div class="text-subtitle-1 font-weight-bold mt-3" data-aos="zoom-in-left"
                                    data-aos-duration="1000">Key Features:</div>
                                <div class="mt-1" data-aos="zoom-in-right" data-aos-duration="1000"
                                    data-aos-delay="200">
                                    <span class="font-weight-bold">Company Access:</span> Manage multiple companies
                                    from a unified dashboard.
                                </div>
                                <div class="mt-2" data-aos="zoom-in-right" data-aos-duration="1000"
                                    data-aos-delay="400">
                                    <span class="font-weight-bold">HRIS Platform:</span>
                                    Streamline HR processes
                                    with our intuitive and customizable
                                    tool.
                                </div>
                                <div class="mt-2" data-aos="zoom-in-right" data-aos-duration="1000"
                                    data-aos-delay="600">
                                    <span class="font-weight-bold">Job Portal:</span>
                                    Find talent or post job openings.
                                </div>
                                <div class="text-subtitle-1 font-weight-bold mt-2" data-aos="zoom-in-left"
                                    data-aos-duration="1000">Benefits:</div>

                                <div class="mt-2" data-aos="zoom-in-right" data-aos-duration="1000"
                                    data-aos-delay="300">
                                    <span>
                                        <VIcon color="secondary">mdi-circle-small</VIcon>
                                    </span>Enhanced user experience
                                </div>
                                <div class="mt-2" data-aos="zoom-in-right" data-aos-duration="1000"
                                    data-aos-delay="400">
                                    <span>
                                        <VIcon color="secondary">mdi-circle-small</VIcon>
                                    </span>Efficient HR management
                                </div>
                                <div class="mt-2" data-aos="zoom-in-right" data-aos-duration="1000"
                                    data-aos-delay="500">
                                    <span>
                                        <VIcon color="secondary">mdi-circle-small</VIcon>
                                    </span>Access to top candidates
                                </div>
                                <div class="mt-2" data-aos="zoom-in-right" data-aos-duration="1000"
                                    data-aos-delay="600">
                                    <span>
                                        <VIcon color="secondary">mdi-circle-small</VIcon>
                                    </span>Reduced administrative burdens
                                </div>
                                <div class="mt-2" data-aos="zoom-in-right" data-aos-duration="1000"
                                    data-aos-delay="700">
                                    <span>
                                        <VIcon color="secondary">mdi-circle-small</VIcon>
                                    </span>Improved data analysis and insights
                                </div>
                                <div class="font-weight-bold text-subtitle-1 mt-5" data-aos="zoom-out-up"
                                    data-aos-duration="2000">
                                    Unicos empowers businesses to optimize HR operations, enhance productivity, and
                                    drive growth.
                                </div>

                            </VCard>
                        </VCol>
                    </VRow>
                </VContainer>
            </VCol>
        </VRow>
        <div class="svg-layered-border layered-bottom">
            <img src="~/assets/images/hero/why-unicos/layered-bottom.svg" class="w-100 h-25" />
        </div>
    </div>
</template>

<script setup lang="ts">

import videoSrc from "~/assets/videos/why-us-bg.mp4";

const isIntersecting = ref(false);

const onIntersect = (isIntersectingValue: any) => {
    isIntersecting.value = isIntersectingValue
}

</script>

<style scoped>
#whyUnicos {
    position: relative;
    min-height: 150vh;
    width: 100%;
    overflow: hidden;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -9;
}

.svg-layered-border {
    position: absolute;

    width: 100%;
    z-index: -1;

}

.layered-bottom {
    bottom: 0;
    margin-bottom: -20px;
}


.layered-top {
    top: 0;
}
</style>