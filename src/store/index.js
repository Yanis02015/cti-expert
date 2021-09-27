import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activities: [
      {
        title: "Premier domaine d'activité",
        image: "",
        contents: [
          "Premier paragraphe",
          "Deuxième paragraphe",
          "Troisieme paragraphe",
        ]
      },
      {
        title: "Deuxième domaine d'activitè",
        image: "",
        contents: [
          "Premier paragraphe du deuxieme domaine",
          "Deuxième paragraphe du deuxieme domaine",
          "Troisième paragraphe du deuxieme domaine",
        ]
      },
      {
        title: "troisieme domaine d'activité",
        image: "",
        contents: [
          "Premier paragraphe du troisieme domaine",
          "Deuxième paragraphe du troisieme domaine",
          "Troisieme paragraphe du troisieme domaine",
        ]
      },
      {
        title: "Quatrieme domaine d'activitè",
        image: "",
        contents: [
          "Premier paragraphe du 4eme domaine",
          "Deuxième paragraphe du 4eme domaine",
          "Troisième paragraphe du 4eme domaine",
        ]
      },
      {
        title: "Cinqueme domaine d'activité",
        image: "",
        contents: [
          "Premier paragraphe du cinqueme domaine",
          "Deuxième paragraphe du cinqueme domaine",
          "Troisieme paragraphe du cinqueme domaine",
        ]
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
