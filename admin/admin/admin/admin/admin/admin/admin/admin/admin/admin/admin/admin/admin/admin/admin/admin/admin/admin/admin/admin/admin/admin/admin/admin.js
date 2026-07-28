import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const adminName = document.getElementById("adminName");
const adminEmail = document.getElementById("adminEmail");
const currentDate = document.getElementById("currentDate");

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    if (adminName) {
        adminName.textContent = user.displayName || "Administrator";
    }

    if (adminEmail) {
        adminEmail.textContent = user.email;
    }

});

if (currentDate) {

    const today = new Date();

    currentDate.innerHTML = today.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}

const totalCards = document.querySelectorAll(".dashboard-card");

totalCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});
