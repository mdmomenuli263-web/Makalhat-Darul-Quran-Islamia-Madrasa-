// ==========================================
// Gallery Image Upload
// Makalhat Darul Quran Islamia Madrasa
// ==========================================

import { storage, db } from "./firebase.js";

import {
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.getElementById("galleryForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const title = document.getElementById("imageTitle").value.trim();

        const file = document.getElementById("imageFile").files[0];

        if (!file) {

            alert("Please select an image.");

            return;

        }

        try {

            const fileName = Date.now() + "_" + file.name;

            const storageRef = ref(storage, "gallery/" + fileName);

            await uploadBytes(storageRef, file);

            const imageUrl = await getDownloadURL(storageRef);

            await addDoc(collection(db, "gallery"), {

                title: title,

                image: imageUrl,

                createdAt: serverTimestamp()

            });

            alert("Image Uploaded Successfully.");

            form.reset();

        } catch (error) {

            console.error(error);

            alert("Upload Failed.");

        }

    });

              }
