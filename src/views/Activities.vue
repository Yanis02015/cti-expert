<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold text-center my-5">
      Les domaines d'activités
    </h1>

    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(item, i) in activities" :key="i">
        <v-card
          height="100%"
          tile
          class="text-center ma-auto"
        >
          <v-img src="https://picsum.photos/1000/3000" aspect-ratio="1.1" />
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text class="text-left">
            {{ item.contents[0] }}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="goToActivitiesItem(i + 1)" text plain class="ma-auto">
              Lire la suite
              <v-icon class="ml-2" size="20">mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["activities"]),
  },
  methods: {
    cutText(text, x) {
      if (text.length > x - 3) return text.slice(0, x) + "...";
      return text;
    },
    goToActivitiesItem(i) {
      let url = "/activities/" + i;
      this.$router.replace(url);
      
    },
  },
};
</script>
