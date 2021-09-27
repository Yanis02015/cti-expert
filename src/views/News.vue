<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold text-center mt-5">
      L'actualité chez CTI Expert
    </h1>

    <v-card v-for="(item, i) in news" :key="i" class="my-5" elevation="5">
      <v-hover v-slot="{ hover }">
        <v-row
          :class="hover ? 'green lighten-5' : ''"
          class="smooth-transition ma-0 pa-0"
        >
          <v-col cols="12" md="5" class="ma-0 pa-0">
            <v-card class="ma-2" height="250" tile flat>
              <v-img height="250" class="ma-0" :src="item.image" />
            </v-card>
          </v-col>

          <v-col class="ma-0 pa-0" cols="12" md="7">
            <v-card height="100%" flat class="transparent">
              <v-card-title>
                {{ cutText(item.title, 50) }}
              </v-card-title>
              <v-card-subtitle>
                {{ item.day + " " + item.month + " " + item.year }}
              </v-card-subtitle>
              <v-card-text>
                {{
                  $vuetify.breakpoint.mdAndDown
                    ? cutText(lorem, 250)
                    : cutText(lorem, 400)
                }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  @click="() => {newSelected = i; dialogVisibilitie = true;}"
                  class="green--text mr-1"
                  text
                  plain
                >
                  Voir plus de details
                  <v-icon class="ml-1" size="20">mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-hover>
    </v-card>

    <!-- -->
    <v-dialog v-model="dialogVisibilitie" width="800">
      <v-card tile>
        <v-card-title class="text-center mx-auto title-news mb-5">
          <v-btn
            @click="dialogVisibilitie = false"
            plain
            icon
            class="mr-1 my-2"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          {{ news[newSelected].title }}
        </v-card-title>
        <v-card-text>
          <v-img :aspect-ratio="16 / 9" :src="news[newSelected].image">
            <v-card
              id="date-article"
              class="ml-auto mr-3 mt-3 text-center"
              tile
              flat
              width="50"
            >
              {{ adjustMonth(news[newSelected].month) }}
              <v-card
                class="teal mx-auto mt-1 mb-3"
                width="10"
                height="2"
                flat
                tile
              ></v-card>
              <span style="font-size: 23px;">
                {{ news[newSelected].day }}
              </span>
              <v-card
                class="teal mx-auto my-1"
                width="10"
                height="2"
                flat
                tile
              ></v-card>
              {{ news[newSelected].year }}
            </v-card>
          </v-img>
          <v-card-text
            v-for="(content, index) in news[newSelected].contents"
            :key="index"
          >
            {{ content }}
          </v-card-text>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialogVisibilitie = false" class="red--text" text plain
            >Fermer</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialogVisibilitie: false,
    newSelected: 0,
    news: [
      {
        title: "Titre 1 en guise d'exemple",
        image: "https://picsum.photos/510/300?random",
        contents: [
          "Premier paragraphe",
          "Deuxieme paragraphe",
          "Troisieme paragraphe",
        ],
        day: "22",
        month: "Décembre",
        year: "2021",
      },
      {
        title: "Titre 2 en guise d'exemple",
        image:
          "https://inspectalgerie.com/wp-content/uploads/2021/03/ACCRESITATION-INSPECT-2020-724x1024.png",
        contents: [
          "Premier paragraphe",
          "Deuxieme paragraphe",
          "Troisieme paragraphe",
        ],
        day: "22",
        month: "Octobre",
        year: "2021",
      },
      {
        title: "Titre 3 en guise d'exemple",
        image: "https://picsum.photos/510/300?random",
        contents: [
          "Premier paragraphe",
          "Deuxieme paragraphe",
          "Troisieme paragraphe",
        ],
        day: "22",
        month: "Juillet",
        year: "2021",
      },
      {
        title:
          "Ceci est un titre particulièrement long, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa, dolores laborum.",
        image: "https://source.unsplash.com/random",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa, dolores laborum quibusdam nisi harum iste quidem perferendis doloremque deserunt laboriosam, accusantium et explicabo ab sed. Nam alias illum rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa, dolores laborum quibusdam nisi harum iste quidem perferendis doloremque deserunt laboriosam, accusantium et explicabo ab sed. Nam alias illum rem?",
          "Deuxieme paragraphe",
          "Troisieme paragraphe",
        ],
        day: "22",
        month: "Juin",
        year: "2021",
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus praesentium iusto.Eveniet, aliquid. Quae quam libero velit, delectus rem possimus quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas voluptas optio magnam reiciendis natus ",
  }),
  methods: {
    cutText(text, x) {
      if (text.length > x - 3) return text.slice(0, x) + "...";
      return text;
    },
    goToActivitiesItem(i) {
      let url = "/activities/" + i;
      this.$router.replace(url);
    },
    adjustMonth(text) {
      if (text.length > 5) return text.slice(0, 3);
      return text;
    },
  },
};
</script>

<style>
.title-activities {
  font-family: "Cinzel Decorative", cursive;
  font-size: 25px;
}
.smooth-transition {
    transition: all 0.3s;
}
#date-article {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 12px;
}
</style>

