<template>
  <section id="homePage">
    <VParallax src="/img/index/bg.jpg" height="950" class="px-2  px-md-16">
      <VContainer fluid class="h-100">
        <VRow align="center" justify="center" class="h-100">
          <VCol cols="12" md="6">
            <div class="mt-6">
              <div class="font-weight-bold text-h4 text-md-h3 text-white">
                UNICOS
              </div>
              <div class="font-weight-bold text-h5 text-md-h4 text-white mt-5">
                Unify HR management with our multi-company platform. One tenant, one login, endless possibilities.
              </div>

              <VTextField class="mt-5" :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                label="Search templates" variant="solo" hide-details single-line @click:append-inner="onClick"
                width="350"></VTextField>
            </div>

          </VCol>
          <VCol cols="12" md="6">

          </VCol>
        </VRow>
      </VContainer>

    </VParallax>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import spacexImage from "/img/agency-logo/spacex.png";
import metaImage from "/img/agency-logo/meta.png";
import microsoftImage from "/img/agency-logo/microsoft.png";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();

const title = ref("Home");
useSeoMeta({
  title,
});

const agencies = [
  { name: "Microsoft", img: microsoftImage },
  { name: "Meta", img: metaImage },
  { name: "Spacex", img: spacexImage },
];

const loaded = ref(false)
const loading = ref(false)

function onClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}
</script>

<style scoped>
#homePage {
  position: relative;
  z-index: 0;
  background-color: #e9f2fb;
}

section#chooseOobraSection {
  background-color: #007acc;
  z-index: -9999;
}

.rounded-bottom {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

#oobraText {
  font-family: "Audiowide", cursive !important;
  color: #007acc;
}
</style>

<style lang="scss" scoped>
section {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.choose-oobra-ul>li {
  list-style: square;
  margin: 20px 15px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.75rem;

  &::marker {
    font-size: 0.7em;
  }
}

.svg-border-waves {
  .v-image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow: hidden;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -2px;
    z-index: -1;
  }
}

.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }

        30% {
          transform: translateX(-5px);
        }

        50% {
          transform: translateX(5px);
        }

        70% {
          transform: translateX(-2px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>