import multer from "multer";
import path from "path";
import fs from "fs";

const dirPath = path.join(process.cwd(), "public", "images","chats");  //current working directory
console.log("images will be stored in:", dirPath);
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath, {recursive: true}); //allows creation of nested directories
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dirPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({storage});
export default upload;