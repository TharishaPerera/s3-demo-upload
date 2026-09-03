import { Router } from "express";
import { upload } from "../middleware/upload.middleware.js";
import { uploadObject } from "../services/s3.service.js";

const router = Router();

router.post("/normal", upload.single("file"), async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const extension = req.file.originalname.split(".").pop()?.toLowerCase();
    const key = `uploads/${crypto.randomUUID()}.${extension}`;

    const result = await uploadObject(key, req.file.buffer, req.file.mimetype);
    res.status(201).json({ message: "File uploaded successfully", ...result });
  } catch (error) {
    next(error);
  }
});

export default router;