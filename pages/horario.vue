<template>
  <div class="horario">
    <h2 class="display-3 black--text">MEUS HORÁRIOS</h2>
    <div class="container">
       <v-simple-table class="table mb-4">
         <tbody>
           <tr>
             <td>SEGUNDA</td>
             <td>04:20 às 07:20 / 13:30 às 22:30</td>
           </tr>
           <tr>
             <td>TERÇA</td>
             <td>04:20 às 07:20 / 13:30 às 22:30</td>
           </tr>
           <tr>
             <td>QUARTA</td>
             <td>04:20 às 07:20 / 15:30 às 22:30</td>
           </tr>
           <tr>
             <td>QUINTA</td>
             <td>04:20 às 07:20 / 13:30 às 22:30</td>
           </tr>
           <tr>
             <td>SEXTA</td>
             <td>04:20 às 07:20 / 13:30 às 22:30</td>
           </tr>
           <tr>
             <td>SÁBADO</td>
             <td>04:20 às 07:20 / 13:30 às 18:30</td>
           </tr>
         </tbody>
       </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  transition: "horario",
};
</script>

<style lang="css">
.horario-enter-active,
.horario-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1000ms;
}
.horario-enter,
.horario-leave-to {
  opacity: 0;
}

.horario {
  background-image: url(../assets/cronograma.jpg);
  background-size: cover;  
}

.horario h2 {
   text-align: center;
   padding: 1rem;
}

.table {
   width: 50%;
   margin: 1rem auto;
   opacity: .8;   
}

.table tr td {
   color: aqua;
   font-weight: bold;
}

@media only screen and (max-width: 458px) {
   .horario {
      width: 100%;
   }

   .table {
      width: 75%;
   }
}

</style>