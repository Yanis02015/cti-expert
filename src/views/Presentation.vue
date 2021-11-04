<template>
  <v-container :class="$vuetify.breakpoint.smAndDown ? 'mt-12' : 'mt-4'">
    <h1 v-if="$vuetify.breakpoint.smAndDown" class="my-5 text-center">
      Mot du président
    </h1>
    <v-card
      class="text-center"
      :class="
        $vuetify.breakpoint.smAndDown ? 'image-president-md' : 'image-president'
      "
      flat
    >
      <img
        class="ma-auto"
        :width="$vuetify.breakpoint.xs ? '300' : '500'"
        src="https://media.istockphoto.com/photos/in-his-office-picture-id597241066"
      />
    </v-card>
    <v-container>
      <h1 v-if="!$vuetify.breakpoint.smAndDown" class="text-center">
        Mot du président
      </h1>
      <v-card flat class="transparent text-president">
        <v-card-text class="text-body-1 grey--text text--darken-3">
          {{ lorem }}
        </v-card-text>
      </v-card>
    </v-container>

    <!-- Politique -->
    <v-container>
      <h1 class="text-center">Politique de Métrotec</h1>
      <v-card flat class="transparent text-president">
        <tr>
          <td><strong>Code</strong></td>
          <td>:</td>
          <td>ddd</td>
        </tr>
        <tr>
          <td><strong>Date</strong></td>
          <td>:</td>
          <td>04/08/2021</td>
        </tr>
        <tr>
          <td><strong>Version</strong></td>
          <td>:</td>
          <td>00</td>
        </tr>
        <tr>
          <td><strong>Page</strong></td>
          <td>:</td>
          <td>1 sur 1</td>
        </tr>
        <v-card-text class="text-body-2 black--text text-president mt-8">
          <strong>CTI Expert</strong>, exerçant dans
          <strong>l’Inspection des ouvrages et des installations</strong>
          industrielles à savoir; APV/APG-APL-APE. S’est, résolument et
          durablement engagée dans une démarche d’amélioration continue de son
          Système de Management Qualité.
        </v-card-text>
        <v-card-text class="text-body-2 black--text text-president">
          Notre objectif essentiel est la satisfaction client, obtenir et
          conserver sa confiance tout en s’assurant de la pérennité de
          l’entreprise dans le respect des règles de contrôle, de
          confidentialité, des délais et en garantissant la compétence et la
          performance de notre personnel. La raison pour laquelle nous nous
          sommes engagés à atteindre ces objectifs et respecter ces exigences, a
          travers :
          <v-card-text class="text-body-2 text-president">
            &#9679; La mise en place et l’amélioration continue d’un système de
            management de la qualité bâti suivant la norme
            <strong>NF EN ISO/CEI 17020 : 2012.</strong>
          </v-card-text>
          <v-card-text class="text-body-2 ma-0 pt-0 pb-3 text-president">
            &#9679; Qui en résulte les axes sont les suivants :
            <v-card-text class="text-body-2 ma-0 pb-2 pt-5 text-president">
              <strong>1.</strong> Respect dans chacune de ses actions les règles d’impartialité,
              d’indépendance, de transparence et de confidentialité au sein de
              l’organisme;
            </v-card-text>
            <v-card-text class="text-body-2 ma-0 py-2 text-president">
              <strong>2.</strong> Satisfaire nos clients : En leurs prêtant une écoute attentive,
              une communication claire, une réactivité efficace à leurs
              remarques, aux réclamations et appels, évaluer leur niveau de
              satisfaction et en leurs apportant des prestations conformes aux
              exigences et obligations (Coût, délai, service, disponibilité, …);
            </v-card-text>
            <v-card-text class="text-body-2 ma-0 py-2 text-president">
              <strong>3.</strong> Respect des exigences légales, réglementaires, normatives et
              contractuelles;
            </v-card-text>
            <v-card-text class="text-body-2 ma-0 py-2 text-president">
              <strong>4.</strong> L’amélioration par formations, les compétences et le
              savoir-faire de notre personnel;
            </v-card-text>
            <v-card-text class="text-body-2 ma-0 py-2 text-president">
              <strong>5.</strong> S’engager dans une démarche de progrès basée sur le principe de
              l’amélioration continue à travers les audits, brainstorming et
              revues de direction.
            </v-card-text>
          </v-card-text>

          <v-card-text class="text-body-2 text-president pt-0">
            Nous imposons ces engagements à l’ensemble de notre personnel et
            mettons les moyens en œuvre pour le vérifier. Et pour ce faire,
            nous, Directeur Général de l’organisme CTI Expert, nous avons nommé
            une Responsable de Management de la Qualité, I.TOULOUM ayant toute
            autorité pour garantir que les processus et les procédures
            nécessaires au Système de Management sont définis, mis en œuvre et
            tenus à jour, et rentre compte à la direction de la performance du
            système de management et de toute nécessité d’amélioration.
          </v-card-text>
          <v-card-text class="text-body-2 text-president pt-2">
            L’abnégation, le sérieux et l’implication de chacun de nous,
            représentent des éléments inévitables pour la pérennité,
            l’efficacité et le bon fonctionnement CTI Expert.
          </v-card-text>
        </v-card-text>
      </v-card>
    </v-container>

    <v-divider class="mx-16 my-5"></v-divider>

    <!-- Adresse -->
    <v-container>
      <h1 class="text-center mb-8">Adresse des locaux</h1>
      <v-row class="mx-auto">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title> Bordj Bou Arreridj </v-card-title>
            <v-card-text>
              Sarl METROTEC ALGERIE <br />
              Cooperative EL Aouras section 40 ilot 93 <br />
              Établissement ouvert : 08:00 - 16:30
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="green--text" text plain>
                Voir sur Google maps
                <v-icon class="mb-1" size="22"> mdi-map-marker </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-slide-group
            class="py-2"
            :show-arrows="$vuetify.breakpoint.xs ? false : true"
          >
            <v-slide-item cycle v-for="image in imagesBBA" :key="image.url">
              <v-hover v-slot="{ hover }">
                <v-card
                  @click="
                    () => {
                      goThis(image.url);
                      urlImagSelcted = image.url;
                      dialogVisibilitie = true;
                    }
                  "
                  class="ma-2 pa-2"
                  :class="hover ? 'green lighten-2' : 'green lighten-3'"
                  elevation="1"
                >
                  <v-img width="200" :aspect-ratio="16 / 9" :src="image.url" />
                </v-card>
              </v-hover>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.4147597205598!2d5.052476029222336!3d36.73074917358258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQzJzUwLjciTiA1wrAwMycxMC45IkU!5e0!3m2!1sfr!2sdz!4v1632607469697!5m2!1sfr!2sdz"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>

    <!-- Dialog image -->
    <v-dialog v-model="dialogVisibilitie" max-width="800">
      <v-card tile>
        <v-img class="text-right" :src="urlImagSelcted">
          <v-btn
            right
            @click="dialogVisibilitie = false"
            class="ma-3 green white--text"
            icon
          >
            <v-icon size="30">mdi-close</v-icon>
          </v-btn>
        </v-img>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo ",
      imagesBBA: [
        {
          url: "metrotec-bureau/exterieur.jpeg",
          alt: "Extérieur",
        },
        {
          url: "metrotec-bureau/vitrine.jpeg",
          alt: "Vitrine",
        },
        {
          url: "metrotec-bureau/laboratoire.jpeg",
          alt: "Entré laboratoire",
        },
        {
          url: "metrotec-bureau/reception.jpeg",
          alt: "Réception",
        },
      ],
      dialogVisibilitie: false,
      urlImagSelcted: "",
    };
  },
  methods: {
    goThis(text) {
      console.log(text);
    },
  },
};
</script>

<style scoped>
.image-president {
  float: right;
  margin: 0px 20px 0px 20px;
}
.image-president-md {
  float: top;
}
.text-president {
  text-align: justify;
  text-indent: 2em;
}
</style>
