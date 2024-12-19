<template>
    <div id="homeContact">
        <VRow justify="center" align="center" class="h-100">
            <VCol cols="12" xl="9" lg="10">
                <VContainer class="h-100">
                    <VRow align="center">
                        <VCol cols="12" md="6">
                            <VImg src="~/assets/images/hero/contact/contact.png" cover data-aos="flip-right"
                                data-aos-easing="ease-out-cubic" data-aos-duration="1000"  />
                        </VCol>
                        <VCol cols="12" md="6" class="d-flex justify-end align-center">
                            <div>
                                <div class="mb-16 text-center" style="width: 448px;">
                                    <v-icon icon="mdi-email-newsletter" color="secondary" data-aos="fade-down"
                                        data-aos-duration="1000" class="mx-auto text-center"></v-icon>
                                    <div class="text-h6 text-md-h4 mt-2" data-aos="fade-up"
                                        data-aos-duration="1000">Get in Touch
                                        with Unicos</div>
                                        <p class="text-subtitle-1 text-md-h6 mt-4 mb-10 text-center" data-aos="fade-down"
                                    data-aos-duration="200" data-aos-delay="1000" >Have
                                    questions or need expert
                                    advice? We're here to help. Reach out for top talent acquisition or to learn
                                    more about our services.</p>
                                </div>
                                <VCard class="ms-auto pa-6 pb-8" max-width="448" rounded="lg" data-aos="fade-up-left"
                                    data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                    <VForm @submit.prevent="sendEmail" class="text-start" ref="form">
                                        <div class="text-subtitle-1 text-medium-emphasis">Name</div>

                                        <VTextField v-model="name" :rules="nameRules" density="compact"
                                            prepend-inner-icon="mdi-account" variant="outlined">
                                        </VTextField>

                                        <div class="text-subtitle-1 text-medium-emphasis">Email</div>

                                        <VTextField v-model="email" :rules="emailRules" density="compact"
                                            prepend-inner-icon="mdi-email-outline" variant="outlined">
                                        </VTextField>

                                        <div class="text-subtitle-1 text-medium-emphasis">Message</div>

                                        <VTextarea v-model="message" :rules="messageRules" density="compact"
                                            prepend-inner-icon="mdi-message" variant="outlined">
                                        </VTextarea>


                                        <VBtn color="secondary" class="text-white" append-icon="mdi-email-fast" block
                                            type="submit" :loading="loading">
                                            Send Email
                                        </VBtn>
                                    </VForm>

                                </VCard>
                            </div>
                        </VCol>
                    </VRow>
                </VContainer>
            </VCol>
        </VRow>
        <v-scroll-x-reverse-transition>
            <VAlert v-model="alert" type="success" border="start" elevation="2" border-color="success"
                icon="mdi-email-check" prominent closable text="Thanks for reaching out. Please check your email.">
            </VAlert>
        </v-scroll-x-reverse-transition>
    </div>
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser";

const config = useRuntimeConfig();

interface ISendEmail {
    contactName: string
    contactEmail: string,
    contactMessage: string,
}

const alert = ref<boolean>(false);
const loading = ref<boolean>(false);

watch(alert, (newVal) => {
    if (newVal) {
        setTimeout(() => { alert.value = false }, 3000)
    }
});


const name = ref<string>("");
const nameRules = [(v: string) => !!v || "name is required"];

const email = ref<string>("");
const emailRules = [
    (v: string) => !!v || "Email is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

const message = ref<string>("");
const messageRules = [
    (v: string) => !!v || "Message is required",
    (v: string) =>
        (v && v.length >= 10) || "Message must be greater than 10 characters",
];

const form = ref();

async function sendEmail(): Promise<any> {
    const formDetails: ISendEmail = {
        contactName: name.value,
        contactEmail: email.value,
        contactMessage: message.value,
    };

    try {
        const { valid } = await form.value.validate();
        if (valid) {
            loading.value = true;
            emailjs
                .send(
                    config.public.emailServiceID,
                    config.public.emailTemplateID,
                    JSON.parse(JSON.stringify(formDetails)),
                    {
                        publicKey: config.public.emailPublicKey,
                    }
                )
                .then(
                    () => {
                        form.value.reset();
                        alert.value = true;
                        loading.value = false;
                    }
                );
        }
    } catch (error) {
        console.log(error)
        loading.value = false
    }

}


</script>

<style scoped>
#homeContact {
    top: 0;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    background:
        linear-gradient(150deg, rgba(7, 15, 43, 1) 0%, rgba(8, 16, 46, 1) 60%, rgba(26, 41, 88, 1) 75%, rgba(54, 197, 200, 1) 95%, rgba(33, 50, 104, 1) 100%);
}

.v-alert {
    position: fixed;
    top: 15%;
    right: 2%;
    margin: 0 auto;
    display: flex;
}
</style>

<style>
.v-alert .v-alert__close {
    align-self: center !important;
}
</style>