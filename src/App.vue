<template>
  <v-app>
    <v-app-bar absolute app color="white" height="90">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="/cti_logo.png"
            transition="scale-transition"
            width="70"
          />
        </router-link>
        <router-link to="/">
          <div
            class="text-h6 shrink mt-1 hidden-sm-and-down black--text"
            min-width="100"
            width="100"
          >
            CTI EXPERT
          </div>
        </router-link>
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

      <v-menu offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            outlined
            class="hidden-md-and-up green--text"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-group v-model="selectedMenuItem" color="green">
            <v-list-item v-for="(item, i) in menuNavigation" :key="i">
              <v-card-actions class="pr-8" @click="goToLink(item.link)">
                {{ item.title }}
              </v-card-actions>
            </v-list-item>
          </v-list-item-group>
        </v-card>
      </v-menu>
    </v-app-bar>

    <!-- Main -->
    <v-main>
      <transition name="slide-fade">
        <router-view />
      </transition>
    </v-main>

    <v-footer padless>
      <v-card flat tile width="100%">
        <v-row class="ma-0 text-center">
          <v-col cols="12" md="4">
            <v-img class="ma-auto" src="/cti_logo.png" width="150" />
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
                <a class="black--text" :href="item.link" target="_blank">
                  {{ item.title }}
                </a>
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
    selectedMenuItem: 0,
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
        link: "/contact",
      },
    ],
    contactInfo: [
      {
        title: "Béjaïa avenue, Ighil Ouazoug 06000, Algérie",
        icon: "mdi-map-marker-outline",
        link: "https://goo.gl/maps/JHJib7PQELVLwo4P6"
      },
      {
        title: "+213 (0)34 80 35 59",
        icon: "mdi-phone-outline",
        link: "tel: +21334803559"
      },
      {
        title: "contact@cti-expert.com",
        icon: "mdi-email-outline",
        link: "mailto:contact@cti-expert.com"
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
  methods: {
    goToLink(link) {
      if (this.$route.fullPath !== link) this.$router.replace(link);
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
