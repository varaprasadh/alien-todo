<template>
  <div id="app">
     <v-app>
       <Nav/>
       <v-content class="mx-5">
          <router-view/>
       </v-content>
     </v-app>
   
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name:"App",
  components:{
    Nav
  }
}
</script>
<style scoped>
#app{
  background: rgb(243, 243, 243);
}
</style>
