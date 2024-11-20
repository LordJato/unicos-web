<template>
    <section id="homeFeedback">
        <div class="w-100 text-center">
            <h1 class="text-h4">Voices from Our Community</h1>
            <p class="text-h6 mt-8 mb-16"> We're proud of the results we've achieved together. Here's what our clients
                say about working with us </p>
            <v-carousel hide-delimiters show-arrows height="560" color="transparent">
                <v-carousel-item>
                    <v-card width="100%" height="100%" color="transparent">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                        <v-card-title>Docks</v-card-title>
                        <v-card-text>Some text about docks.</v-card-text>
                    </v-card>
                </v-carousel-item>

                <v-carousel-item>
                    <v-card width="100%" height="100%" color="transparent">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"></v-img>
                        <v-card-title>Hotel</v-card-title>
                        <v-card-text>Some text about hotel.</v-card-text>
                    </v-card>
                </v-carousel-item>

                <v-carousel-item>
                    <v-card width="100%" height="100%" color="transparent">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
                        <v-card-title>Sunshine</v-card-title>
                        <v-card-text>Some text about sunshine.</v-card-text>
                    </v-card>
                </v-carousel-item>

                <template v-slot:prev="{ props }">
                    <v-btn color="secondary" variant="elevated" @click="props.onClick" icon="mdi-page-previous-outline"
                        class="text-white"></v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn color="secondary" variant="elevated" elevation="5" @click="props.onClick"
                        icon="mdi-page-next-outline" class="text-white"></v-btn>
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
        linear-gradient(90deg, rgba(7,15,43,1) 0%, rgba(26,41,88,1) 87%, rgba(33,50,104,1) 100%);
}
</style>