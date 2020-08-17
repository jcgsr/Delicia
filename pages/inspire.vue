<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="../assets/academia.jpg" alt="Academia" class="mb-5 mt-3" />
      <blockquote class="blockquote pink--text">
        &#8220;Primeiro, se exercitar. Depois, resolver os problemas.&#8221;
        <footer>
          <small>
            <em>&mdash;Delícia</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  transition: "inspire",
};
</script>

<style lang="css">
.inspire-enter-active,
.inspire-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.inspire-enter,
.inspire-leave-to {
  opacity: 0;
}
@media only screen and (max-width: 458px) {
  img {
    width: 80%;
  }
}
</style>
