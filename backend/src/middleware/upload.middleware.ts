import multer from "multer";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (_req, file, callback) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.mimetype)) {
        callback(new Error("Invalid file type. Only JPEG, PNG, GIF, and WEBP are allowed."));
        return;
    }

    callback(null, true);
  },
});
