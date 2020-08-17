<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>        
      </v-btn>-->

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
      <Logo />
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy;{{ new Date().getFullYear() }} - Delícia Personal Trainer</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from "../components/Logo";

export default {
  components: { Logo },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Bem-vindos",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
        {
          icon: "mdi-human-greeting",
          title: "Portfólio",
          to: "/portfolio",
        },
        {
          icon: "mdi-human",
          title: "Aulas",
          to: "/aulas",
        },
        {
          icon: "mdi-human-greeting",
          title: "Info",
          to: "/info",
        },
        {
          icon: "mdi-coin",
          title: "Preços",
          to: "/preco",
        },
      ],
    };
  },
};
</script>


