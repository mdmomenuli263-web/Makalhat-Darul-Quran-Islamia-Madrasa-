// ==========================================
// Makalhat Darul Quran Islamia Madrasa
// Admin Panel JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Admin Dashboard Loaded Successfully");

    // Dashboard Cards Animation
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});

// ==========================================
// Dashboard Statistics
// ==========================================

function updateDashboard() {

    const totalTeachers = document.getElementById("totalTeachers");
    const totalStudents = document.getElementById("totalStudents");
    const totalNotices = document.getElementById("totalNotices");
    const totalGallery = document.getElementById("totalGallery");

    if (totalTeachers) totalTeachers.innerHTML = "0";

    if (totalStudents) totalStudents.innerHTML = "0";

    if (totalNotices) totalNotices.innerHTML = "0";

    if (totalGallery) totalGallery.innerHTML = "0";

}

updateDashboard();

// ==========================================
// Search
// ==========================================

const searchBox = document.getElementById("search");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            if (card.innerText.toLowerCase().includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ==========================================
// Notification
// ==========================================

function showMessage(message) {

    alert(message);

}

// ==========================================
// Confirm Delete
// ==========================================

function confirmDelete() {

    return confirm("Are you sure you want to delete this item?");

}

// ==========================================
// Current Date
// ==========================================

const today = document.getElementById("today");

if (today) {

    today.innerHTML = new Date().toLocaleDateString();

}

// ==========================================
// Current Time
// ==========================================

const clock = document.getElementById("clock");

if (clock) {

    setInterval(() => {

        clock.innerHTML = new Date().toLocaleTimeString();

    }, 1000);

}

// ==========================================
// Dark Mode
// ==========================================

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    darkBtn.onclick = () => {

        document.body.classList.toggle("dark");

    };

      }
