<template>
  <v-container>
    <h1 class="text-center mb-10 mt-5">
      Nous contacter
    </h1>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="name"
                :rules="[rules.required]"
                label="Nom *"
                type="text"
                required
                outlined
                clearable
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="societe"
                :rules="[rules.required]"
                label="Société *"
                type="text"
                required
                outlined
                clearable
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="E-mail *"
                type="email"
                required
                outlined
                clearable
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-text-field
                v-model="object"
                :rules="[rules.required]"
                label="Object *"
                type="text"
                required
                outlined
                clearable
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-textarea
                v-model="message"
                :rules="[rules.required]"
                outlined
                name="input-7-4"
                label="Message"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn :disabled="!valid" color="success" @click="validate">
            Validate
          </v-btn>
        </v-container>
      </v-form>
    </v-container>

    <h1 class="text-center mb-10 mt-5">
      Adresse
    </h1>
    <v-row class="text-center">
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>
                Bordj Bou Arreridj
              </v-card-title>
              <v-card-text class="text-left">
                Sarl METROTEC ALGERIE <br />
                Cooperative EL Aouras section 40 ilot 93 <br />
                Établissement ouvert : 08:00 - 16:30
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text plain>
                  <a
                    href="https://www.google.com/maps/place/36%C2%B043'50.6%22N+5%C2%B003'10.8%22E/@36.7307222,5.0524528,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d36.7307229!4d5.0530122?hl=fr"
                    target="_blank"
                    class="green--text"
                    >Voir sur Google maps
                    <v-icon class="mb-1" size="22"> mdi-map-marker </v-icon>
                  </a>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-list one-line>
              <v-list-item v-for="item in contactList" :key="item.icon">
                <v-list-item-icon class="mr-2">
                  <v-icon size="20">
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 text-left">
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-slide-group
              class="py-2"
              :show-arrows="$vuetify.breakpoint.xs ? false : true"
            >
              <v-slide-item cycle v-for="image in imagesBBA" :key="image.url">
                <v-hover v-slot="{ hover }">
                  <v-card
                    @click="
                      () => {
                        urlImagSelcted = image.url;
                        dialogVisibilitie = true;
                      }
                    "
                    class="ma-2 pa-2"
                    :class="hover ? 'green lighten-2' : 'green lighten-3'"
                    elevation="1"
                  >
                    <v-img
                      width="200"
                      :aspect-ratio="16 / 9"
                      :src="image.url"
                    />
                  </v-card>
                </v-hover>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.4147597205598!2d5.052476029222336!3d36.73074917358258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQzJzUwLjciTiA1wrAwMycxMC45IkU!5e0!3m2!1sfr!2sdz!4v1632607469697!5m2!1sfr!2sdz"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </v-col>
    </v-row>

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
  data: () => ({
    valid: false,
    name: "",
    societe: "",
    email: "",
    object: "",
    message: "",
    rules: {
      required: (value) => !!value || "Ce champ est obligatoire.",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
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
    contactList: [
      {
        icon: "mdi-account-box",
        text: "Mr HARADJ Abderraouf",
      },
      {
        icon: "mdi-phone-outline",
        text: "+213 (0) 35 76 84 14",
      },
      {
        icon: "mdi-phone",
        text: "+213 (0) 34 80 35 59",
      },
      {
        icon: "mdi-map-marker",
        text: "Bordj Bou Arreridj",
      },
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.valid) {
        window.open(
          "mailto:contact@cti-expert.com" +
            "?subject=" +
            this.object +
            "&body=Nom : " +
            this.name +
            "%0A" +
            "Nom de l'organisme : " +
            this.societe +
            "%0A" +
            "E-mail : " +
            this.email +
            "%0A%0A" +
            "Contenu : " +
            this.message,
          "_blank"
        );
      }
    },
  },
};
</script>

<style>
.title-contact {
  font-family: "Cinzel Decorative", cursive;
  font-size: 25px;
}
</style>
