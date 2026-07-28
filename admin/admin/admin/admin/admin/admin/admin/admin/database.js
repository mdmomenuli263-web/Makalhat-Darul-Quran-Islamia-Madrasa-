// ==========================================
// Firestore Database Functions
// Makalhat Darul Quran Islamia Madrasa
// ==========================================

import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    orderBy,
    query
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// ===============================
// Load Gallery Images
// ===============================

async function loadGallery() {

    const galleryList = document.getElementById("galleryList");

    if (!galleryList) return;

    galleryList.innerHTML = "Loading...";

    const q = query(
        collection(db, "gallery"),
        orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    galleryList.innerHTML = "";

    if (snapshot.empty) {

        galleryList.innerHTML = "<p>No Images Found.</p>";

        return;

    }

    snapshot.forEach((documentData) => {

        const data = documentData.data();

        galleryList.innerHTML += `

        <div class="gallery-card">

            <img src="${data.image}" alt="${data.title}">

            <h4>${data.title}</h4>

            <button onclick="deleteImage('${documentData.id}')">

                Delete

            </button>

        </div>

        `;

    });

}

// ===============================
// Delete Image
// ===============================

window.deleteImage = async function(id){

    if(!confirm("Delete this image?")) return;

    await deleteDoc(doc(db,"gallery",id));

    loadGallery();

}

// ===============================

loadGallery();
