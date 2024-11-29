<template>
    <div id="whyUnicos" v-intersect="{
        handler: onIntersect,
        options: {
            threshold: 0,
        },
    }">
     <div class="svg-layered-border layered-top">
            <img src="/public/img/index/layered-top.svg" class="w-100 h-25" />
        </div>
        <video v-if="isIntersecting" autoplay loop muted playsinline class="background-video">
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <VRow justify="center" align="center" class="h-100">
            <VCol cols="12" lg="9">
                <VContainer class="h-100">
                    <VRow align="center">
                        <VCol cols="12" md="6">
                            <VCard class="pa-12" rounded="xl" max-width="600" style="background-color: rgba(7, 15, 43, 0.9);">
                                <VCardTitle class="text-h4">Why Unicos?</VCardTitle>
                             
                                <VCardText>
                                    <div class="text-h6 font-weight-bold">A different approach, using a multi-tenant HRIS.
                                    </div>
                                    <div class="text-subtitle-1 font-weight-black mt-3">Key Features:</div>
                                    <div class="mt-1">
                                        <span class="font-weight-bold">Company Access:</span> Manage multiple companies
                                        from a unified dashboard.
                                    </div>
                                    <div class="mt-2">
                                        <span class="font-weight-bold">HRIS Platform:</span>
                                        Streamline HR processes
                                        with our intuitive and customizable
                                        tool.
                                    </div>
                                    <div class="mt-2">
                                        <span class="font-weight-bold">Job Portal:</span>
                                         Find talent or post job openings.
                                    </div>
                                    <div class="text-subtitle-1 font-weight-black mt-2">Benefits:</div>


                                    <div class="mt-2"><span>
                                        <VIcon color="secondary">mdi-circle-small</VIcon></span>
                                        Seamless navigation across multiple management systems
                                    </div>

                                    <div class="mt-2">
                                        <span><VIcon color="secondary">mdi-circle-small</VIcon></span>Enhanced user experience
                                    </div>
                                    <div class="mt-2">
                                        <span><VIcon color="secondary">mdi-circle-small</VIcon></span>Efficient HR management
                                    </div>
                                    <div class="mt-2">
                                        <span><VIcon color="secondary">mdi-circle-small</VIcon></span>Access to top candidates
                                    </div>
                                    <div class="mt-2">
                                        <span><VIcon color="secondary">mdi-circle-small</VIcon></span>Reduced administrative burdens
                                    </div>
                                    <div class="mt-2">
                                        <span><VIcon color="secondary">mdi-circle-small</VIcon></span>Improved data analysis and insights
                                    </div>
                                    <div class="font-weight-bold text-subtitle-1 mt-5">
                                        Unicos empowers businesses to optimize HR operations, enhance productivity, and
                                        drive growth.
                                    </div>
                                </VCardText>
                               
                            </VCard>
                        </VCol>
                    </VRow>
                </VContainer>
            </VCol>
        </VRow>
        <div class="svg-layered-border layered-bottom">
            <img src="/public/img/index/layered-bottom.svg" class="w-100 h-25" />
        </div>
    </div>
</template>

<script setup lang="ts">

import videoSrc from "@/public/img/index/why-us-bg.mp4";


const isIntersecting = ref(false);

const onIntersect = (isIntersectingValue: any) => {
    isIntersecting.value = isIntersectingValue
}

</script>

<style scoped>
#whyUnicos {
    position: relative;
    height: 120vh;
    width: 100%;
    overflow: hidden;
    z-index: 0;
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

.layered-bottom{
    bottom: 0;
    margin-bottom: -20px;
}


.layered-top{
    top: 0;
}

</style>