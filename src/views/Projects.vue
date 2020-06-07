<template>
   <div class="projects">
     <h1 class="subheading grey--text">Projects</h1>
      <v-container class="my-5">
         <v-expansion-panels>
           <v-expansion-panel v-for="(project,i) in myprojects" :key="i">
             <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
             <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text class="px-4 grey--text">
                    <div class="font-weight-bold">due bye {{project.due}}</div>
                    <div>{{project.content}}</div>
                  </v-card-text>
                </v-card>
             </v-expansion-panel-content>
           </v-expansion-panel>
         </v-expansion-panels>
      </v-container>
  </div>
</template>

<script>
import db from "../fb";

export default {
  name:"projects",
  computed:{
    myprojects(){
      return this.projects.filter(project=>project.person=="varaprasadh");
    }
  },
  data:()=>({
   projects:[
    //  {person:"elon musk",title:"fire a ship",due:"12/12/2020",status:"ongoing",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
    //  {person:"mr.x",title:"drop a astroid",due:"12/12/2020",status:"complete",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
    //  {person:"john doe",title:"create a website",due:"12/12/2020",status:"overdue",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
    //  {person:"ben",title:"find aliens",due:"12/12/2020",status:"ongoing",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
    //  {person:"varaprasadh",title:"find aliens",due:"12/12/2020",status:"ongoing",content:"lorem lorem lorem s,fjkk ssgsg sgs skg ggsg sgr gsb sg s g"},
   ]
  }),
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

</style>