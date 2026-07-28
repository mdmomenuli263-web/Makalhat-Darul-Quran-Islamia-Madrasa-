// ======================================
// Authentication System
// Makalhat Darul Quran Islamia Madrasa
// ======================================

import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        const message = document.getElementById("message");

        message.style.color = "#d40000";
        message.innerHTML = "Please wait...";

        try {

            await signInWithEmailAndPassword(auth, email, password);

            message.style.color = "green";
            message.innerHTML = "Login Successful...";

            setTimeout(() => {

                window.location.href = "dashboard.html";

            },1000);

        } catch (error) {

            message.style.color = "red";

            switch(error.code){

                case "auth/user-not-found":
                    message.innerHTML="Admin account not found.";
                    break;

                case "auth/wrong-password":
                    message.innerHTML="Incorrect password.";
                    break;

                case "auth/invalid-email":
                    message.innerHTML="Invalid email address.";
                    break;

                default:
                    message.innerHTML=error.message;

            }

        }

    });

}

// Protect Dashboard
onAuthStateChanged(auth,(user)=>{

    if(
        !user &&
        window.location.pathname.includes("dashboard.html")
    ){

        window.location.href="login.html";

    }

});

// Logout Function
window.logout=function(){

    signOut(auth)
    .then(()=>{

        window.location.href="login.html";

    });

            }
