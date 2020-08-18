<template>
  <div class="preco">
    <h2 class="display-2">Planos e Preços</h2>
    <p
      class="mt-3 mb-5"
    >Cansado de tantas coisas? Vários preços e planos? Por que não simplicar? Então, dê uma olhada nos meus preços e planos.</p>
    <v-card class="card d-inline-block mx-auto mb-4">
      <v-card-title class="ttitle font-weight-medium orange--text">
        R$269,99
        <span class="span text-lg-subtitle-2 ml-1">MENSAL</span>
      </v-card-title>

      <v-card-subtitle class="font-weight-medium blue--text text-lg-h5">DELÍCIA (STANDARD)</v-card-subtitle>
      <v-card-text>
        <v-list>
          <v-list-item>
            <ul>
              <li>4 sessões (60' cada)</li>
              <li>Avaliação Completa</li>
              <li>Suplementos Nutricionais Sintéticos</li>
            </ul>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card class="card d-inline-block mx-auto mb-4">
      <v-card-title class="ttitle font-weight-medium orange--text">
        R$433,99
        <span class="span text-lg-subtitle-2 ml-1">MENSAL</span>
      </v-card-title>

      <v-card-subtitle class="font-weight-medium blue--text text-lg-h5">DELÍCIA (INTENSE)</v-card-subtitle>
      <v-card-text>
        <v-list>
          <v-list-item>
            <ul>
              <li>8 sessões (60' cada)</li>
              <li>Avaliação Completa e Massagem</li>
              <li>Suplementos Nutricionais Naturais</li>
            </ul>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card class="card d-inline-block mx-auto mb-4">
      <v-card-title class="ttitle font-weight-medium orange--text">
        R$649.99
        <span class="span text-lg-subtitle-2 ml-1">MENSAL</span>
      </v-card-title>

      <v-card-subtitle class="font-weight-medium blue--text text-lg-h5">DELÍCIA (ULTRA)</v-card-subtitle>
      <v-card-text>
        <v-list>
          <v-list-item>
            <ul>
              <li>12 sessões (60' cada)</li>
              <li>Avaliação Completa, Massagem e Strip</li>
              <li>Suplementos Nutricionais Veganos</li>
            </ul>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  transition: "preco",
};
</script>


<style lang="css">
.preco-enter-active,
.preco-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.preco-enter,
.preco-leave-to {
  opacity: 0;
}
.preco {
  text-align: center;
  background-color: brown;
  opacity: 0.8;
}

.preco h2 {
  padding-top: 1rem;
}

.preco p {
  width: 50%;
  margin: 0 auto;
}

.card li {
  text-align: left;
}

.preco v-card p {
  font-size: 0.7rem;
}

.card .ttitle {
  font-size: 3rem;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 458px) {
  .card {
    width: 85%;
  }

  .card .span {
    font-size: 10px;
  }

  .card .ttitle {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
}
</style>