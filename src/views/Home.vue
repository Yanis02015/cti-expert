<template>
  <v-container fluid class="pa-0 home-background">
    <!-- Banner -->
    <v-container fluid class="pa-0">
      <v-img
        width="100%"
        :height="mobile ? '250' : '400'"
        dark
        class="text-center align-center home-background1"
      >
        <v-row align="center" height="100%">
          <v-col
            cols="12"
            class="
              white--text
              font-weight-bold
              text-h5 text-sm-h4 text-md-h3 text-xl-h2
            "
            :class="windowWidth < 319 ? 'mb-0' : 'title-home-transfort'"
          >
            <span class="yellow darken-1 px-4">CTI-EXPERT...</span>
          </v-col>
          <v-col cols="12">
            <v-img
              class="ma-auto px-10"
              width="650"
              contain
              src="../assets/slogon-image.png"
            />
          </v-col>
        </v-row>
      </v-img>
    </v-container>

    <!-- Définition
    <v-container class="text-center px-12">
      <p class="text-h4 font-weight-bold text-center mt-5">
        Qu'est-ce que l'étalonnage
      </p>
      <v-card tile flat width="700" class="ma-auto">
        <p>{{ lorem + lorem + lorem }}</p>
      </v-card>
    </v-container> 

    <v-divider class="mx-auto mt-2" style="width: 60%"></v-divider> -->

    <!-- Les services -->
    <v-container class="text-center px-12">
      <p class="text-h4 font-weight-bold text-center mt-5">Nos services</p>
      <v-row>
        <v-col cols="12" md="4" v-for="(item, n) in activities" :key="n">
          <v-hover v-slot="{ hover }">
            <router-link :to="'/activities/' + (n + 1)">
              <v-card
                v-if="n === 0 || n === 1"
                :elevation="hover ? '5' : '2'"
                height="100%"
                tile
                class="smooth-transition text-center ma-auto pb-4"
              >
                <v-img
                  :src="item.images[0].image"
                  lazy-src="https://i.ibb.co/frhvMXL/loading.jpg"
                  aspect-ratio="1.1"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-title style="word-break: break-word" class="text-wrap">
                  {{ item.title }}
                </v-card-title>
                <v-card-text class="text-left">
                  {{ cutText(item.contents[0] + lorem, 80) }}
                </v-card-text>
                <v-card-actions class="mb-0">
                  <v-btn text plain class="mx-auto mb-O">
                    Lire la suite
                    <v-icon class="ml-2" size="20">mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated flash"
                  leave-active-class="animated fadeOut"
                  :duration="500"
                >
                  <v-card
                    v-if="hover"
                    style="
                      margin-top: -10px;
                      position: absolute;
                      left: 0;
                      right: 0;
                    "
                    width="160"
                    height="2"
                    tile
                    flat
                    class="custom-classes-transition green mx-auto"
                  >
                  </v-card>
                </transition>
              </v-card>
            </router-link>
          </v-hover>

          <!-- show more -->
          <v-hover v-slot="{ hover }">
            <router-link to="/activities">
              <v-card
                v-if="n === 2"
                :elevation="hover ? '5' : '2'"
                height="100%"
                tile
                class="smooth-transition text-center ma-auto"
              >
                <v-img
                  :src="item.images[0].image"
                  lazy-src="https://i.ibb.co/frhvMXL/loading.jpg"
                  aspect-ratio="1.1"
                  class="text-center align-center image-blur"
                  gradient="to bottom right, rgba(143, 143, 143,.2), rgba(61, 61, 61,.7)"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        size="120"
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-avatar
                    size="90"
                    class="smooth-transition"
                    :class="hover ? 'opacity-2' : 'opacity-1'"
                  >
                    <v-icon size="60">mdi-arrow-right</v-icon>
                  </v-avatar>
                </v-img>
                <v-card-title> Et bien plus encore.. </v-card-title>
                <v-card-text class="text-left">
                  Nous offrons énormément de service, vous trouverez forcément
                  ce dont vous cherchez !
                </v-card-text>
                <v-card-actions>
                  <v-btn text plain class="ma-auto">
                    Voir tout nos activités
                    <v-icon class="ml-2" size="20">mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated flash"
                  leave-active-class="animated fadeOut"
                  :duration="500"
                >
                  <v-card
                    v-if="hover"
                    style="
                      margin-top: -10px;
                      position: absolute;
                      left: 0;
                      right: 0;
                    "
                    width="160"
                    flat
                    tile
                    height="2"
                    class="custom-classes-transition green mx-auto"
                  >
                  </v-card>
                </transition>
              </v-card>
            </router-link>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="mx-auto mt-10" style="width: 60%"></v-divider>

    <!-- CTI EXPERT -->
    <v-container class="text-center px-12">
      <p class="text-h4 font-weight-bold text-center mt-5">- CTI Expert -</p>
      <v-img
        src="https://via.placeholder.com/2480x3508"
        width="300"
        class="my-5 mx-auto"
      />
      <v-card tile flat width="700" class="ma-auto transparent">
        <p>{{ lorem + lorem + lorem }}</p>
      </v-card>
    </v-container>

    <!-- post-footer -->
    <v-container class="ma-0 pa-0" fluid>
      <v-card
        dark
        class="d-flex align-center mx-0 pt-9 ask-for-help"
        width="100%"
        flat
        tile
      >
        <v-row
          :style="
            !mobile
              ? 'margin-left: 150px; margin-right: 150px;'
              : windowWidth > 450
              ? 'margin-left: 50px; margin-right: 50px;'
              : ''
          "
        >
          <v-col cols="12" md="6">
            <v-card-title
              class="text-lg-h3 text-h5 text-sm-h4 font-weight-black"
            >
              Besoin d'aide ?
            </v-card-title>
            <v-card-text class="text-subtitile-1 text-md-h6">
              Parlez à l’un de nos collaborateurs et nous serons ravis de vous
              guider
            </v-card-text>
            <v-card-actions>
              <v-btn href="tel: +21334803559" class="call-number mx-auto pa-5"
                >Tel: +213 34 80 35 59</v-btn
              >
            </v-card-actions>
          </v-col>

          <v-col cols="12" md="6">
            <v-img
              class="ma-auto"
              :width="mobile ? '200' : '300'"
              height="100%"
              src="https://pngimage.net/wp-content/uploads/2018/05/%C3%A7a%C4%9Fr%C4%B1-merkezi-png-6.png"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  },
  computed: {
    ...mapState(["activities"]),
    mobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    windowWidth() {
      return this.$vuetify.breakpoint.width;
    },
  },
  methods: {
    cutText(text, x) {
      if (text.length > x - 3) return text.slice(0, x) + "...";
      return text;
    },
  },
};
</script>

<style scoped>
.ask-for-help {
  background-color: #002a6b !important;
  background-image: linear-gradient(280deg, #002c67 0%, #00a0df 100%);
}

.ask-for-help .call-number {
  background-color: #002a6b !important;
}

.opacity-1 {
  background-color: rgba(255, 255, 255, 0.495) !important;
}

.opacity-2 {
  background-color: rgba(255, 255, 255, 0.746) !important;
}

.custom-classes-transition {
  --animate-duration: 11s;
}

.smooth-transition {
  transition: all 0.4s;
}

.home-background {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 248, 251, 1) 70%,
    rgba(81, 154, 227, 1) 100%
  );
  /* background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(81, 154, 227, 1) 100%
  ); */
}

.title-home-transfort {
  transform: rotate(-3.4deg);
  -moz-transform: rotate(-3.4deg);
  -webkit-transform: rotate(-3.4deg);
  -khtml-transform: rotate(-3.4deg);
  -ms-transform: rotate(-3.4deg);
  margin-bottom: -40px;
  margin-left: -70px;
}
</style>
