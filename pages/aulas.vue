<template>
  <v-layout>
    <v-flex class="text-center">
      <h2 class="display-2 mt-1 mb-4 pink--text">Aulas</h2>
      <p
        class="text-center pink--text"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis quas atque soluta unde ipsam ad nulla, possimus aliquid hic tenetur, obcaecati commodi distinctio nemo quam ut porro reiciendis neque.</p>
      <div class="box">
        <img
          src="../assets/corrida2.jpg"
          alt="Corrida Foto"
          class="animate__animated animate__backInDown"
        />
        <div class="text">
          <p class="pink">MAXIMIZE RESULTADOS</p>
        </div>
        <div class="text1">
          <p class="orange">Melhores resultados com esportes</p>
        </div>
      </div>
       <div class="box">
        <img
          src="../assets/academia7.jpg"
          alt="Corrida Foto"
          class="animate__animated animate__backInDown"
        />
        <div class="text">
          <p class="pink">MOTIVAÇÃO E APOIO</p>
        </div>
        <div class="text1">
          <p class="orange">Estou aqui para te apoiar!</p>
        </div>
      </div>
       <div class="box">
        <img
          src="../assets/academia8.jpg"
          alt="Corrida Foto"
          class="animate__animated animate__backInDown"
        />
        <div class="text">
          <p class="pink">PRIMEIRA VEZ?</p>
        </div>
        <div class="text1">
          <p class="orange">Sua primeira aula será grátis</p>
        </div>
      </div>
       <div class="box">
        <img
          src="../assets/academia8.jpg"
          alt="Corrida Foto"
          class="animate__animated animate__backInDown"
        />
        <div class="text">
          <p class="pink">TREINAMENTO INDIVIDUAL</p>
        </div>
        <div class="text1">
          <p class="orange">Atendimento personalizado</p>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  transition: "aulas",
};
</script>

<style lang="css">
.box {
  position: relative;
  display: inline-block;
}
.box .text {
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  text-align: center;
  top: 70%; /* Adjust this value to move the positioned div up and down */
  background: rgba(223, 75, 75, 0.8);
  color: #fff;
  width: 50%; /* Set the width of the positioned div */
}
.text1 {
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  text-align: center;
  top: 80%; /* Adjust this value to move the positioned div up and down */  
  color:black;
  width: 60%; /* Set the width of the positioned div */
}

.text-center {
  max-width: 80%;
  margin: 0 auto;
}
.aulas-enter-active,
.aulas-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.aulas-enter,
.aulas-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 456px) {
  
 
}
</style>
