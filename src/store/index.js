import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [
      {
        title: "Contrôle réglementaire de sécurité APG/APV.",
        images: [
          {
            //image: "https://lh3.googleusercontent.com/proxy/2Hnpbs9mJ3lidXYKCt4Q09eMBlohXMvmgeiLfe3kbWoATGoNn0Kfy7Kt5P6ZXrbgW7y9d5DamBB7W1rgugwWnovQahPkSInQRtLrb3ZBMkUVgRmPjFy2OqlsdVv93RFYQA",
            image: 'https://i.ibb.co/C5BYTtw/epreuve-hydrostatique.png',
            context: "Epreuve hydrostatique en presence de l'ingénieur des mines",
          },
          {
            image: 'https://i.ibb.co/hgYQ83j/reconstitution-dossier.jpg',
            context: "Reconstitution dossier technique en vue d'algérianisation"
          }
        ],
        contents: [
          "Premier paragraphe",
          "Epreuve hydrostatique en presence de l'ingénieur des mines",
          "Reconstitution dossier technique en vue d'algérianisation",
        ],
      },

      {
        title: "Contrôle réglementaire de sécurité APL.",
        images: [
          {
            image: 'https://i.ibb.co/SmPJpvR/control-APL.jpg',
            context: 'Contrôle APL',
          },
          {
            image: "https://i.ibb.co/Wzrvk9m/epreuve-de-charge.jpg",
            context: "Epreuve de charge statique dynamique et stabilité",
          },
        ],
        contents: [
          "Premier paragraphe du deuxieme domaine",
          "Epreuve de charge statique dynamique et stabilité",
        ],
      },

      {
        title: "Contrôle réglementaire de sécurité APE.",
        images: [
          {
            image: "https://i.ibb.co/2Z0sHBj/Controle-APE.jpg",
            context: "Côntrole de sécurité APE"
          },
          {
            image: "https://i.ibb.co/qk8vmV1/Echantillion-pour-analyse-Huile-Transformateur.jpg",
            context: "Prelevement échantillon huile transformateur pour analyse",
          },
        ],
        contents: [
          "Premier paragraphe du troisieme domaine",
          "Prelevement échantillon huile transformateur pour analyse",
        ],
      },
      
      {
        title: "Contrôle CND",
        images: [
          {
            image:
              "https://www.arcane-industries.fr/site/images/normal/consommable%20pour%20le%20controle%20par%20ultrason.png",
            context:
              "Qualification de soudeurs - PQR (Procedure qualification record)",
          },
          {
            image:
              "https://www.soudeurs.com/pieces_jointes/8971-hyppolite_asme_9_qs_photo_05.jpg",
            context:
              "Procédés de soudage - WPS (Welding procedure specification)",
          },
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
