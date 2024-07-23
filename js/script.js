import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf9BGs5C-ANSrDdLDGcXxFntlr6kjpngM",
  authDomain: "provas-e52a0.firebaseapp.com",
  projectId: "provas-e52a0",
  storageBucket: "provas-e52a0.appspot.com",
  messagingSenderId: "838457875800",
  appId: "1:838457875800:web:4bdd4e05ff023daab8192d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Adicionar um ouvinte de evento para lidar com o login quando o formulário for enviado
document.querySelector('#loginForm').addEventListener('submit', (event) => {
  event.preventDefault();  // Prevenir o envio padrão do formulário

   // Extrair os valores dos campos de entrada
  const email = emailInput.value;
  const password = passwordInput.value;

  // Fazer login com email e senha
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
      window.location.href = 'QuizzProvas/game.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error:", errorCode, errorMessage);
    });
});
