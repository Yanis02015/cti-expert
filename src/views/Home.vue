<template>
  <v-container fluid class="pa-0">
    <!-- Banner -->
    <v-container fluid class="pa-0">
      <v-img
        width="100%"
        height="400"
        dark
        class="text-center align-center"
        src="https://picsum.photos/1000/1300"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-row align="center" height="100%">
          <v-col cols="12">
            <p class="text-h2 font-weight-bold text-center">
              Qu'est-ce que l'étalonnage ?
            </p>
            <div class="pa-4" />
            <p class="text-h6">
              Que signifie le terme étalonnage en métrologie ?
            </p>
          </v-col>
        </v-row>
      </v-img>
    </v-container>

    <!-- Définition -->
    <v-container class="text-center px-12">
      <p class="text-h4 font-weight-bold text-center mt-5">
        Qu'est-ce que l'étalonnage
      </p>
      <v-card tile flat width="700" class="ma-auto">
        <p>{{ lorem + lorem + lorem }}</p>
      </v-card>
    </v-container>

    <v-divider class="mx-auto mt-2" style="width: 60%;"></v-divider>

    <!-- Les services -->
    <v-container class="text-center px-12">
      <p class="text-h4 font-weight-bold text-center mt-5">
        Nos services
      </p>
      <v-row>
        <v-col cols="12" md="4" v-for="(item, n) in activities" :key="n">
          <v-card
            v-if="n === 0 || n === 1"
            height="100%"
            tile
            class="text-center ma-auto"
          >
            <v-img src="https://picsum.photos/1000/3000" aspect-ratio="1.1" />
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-text class="text-left">
              {{ item.content[0] }}
            </v-card-text>
            <v-card-actions>
              <v-btn text plain class="ma-auto">
                Lire la suite
                <v-icon class="ml-2" size="20">mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>

          <!-- show more -->
          <v-card v-if="n === 2" height="100%" tile class="text-center ma-auto">
            <v-img
              src="https://picsum.photos/1000/3000"
              aspect-ratio="1.1"
              class="text-center align-center image-blur"
              gradient="to bottom right, rgba(143, 143, 143,.2), rgba(61, 61, 61,.7)"
            >
              <v-avatar size="90" class="opacity-1">
                <v-icon size="60">mdi-arrow-right</v-icon>
              </v-avatar>
            </v-img>
            <v-card-title>
              Et bien plus encore..
            </v-card-title>
            <v-card-text class="text-left">
              Nous offrons énormément de service, vous trouverez forcément ce
              dont vous cherchez !
            </v-card-text>
            <v-card-actions>
              <v-btn text plain class="ma-auto">
                Voir tout nos activités
                <v-icon class="ml-2" size="20">mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="mx-auto mt-10" style="width: 60%;"></v-divider>

    <!-- CTI EXPERT -->
    <v-container class="text-center px-12">
      <p class="text-h4 font-weight-bold text-center mt-5">
        - CTI Expert -
      </p>
      <v-img
        src="https://via.placeholder.com/2480x3508"
        width="300"
        class="my-5 mx-auto"
      />
      <v-card tile flat width="700" class="ma-auto">
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
              ? 'margin-left: 200px; margin-right: 200px;'
              : 'margin-left: 50px; margin-right: 50px;'
          "
        >
          <v-col cols="12" md="6">
            <v-card-title class="text-md-h3 text-h4 font-weight-black">
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
              width="300"
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
</style>
