import { database } from "./firebase.js";

import {
ref,
set,
push,
update,
remove,
get,
child
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

export async function addData(path, data) {

try {

const newRef = push(ref(database, path));

await set(newRef, data);

return true;

} catch (error) {

console.error(error);

return false;

}

}

export async function updateData(path, id, data) {

try {

await update(ref(database, `${path}/${id}`), data);

return true;

} catch (error) {

console.error(error);

return false;

}

}

export async function deleteData(path, id) {

try {

await remove(ref(database, `${path}/${id}`));

return true;

} catch (error) {

console.error(error);

return false;

}

}

export async function getData(path) {

try {

const snapshot = await get(child(ref(database), path));

if (snapshot.exists()) {

return snapshot.val();

}

return null;

} catch (error) {

console.error(error);

return null;

}

  }
