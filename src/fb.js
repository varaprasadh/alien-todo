import firebase from "firebase/app";
import "firebase/firestore";


  var firebaseConfig = {
      apiKey: "AIzaSyDakDYQSxjzHVYmSqSVUTR4Ql7hflv-jLc",
      authDomain: "alientodo.firebaseapp.com",
      databaseURL: "https://alientodo.firebaseio.com",
      projectId: "alientodo",
      storageBucket: "alientodo.appspot.com",
      messagingSenderId: "258117960484",
      appId: "1:258117960484:web:e519e86f92317952eaa9b1",
      measurementId: "G-NK2PFCXEX7"
  };
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;