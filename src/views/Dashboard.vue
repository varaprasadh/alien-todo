<template>
  <div class="dashboard">
     <h1 class="subheading grey--text">Dashboard</h1>
     <v-container class="my-5">
       <v-layout row class="mb-3">
         <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed class="grey--text" v-on="on" @click="sort('project')"> 
                <v-icon left small >mdi-folder</v-icon>
                <span class="caption text-lowercase">By projects name</span>
              </v-btn>
            </template>
            <span>show projects by name</span>
         </v-tooltip>
         <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed class="grey--text" v-on="on" @click="sort('person')"> 
                <v-icon left small>mdi-group</v-icon>
                <span class="caption text-lowercase">By person</span>
              </v-btn>
            </template>
            <span>show projects by person</span>
         </v-tooltip>
        
           
       </v-layout>
        <v-card flat class="" v-for="(project,i) in projects" :key="i">
           <v-layout wrap :class="`pa-3 project ${project.status}`">
             <v-flex xs12 md6>
               <div class="grey--text caption">project title</div>
               <div>{{project.title}}</div>
             </v-flex>
             <v-flex xs6 sm4 md2>
               <div class="grey--text caption">Person</div>
               <div>{{project.person}}</div>
             </v-flex>
             <v-flex xs6 sm4 md2>
               <div class="grey--text caption">Due by</div>
               <div>{{project.due}}</div>
             </v-flex>
             <v-flex xs6 sm4 md2>
               <div class="right">
                 <v-chip small :class="`${project.status} white--text my-2`">
                   {{project.status}}
                 </v-chip>
               </div>
             </v-flex>
           </v-layout>
           <v-divider/>
        </v-card>
     </v-container>
  </div>
</template>

<script>
import db from "../fb";

export default {
 name:"dashboard",
 data:()=>({
   projects:[
    //  {person:"elon musk",title:"fire a ship",due:"12/12/2020",status:"ongoing",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
    //  {person:"mr.x",title:"drop a astroid",due:"12/12/2020",status:"complete",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
    //  {person:"john doe",title:"create a website",due:"12/12/2020",status:"overdue",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
    //  {person:"ben",title:"find aliens",due:"12/12/2020",status:"ongoing",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
    //  {person:"varaprasadh",title:"find aliens",due:"12/12/2020",status:"ongoing",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
   ]
 }),
 methods:{
   sort(prop){
        this.projects.sort((a,b)=>a[prop]<b[prop]?-1:1)
   }
 },
 created(){
    db.collection('projects').onSnapshot(res=>{
      const changes=res.docChanges();
      changes.forEach(change => {
        if(change.type==='added'){
          this.projects.push({
            ...change.doc.data(),
            id:change.doc.id
          });
        }
      });
    })
 }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #31c2d2;
}
.project.ongoing{
  border-left: 4px solid orange;;
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #31c2d2 !important;
}
.v-chip.ongoing{
  background: orange  !important;
}
.v-chip.overdue{
  background: tomato  !important;
}
</style>