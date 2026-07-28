import { auth } from "./firebase.js";

import {
signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

logoutBtn.addEventListener("click", async () => {

const confirmLogout = confirm("Are you sure you want to logout?");

if (!confirmLogout) return;

try {

await signOut(auth);

alert("Logout Successful");

window.location.href = "login.html";

} catch (error) {

alert(error.message);

}

});

}
