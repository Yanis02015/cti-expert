import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [
      {
        title: "Contrôle réglementaire de sécurité APG/APV.",
        images: [
          "https://lh3.googleusercontent.com/proxy/2Hnpbs9mJ3lidXYKCt4Q09eMBlohXMvmgeiLfe3kbWoATGoNn0Kfy7Kt5P6ZXrbgW7y9d5DamBB7W1rgugwWnovQahPkSInQRtLrb3ZBMkUVgRmPjFy2OqlsdVv93RFYQA",
        ],
        contents: [
          "Premier paragraphe",
          "Epreuve hydrostatique en presence de l'ingénieur des mines",
          "Reconstitution dossier technique en vue d'algérianisation",
        ],
      },
      {
        title: "Contrôle réglementaire de sécurité APL.",
        images: [],
        contents: [
          "Premier paragraphe du deuxieme domaine",
          "Epreuve de charge statique dynamique et stabilité",
        ],
      },
      {
        title: "Contrôle réglementaire de sécurité APE.",
        images: [],
        contents: [
          "Premier paragraphe du troisieme domaine",
          "Prelevement échantillon huile transformateur pour analyse",
        ],
      },
      {
        title: "Contrôle CND",
        images: [
          "https://www.arcane-industries.fr/site/images/normal/consommable%20pour%20le%20controle%20par%20ultrason.png",
          "https://www.soudeurs.com/pieces_jointes/8971-hyppolite_asme_9_qs_photo_05.jpg",
        ],
        contents: [
          "Premier paragraphe du 4eme domaine",
          "Qualification de soudeurs - PQR (Procedure qualification record)",
          "Procédés de soudage - WPS (Welding procedure specification)",
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
