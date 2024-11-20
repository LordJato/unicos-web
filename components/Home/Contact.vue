<template>
    <div id="homeContact">
        <VRow justify="center" align="center" class="h-100">
            <VCol cols="12" lg="9">
                <VContainer class="h-100">
                    <VRow justify="center" align="center">
                        <VCol cols="12" md="6">
                            <VImg src="/img/index/contact.png"  cover/>
                        </VCol>
                        <VCol cols="12" md="6" class="d-flex justify-center align-center">
                            <div>
                                <div class="mb-8 text-center">
                                <h1 class="text-h4 mb-3">Get in Touch with Unicos</h1>

                                <p style="text-wrap: pretty;" class="px-16">Have questions or need expert advice? We're here to help. Reach out for top talent acquisition or to learn more about our services.</p>
                            </div>
                            <VCard class="mx-auto pa-6 pb-8" max-width="448" rounded="lg">
                                <div class="text-subtitle-1 text-medium-emphasis">Name</div>

                                <VTextField density="compact" prepend-inner-icon="mdi-account" variant="outlined">
                                </VTextField>


                                <div class="text-subtitle-1 text-medium-emphasis">Email</div>

                                <VTextField density="compact" prepend-inner-icon="mdi-email-outline" variant="outlined">
                                </VTextField>

                                <div class="text-subtitle-1 text-medium-emphasis">Message</div>

                                <VTextarea density="compact" prepend-inner-icon="mdi-message" variant="outlined">
                                </VTextarea>


                                <VBtn color="secondary" class="text-white" append-icon="mdi-email-fast" block>
                                    Send Email
                                </VBtn>
                            </VCard>
                            </div>
                        </VCol>
                    </VRow>
                </VContainer>
            </VCol>
        </VRow>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#homeContact {
    position: relative;
    min-height: 85vh;
    overflow: hidden;
    background:
        url("/img/index/blob-haikei.svg") no-repeat left top,
        linear-gradient(150deg, rgba(54, 197, 200, 0.5046393557422969) 0%, rgba(7, 15, 43, 1) 6%, rgba(8, 16, 46, 1) 60%, rgba(26, 41, 88, 1) 75%, rgba(54, 197, 200, 0.5018382352941176) 95%, rgba(33, 50, 104, 1) 100%);
}
</style>