<template>
    <section>
        <VRow justify="center" align="center" class="h-100">
            <VCol cols="12" lg="9">
                <VContainer class="h-100">
                    <VRow justify="center" align="center">
                        <VCol cols="12" md="5">
                            <h1 class="text-h4">Partner with dedicated professionals who deliver excellence with loyalty and commitment.</h1>
                        </VCol>
                        <VCol cols="12" md="7" class="d-flex justify-center align-center">
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
                        </VCol>
                    </VRow>
                </VContainer>
            </VCol>
        </VRow>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>