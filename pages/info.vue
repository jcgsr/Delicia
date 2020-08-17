<template>
  <div class="info">
    <h2 class="display-2">SE NÃO FOR INDIVIDUAL, NÃO É POSSÍVEL!</h2>
    <h3 class="display-6 mt-4">
      Olá, visitante! Pra encurtar, eu sou Delícia (LGTBQ+) e sou um
      <strong>Personal Trainer</strong> (PT) formado em Educação Física em 2009? na UFS com especialização no exterior (Riachuelo-SE) e Pós-Graduação na Bahia. Também sou professor de Ed. Física, de Sociologia, de Sociedade e Cultura, de Artes e Coach. Dê uma olhada no meu portfólio.
    </h3>
    <div class="dicas mt-8">
      <div class="dica">
        <v-icon class="display-4">mdi-food</v-icon>
        <h3 class="pink--text">COMA MELHOR</h3>
        <p>Tome muito leite de Jumentum. Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="dica">
        <v-icon class="display-4">mdi-sleep</v-icon>
        <h3 class="pink--text">Durma Bem</h3>
        <p>Durma como um ursum hiebernandum. Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="dica">
        <v-icon class="display-4">mdi-run-fast</v-icon>
        <h3 class="pink--text">EXERCITE-SE</h3>
        <p>Corra como Bolsonarum de perguntas e debates. Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="dica">
        <v-icon class="display-4">mdi-scale-bathroom</v-icon>
        <h3 class="pink--text">PERCA PESO</h3>
        <p>Técnicas fantásticas de bulimiam. Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "info",
};
</script>

<style lang="css">
.info-enter-active,
.info-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.info-enter,
.info-leave-to {
  opacity: 0;
}

.dicas {
   display: flex;
}

.dica p {
   max-width: 40%;
   margin: 0 auto;
}

.info {
  background-color: aliceblue;
  color: black;
  opacity: 0.8;
  padding: 1rem;
  text-align: center;
}

@media only screen and (max-width: 458px) {
   .dicas {
      display: block;
   }
}

</style>