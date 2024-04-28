 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
 import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
   
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyCwQnsy4RGZOV2E6XF5pVZ4496IV39c9s4",
     authDomain: "piunivesp-e81af.firebaseapp.com",
     databaseURL: "https://piunivesp-e81af-default-rtdb.firebaseio.com",
     projectId: "piunivesp-e81af",
     storageBucket: "piunivesp-e81af.appspot.com",
     messagingSenderId: "37066626111",
     appId: "1:37066626111:web:1a6d01533fe00b76ffd48a"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   const db = getDatabase(app);
   
   document.getElementById('form').addEventListener("submit", submitForm);

   function submitForm(e){
     e.preventDefault();
     set(ref(db, 'usuario/'),{
       nomeusuario: "20",
 
     })};