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

    <!-- Définition -->
    <v-container class="text-center px-12">
      <p class="text-h4 font-weight-bold text-center mt-5">
        Nos services
      </p>
      <v-row>
        <v-col cols="12" md="4" v-for="item in activities" :key="item.title">
          <v-card tile class="text-center ma-auto">
            <v-img
              src="https://picsum.photos/1000/3000"
              aspect-ratio="1.1"
            />
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-text class="text-left">
              {{ item.content[0] }}
            </v-card-text>
            <v-card-actions>
              <v-btn text plain class="ma-auto">Lire la suite <v-icon class="ml-2" size="20">mdi-arrow-right</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- CTI EXPERT -->
    <v-container class="text-center px-12">
      <p class="text-h4 font-weight-bold text-center mt-5">
        - CTI Expert -
      </p>
      <v-img src="https://via.placeholder.com/2480x3508" width="300" class="my-5 mx-auto"/>
      <v-card tile flat width="700" class="ma-auto">
        <p>{{ lorem + lorem + lorem }}</p>
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
  },
};
</script>
