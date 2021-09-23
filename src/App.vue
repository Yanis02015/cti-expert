<template>
  <v-app>
    <v-app-bar absolute app color="white" height="90">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="cti_logo.png"
          transition="scale-transition"
          width="70"
        />

        <div
          class="text-h6 shrink mt-1 hidden-sm-and-down"
          min-width="100"
          width="100"
        >
          CTI EXPERT
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-card flat height="100%" class="hidden-sm-and-down">
        <v-btn href="" text height="100%">
          <span>Accueil</span>
        </v-btn>
        <v-btn href="" text height="100%">
          <span>Actualité</span>
        </v-btn>
        <v-btn href="" text height="100%">
          <span>Présentation</span>
        </v-btn>
        <v-btn href="" text height="100%">
          <span>Activités <v-icon class="">mdi-chevron-down</v-icon></span>
        </v-btn>
        <v-btn href="" text height="100%">
          <span>Contacter</span>
        </v-btn>
      </v-card>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer padless class="mt-9">
      <v-card tile width="100%">
        <v-row class="ma-0 text-center">
          <v-col cols="12" md="4">
            <v-img class="ma-auto" src="cti_logo.png" width="150" />
            <v-card-text>
              Entreprise de métrologie agréé.
              <br />
              Qualité maîtrise et fiabilité...
            </v-card-text>
          </v-col>

          <v-col cols="12" md="4" class="text-left">
            <v-card-title>
              Nos service
            </v-card-title>

            <v-card-text>
              <v-icon size="12" class="mr-3 black--text">
                mdi-checkbox-blank-circle</v-icon
              >
              Premiere item
            </v-card-text>
            <v-card-text>
              <v-icon size="12" class="mr-3 black--text"
                >mdi-checkbox-blank-circle</v-icon
              >Deuxieme item de domaine
            </v-card-text>
            <v-card-text>
              <v-icon size="12" class="mr-3 black--text"
                >mdi-checkbox-blank-circle</v-icon
              >Premiere domaine d'Activités
            </v-card-text>
          </v-col>

          <v-col cols="12" md="4"> </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapState(["activities"]),
  },
};
</script>
