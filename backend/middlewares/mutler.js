import multer from "multer";

const storage = multer.memoryStorage();

const firstStore = () => {
  //re-render the socke.io
}

export const singleUpload = multer({storage}).single("file");
