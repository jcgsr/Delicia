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
      <div class="footer mt-4">
        <p>
          &copy;{{ new Date().getFullYear() }} -
          <strong>Delícia</strong> Personal Trainer
        </p>

        <p class="creator">
          Criado e Desenvolvido por
          <a :href="link">
            <v-btn class="jo">Jovane</v-btn>
          </a>
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from "../components/Logo";

export default {
  components: { Logo },
  data() {
    return {
      link: "https://jcgsr.github.io/",
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
          icon: "mdi-currency-usd",
          title: "Preços",
          to: "/preco",
        },
        {
          icon: "mdi-timer",
          title: "Horários",
          to: "/horario",
        },
        {
          icon: "mdi-format-quote-open",
          title: "Depoimentos",
          to: "/depoimento",
        },
        {
          icon: "mdi-contacts",
          title: "Contatos",
          to: "/contato",
        },
      ],
    };
  },
};
</script>

<style lang="css">
.footer {
  text-align: center;
  margin: 0 auto;
}

.creator .jo {
  font-size: 0.8rem;
}

a:link {
  text-decoration: none;
}
</style>


