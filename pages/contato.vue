<template>
  <div class="contato">
    <h2 class="display-2">Contatos</h2>
    <p class="black--text">Se tiver qualquer dúvida, só entrar em contato</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3732.48367765139!2d-37.08204357822539!3d-10.928425212737636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1597782225593!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen
      aria-hidden="false"
      tabindex="0"
    ></iframe>

    <div class="contatos">
      <v-icon>mdi-cellphone-iphone</v-icon>
      <span class="white--text">98801-2418</span>
      <v-icon class="ml-4">mdi-email</v-icon>
      <span class="white--text">rodrigoluispersonal@yahoo.com.br</span>
      <v-icon class="ml-4">mdi-google-maps</v-icon>
      <span class="white--text">Ruas das Delícias, 2424 B. Jabotiana</span>
    </div>

    <div class="rede-social">
      <a :href="zap" target="new" title="Whatsapp de Delícia">
        <v-icon class="iconS black--text ml-16">mdi-whatsapp</v-icon>
      </a>
      <a :href="insta" target="new" title="Whatsapp de Delícia">
        <v-icon class="iconS black--text ml-16">mdi-instagram</v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  transition: "contato",
  data() {
    return {
      insta: 'https://www.instagram.com/rodrigoluispersonaltrainer/?hl=pt-br',
      zap: 'https://api.whatsapp.com/send?phone=5579988012418&text=Entrar em contato'
    };
  },
};
</script>

<style lang="css">
.contato-enter-active,
.contato-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.contato-enter,
.contato-leave-to {
  opacity: 0;
}

.contato {
  background-color: aliceblue;
  opacity: 0.8;
  color: black;
  text-align: center;
}

.contatos {
  background-color: black;
  opacity: 0.9;
  padding: 1rem;
}

.contatos v-icon {
  margin-left: 1rem;
}

.contato h2 {
  text-align: center;
  padding: 1rem;
}

.rede-social {
   margin: 0 auto;
}

.rede-social .iconS {
  font-size: 3rem;
  margin: 2rem auto;
}

.rede-social a:link{
   text-decoration: none;
}

@media only screen and (max-width: 458px) {
  .contato {
    width: 100%;
  }

  .contato iframe {
     width: 100%;
  }

  .contatos {
     display: flex;
     flex-direction: column;
  }
}
</style>