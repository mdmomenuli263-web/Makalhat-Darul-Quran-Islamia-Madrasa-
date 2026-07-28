// ==========================================
// Firebase Storage Manager
// Makalhat Darul Quran Islamia Madrasa
// ==========================================

import { storage } from "./firebase.js";

import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
    listAll
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

// ==========================================
// Upload Image
// ==========================================

export async function uploadImage(file) {

    try {

        const fileName = Date.now() + "_" + file.name;

        const storageRef = ref(storage, "gallery/" + fileName);

        await uploadBytes(storageRef, file);

        const url = await getDownloadURL(storageRef);

        return url;

    } catch (error) {

        console.error(error);

        throw error;

    }

}

// ==========================================
// Delete Image
// ==========================================

export async function removeImage(fileName) {

    try {

        const imageRef = ref(storage, "gallery/" + fileName);

        await deleteObject(imageRef);

        return true;

    } catch (error) {

        console.error(error);

        return false;

    }

}

// ==========================================
// Get All Images
// ==========================================

export async function getGalleryImages() {

    try {

        const folderRef = ref(storage, "gallery");

        const result = await listAll(folderRef);

        let images = [];

        for (const item of result.items) {

            const url = await getDownloadURL(item);

            images.push({

                name: item.name,

                url: url

            });

        }

        return images;

    } catch (error) {

        console.error(error);

        return [];

    }

}

// ==========================================
// Preview Selected Image
// ==========================================

const imageInput = document.getElementById("imageFile");

const preview = document.getElementById("previewImage");

if (imageInput && preview) {

    imageInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            preview.src = e.target.result;

            preview.style.display = "block";

        };

        reader.readAsDataURL(file);

    });

}
