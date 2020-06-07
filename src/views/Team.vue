<template>
   <div class="team">
      <h1 class="subheading grey--text">Team</h1>
     <v-container class="my-5">
        <v-layout row wrap>
            <v-flex x12 sm6 md4 lg3 v-for="(person,i) in team" :key="i">
               <v-card flat class="text-center ma-3">
                  <v-responsive class="pt-4">
                     <v-avatar size="100" class="pa-1 green lighten-2">
                       <img :src="person.avatar" alt="avatar">
                     </v-avatar>
                  </v-responsive>
                  <v-card-text>
                    <div class="subheading text-capitalize">{{person.name}}</div>
                    <div class="grey--text">{{person.role}}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn depressed class="white grey--text">
                      <v-icon left>mdi-message</v-icon>
                      <span>message</span>
                    </v-btn>
                  </v-card-actions>
               </v-card>
            </v-flex>
        </v-layout>
     </v-container>
  </div>
</template>

<script>
export default {
  name:"team",
  data:()=>({
    open:true,
    team:[
      {name:"john doe",role:"web developer",avatar:"/avatar_1.png"},
      {name:"elon musk",role:"ceo",avatar:"/avatar_2.png"},
      {name:"elliot alderson",role:"hacker",avatar:"/avatar_1.png"},
      {name:"tyrell wellick",role:"CTO",avatar:"/avatar_2.png"},
      {name:"varaprasadh",role:"kite maker",avatar:"/avatar_1.png"}
    ]
  })
}
</script>

<style>

</style>