<template>
  <div class="depoimento">
    <h2 class="display-3 white--text darken-4">DEPOIMENTOS</h2>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <blockquote class="blockquote white--text">
              <div class="display-2">&#8220;{{ slide }}&#8221;</div>
              <footer>
                <small>
                  <em :author="author[i]">&mdash; {{ author[i] }}</em>
                </small>
              </footer>
            </blockquote>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  transition: "depoimento",

  data() {
    return {
      colors: [
        "indigo",
        "gray",
        "blue darken-2",
        "red",
        "pink accent-4",
      ],
      slides: [
        "O melhor Personal Trainer de Aracaju!!",
        "O Personal mais delícia do mundo!! Delíciááá!!",
        "Melhor parceiro de tênis, melhor pai, marido... ",
        "Bem que poderia chegar no horário uma vez!",
        "É professor, é petralha... mas me amolegava como ninguém! Que saudade!",
      ],
      author: ["Túlio Maravilha", "Alvaci", "Esposa (claro)", "Diretora Ryachuelo", "Mestre"],
    };
  },
};
</script>

<style lang="css">
.depoimento-enter-active,
.depoimento-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.depoimento-enter,
.depoimento-leave-to {
  opacity: 0;
}

.depoimento {
  background-color: orange;
  opacity: 0.9;
}

.depoimento h2 {
  text-align: center;
  padding: 1rem;
}
</style>