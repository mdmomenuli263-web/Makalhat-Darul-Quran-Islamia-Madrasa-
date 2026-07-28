// ==========================================
// Logout System
// Makalhat Darul Quran Islamia Madrasa
// ==========================================

import { auth } from "./firebase.js";

import {
    signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// ==========================================
// Logout Function
// ==========================================

window.logout = async function () {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (!confirmLogout) return;

    try {

        await signOut(auth);

        alert("Logout Successful.");

        window.location.href = "login.html";

    } catch (error) {

        console.error(error);

        alert("Logout Failed!");

    }

};

// ==========================================
// Auto Logout (Optional)
// ==========================================

let logoutTimer;

function resetLogoutTimer() {

    clearTimeout(logoutTimer);

    logoutTimer = setTimeout(async () => {

        try {

            await signOut(auth);

            alert("Session Expired. Please Login Again.");

            window.location.href = "login.html";

        } catch (error) {

            console.error(error);

        }

    }, 30 * 60 * 1000);

}

document.addEventListener("mousemove", resetLogoutTimer);
document.addEventListener("keydown", resetLogoutTimer);
document.addEventListener("click", resetLogoutTimer);

resetLogoutTimer();
