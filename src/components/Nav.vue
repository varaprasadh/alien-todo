<template>
  <nav>
    
     <v-snackbar v-model="snackbar" :timeout="4000" top  color="success">
       <span>awesome! project has been added</span>
       <v-btn depressed @click="snackbar=false">close</v-btn>
     </v-snackbar>

    <v-app-bar app flat color="white">
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer">

      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">alien</span>
        <span>todo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <div class="text-center">
           <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn depressed class="white grey--text" v-on="on"> 
                  <v-icon>mdi-arrow-down</v-icon>
                  <span>Menu</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(link, index) in links"
                  :key="index"
                  router :to="link.route"
                >
                  <v-list-item-title >{{ link.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
      </div> -->
      <v-btn dark depressed color="white grey--text">
        <span class="d-none d-sm-flex">signout</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app class="primary" v-model="drawer" temporary>
        <v-layout column align-center>
           <v-flex class="mt-5">
             <v-avatar size="100">
               <img src="/avatar_1.png" alt="avatar">
             </v-avatar>
             <p class="white--text subheading mt-1">varaprasadh</p>
           </v-flex>
           <v-flex class="mt-4 mb-3">
             <Popup v-on:projectAdded="snackbar=true"/>
           </v-flex>
        </v-layout>
        <v-list>
          <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route">
            <v-list-item-action>
              <v-icon dark>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
  export default {
    name: 'Nav',
    components:{Popup},
    data: () => ({
      drawer:false,
      snackbar:false,
      links:[
        {icon:"mdi-fan",text:"Dashboard",route:"/"},
        {icon:"mdi-folder",text:"My Projects",route:"/projects"},
        {icon:"mdi-group",text:"Team",route:"/team"}
      ]
    }),
  }
</script>
