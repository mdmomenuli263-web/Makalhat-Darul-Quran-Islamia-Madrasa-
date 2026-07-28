import { storage } from "./firebase.js";

import {
ref,
uploadBytes,
getDownloadURL,
deleteObject
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

export async function uploadFile(file, folder = "uploads") {

try {

const fileName = Date.now() + "_" + file.name;

const storageRef = ref(storage, `${folder}/${fileName}`);

await uploadBytes(storageRef, file);

const downloadURL = await getDownloadURL(storageRef);

return {

success: true,

url: downloadURL,

path: `${folder}/${fileName}`

};

} catch (error) {

console.error(error);

return {

success: false,

message: error.message

};

}

}

export async function deleteFile(path) {

try {

const storageRef = ref(storage, path);

await deleteObject(storageRef);

return true;

} catch (error) {

console.error(error);

return false;

}

  }
