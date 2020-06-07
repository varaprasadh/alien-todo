<template>
  <v-dialog max-width="600px" v-model="dialog">
       <template v-slot:activator="{ on }">
           <v-btn
            color="green lighten-2" dark v-on="on">
               add new project
            </v-btn>
       </template>
       <v-card>
          <v-card-title>add a new project</v-card-title>
          <v-card-text>
              <v-form class="px-3" ref="form">
                  <v-text-field :rules="inputRules" prepend-icon="mdi-folder" label="title" v-model="title"></v-text-field>
                  <v-textarea :rules="inputRules" prepend-icon="mdi-pencil" label="information" v-model="content"></v-textarea>
                  <v-menu >
                      <template v-slot:activator="{ on }">
                          <v-text-field :value="due" v-on="on" label="due date"></v-text-field>
                      </template>
                      <v-date-picker v-model="due"> </v-date-picker>
                  </v-menu>
                  <v-btn :loading="loading" class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
              </v-form>
          </v-card-text>
       </v-card>
  </v-dialog>
</template>

<script>
import db from "../fb"

export default {
  name:"dialog",
  data:()=>({
      dialog:false,
      title:"",
      content:"",
      due:new Date().toISOString().substr(0, 10),
      inputRules:[
        v=> v.length>=3 || "minimum length is 3 characters" 
      ],
      loading:false
  }),
  methods:{
      submit(){
         if(this.$refs.form.validate()){
             let project={
                 title:this.title,
                 content:this.content,
                 due:this.due,
                 person:"varaprasadh",
                 status:"ongoing"
             }
             this.loading=true;
            db.collection('projects').add(project).then(()=>{
               this.loading=false;
               this.dialog=false;
               this.$emit('projectAdded');
            }).catch((err)=>{
                this.loading=false;
               console.log(err);
            })
         }
      }
  },
  computed:{
      formatedDate(){
          return this.due;
      }
  }
}
</script>

<style>

</style>