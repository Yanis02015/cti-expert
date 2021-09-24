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
        <v-btn
          v-for="item in menuNavigation"
          :key="item.title"
          color="green"
          :to="item.link"
          text
          height="100%"
        >
          <span>{{ item.title }}</span>
        </v-btn>
      </v-card>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer padless>
      <v-card flat tile width="100%">
        <v-row class="ma-0 text-center">
          <v-col cols="12" md="4">
            <v-img class="ma-auto" src="cti_logo.png" width="150" />
            <v-card-text>
              Entreprise de métrologie agréé.
              <br />
              Qualité maîtrise et fiabilité...
            </v-card-text>
            <v-card flat class="ma-auto" width="50%">
              <v-row>
                <v-col v-for="item in socialNetworks" :key="item.icon" cols="4">
                  <v-btn icon plain :to="item.link">
                    <v-icon>
                      {{ item.icon }}
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card-title>
              <p class="ma-auto">Nos service</p>
            </v-card-title>
            <v-card tile flat class="ma-auto" :width="mobile ? '90%' : '60%'">
              <v-card-text
                class="text-left"
                v-for="item in activities"
                :key="item.title"
              >
                <v-icon size="12" class="mr-3 black--text">
                  mdi-checkbox-blank-circle</v-icon
                >
                {{ item.title }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card-title>
              <p class="ma-auto">Contact</p>
            </v-card-title>
            <v-card tile flat class="ma-auto" :width="mobile ? '90%' : '60%'">
              <v-card-text
                class="text-left text-subtitle-1"
                v-for="item in contactInfo"
                :key="item.title"
              >
                <v-icon size="20" class="mr-3 black--text">
                  {{ item.icon }}
                </v-icon>
                {{ item.title }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-divider class="mx-12"></v-divider>

        <v-row class="align-center ma-0">
          <v-col cols="12" md="4">
            <v-card-text>
              <div
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'justify-center'
                    : 'justify-start'
                "
                class="d-flex align-center"
              >
                <v-avatar class="mr-3" size="40">
                  <img alt="yanis.indt" src="./assets/yanis-indt-logo.jpeg" />
                </v-avatar>
                <v-card class="transparent" tile elevation="0">
                  <v-list-item-content
                    style="width: 100px;"
                    class="text-left py-0"
                  >
                    <v-list-item-title class="py-0"
                      >Réalisation</v-list-item-title
                    >
                    <v-list-item-subtitle class="py-0">
                      <!-- class="pink--text text--lighten-2" -->
                      <a
                        target="_blank"
                        class="blue--text text--accent-4"
                        href="https://linkedin.com/in/YanisOulhaci"
                        >@YanisOulhaci</a
                      >
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-card>
              </div>
            </v-card-text>
          </v-col>

          <v-col class="text-center pa-0 ma-0" cols="12" md="4">
            <v-card-text class="black--text">
              &#169; {{ new Date().getFullYear() }} CTI Expert Algérie —
              <strong>Tous Droits Réservés.</strong>
            </v-card-text>
          </v-col>
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
    menuNavigation: [
      {
        title: "Accueil",
        link: "/",
      },
      {
        title: "Actualité",
        link: "/news",
      },
      {
        title: "Présentation",
        link: "/presentation",
      },
      {
        title: "Activités",
        link: "/activities",
      },
      {
        title: "Contacter",
        link: "/contater",
      },
    ],
    contactInfo: [
      {
        title: "Béjaïa avenue, Ighil Ouazoug 06000, Algérie",
        icon: "mdi-map-marker-outline",
      },
      {
        title: "+213 (0)34 80 35 59",
        icon: "mdi-phone-outline",
      },
      {
        title: "contact@cti-expert.com",
        icon: "mdi-email-outline",
      },
    ],
    socialNetworks: [
      {
        title: "facebook",
        link: "www.facebook.com",
        icon: "mdi-facebook",
      },
      {
        title: "Youtube",
        link: "www.youtube.com",
        icon: "mdi-youtube",
      },
      {
        title: "LinkedIn",
        link: "www.linkedin.com",
        icon: "mdi-linkedin",
      },
    ],
  }),
  computed: {
    ...mapState(["activities"]),
    mobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
