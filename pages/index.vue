<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <h1 class="display-3 mt-4 pink--text darken-1 animate__animated animate__tada">Delícia</h1>
        <hr class="pink--text" />
        <h2 class="display-1 pink--text animate__animated animate__tada">Personal Trainer</h2>
        <br />

        <div class="approach animate__animated animate__tada">
          <span class="display-2 pink--text">Meu</span>
          <span class="display-2 pink--text darken-1 bold">Delicioso</span>
          <span class="display-2 pink--text lighten-3">Approach</span>
          <hr />
        </div>
        <p
          class="lorem"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo debitis delectus voluptatibus sunt sequi doloribus veritatis, non ducimus, ipsam, voluptatem quae ratione cumque. Voluptates minus tempora sed! Sint, incidunt.</p>

        <v-btn color="info" class="pink--text mb-2" to="/preco">Veja meus preços</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  transition: {
    transition: "delicia",
  },
};
</script>

<style lang="css">
.delicia-enter-active,
.delicia-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.delicia-enter,
.delicia-leave-to {
  opacity: 0;
}
.approach {
  margin-top: 3rem;
  text-transform: capitalize;
}

.text-center {
  background-color: black;
  opacity: 0.9;
}

.lorem {
  margin: 4rem auto;
  max-width: 70%;
}
</style>
