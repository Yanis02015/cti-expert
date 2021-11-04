<template>
  <v-container>
    <v-container class="text-center" v-if="activitieSelected">
      <h1 class="text-center">
        {{ activitie.title }}
      </h1>
      <v-card flat class="ma-auto" width="700">
        <v-card-text class="ma-0">
          {{ activitie.contents[0] }}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ab
          rem natus sint voluptatem vitae dolorem voluptatibus quasi magnam
          minima numquam accusantium voluptatum, officia temporibus tempora
          veritatis ratione dolor odit!
        </v-card-text>
      </v-card>
      <v-row style="width: 60%" class="ma-auto">
        <v-col
          cols="12"
          md="6"
          v-for="image in activitie.images"
          :key="image.image"
          class="mt-5 mx-auto"
        >
          <v-img
            height="300"
            :src="image.image"
            lazy-src="https://i.ibb.co/frhvMXL/loading.jpg"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <span class="font-weight-bold"> {{ image.context }} </span>
        </v-col>
      </v-row>
      <v-card flat class="mx-auto" width="700">
        <v-card-text
          v-for="(content, i) in activitie.contents"
          :key="i"
          class="ma-0 pa-0"
        >
          <v-card v-if="i" flat class="my-7">
            <span>
              {{ content }}
            </span>
          </v-card>
        </v-card-text>
      </v-card>
    </v-container>

    <!-- 404 -->
    <v-container v-else>
      <h1>Erreur 404</h1>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["activities"]),
    activitie() {
      return this.activities[this.activitieSelected - 1];
    },

    route() {
      return this.$route.fullPath;
    },

    activitieSelected() {
      switch (this.route) {
        case "/activities/1":
          return 1;
        case "/activities/2":
          return 2;
        case "/activities/3":
          return 3;
        case "/activities/4":
          return 4;
        case "/activities/5":
          return 5;
        case "/activities/6":
          return 6;
        default:
          return 0;
      }
    },
  },
  methods: {},
};
</script>
