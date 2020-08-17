<template>
  <v-layout>
     
    <v-flex class="text-center">
       <h2 class="display-2 mt-1 mb-4 pink--text">Meu Portfólio</h2>
       <div class="card">
         <v-card class="d-inline-block mx-auto">
           <v-card-text>Fat Loos</v-card-text>
         </v-card>
         <v-card class="d-inline-block mx-auto">
           <v-card-text>Treinamento</v-card-text>
         </v-card>
         <v-card class="d-inline-block mx-auto">
           <v-card-text>Yoga</v-card-text>
         </v-card>
         <v-card class="d-inline-block mx-auto">
           <v-card-text>Balé</v-card-text>
         </v-card>
       </div>
      <img
        src="../assets/academia3.jpg"
        alt="Academia Foto"
        class="mb-5 mt-3 animate__animated animate__backInDown"
      >
      <img
        src="../assets/academia4.jpg"
        alt="Academia Foto"
        class="mb-5 mt-3 animate__animated animate__backInUp"
      >
      <img
        src="../assets/academia5.jpg"
        alt="Academia Foto"
        class="mb-5 mt-3 animate__animated animate__backInRight"
      >
      <img
        src="../assets/academia6.jpg"
        alt="Academia Foto"
        class="mb-5 mt-3 animate__animated animate__backInLeft"
      >
     
    </v-flex>
  </v-layout>
</template>

<script>
export default {
   transition: 'portfolio'
}
</script>

<style lang="css">
.portfolio-enter-active,
.portfolio-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.portfolio-enter,
.portfolio-leave-to {
  opacity: 0;
}
img {
   margin-left: .5rem;
}
@media only screen and (max-width: 458px) {
  img {
    width: 80%;
  }
}
  
</style>
