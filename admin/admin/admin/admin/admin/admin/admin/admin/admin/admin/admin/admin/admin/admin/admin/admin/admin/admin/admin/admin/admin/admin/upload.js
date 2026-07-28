import { uploadFile } from "./storage.js";
import { addData } from "./database.js";

export async function uploadGallery(file, title = "") {

    const result = await uploadFile(file, "gallery");

    if (!result.success) {
        alert(result.message);
        return;
    }

    await addData("gallery", {
        title: title,
        image: result.url,
        path: result.path,
        createdAt: Date.now()
    });

    alert("Gallery Image Uploaded Successfully");

}

export async function uploadTeacher(file, name, designation) {

    const result = await uploadFile(file, "teachers");

    if (!result.success) {
        alert(result.message);
        return;
    }

    await addData("teachers", {
        name: name,
        designation: designation,
        photo: result.url,
        path: result.path,
        createdAt: Date.now()
    });

    alert("Teacher Added Successfully");

}

export async function uploadNotice(title, file) {

    const result = await uploadFile(file, "notices");

    if (!result.success) {
        alert(result.message);
        return;
    }

    await addData("notices", {
        title: title,
        file: result.url,
        path: result.path,
        createdAt: Date.now()
    });

    alert("Notice Uploaded Successfully");

          }
