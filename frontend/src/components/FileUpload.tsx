import { useState } from "react";
import { uploadNormally } from "../api/upload";

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleUpload() {
    if (!file) {
      return;
    }

    try {
      setUploading(true);
      setMessage("");

      const result = await uploadNormally(file);

      setMessage(`Uploaded: ${result.key}`);
    } catch (error) {
      console.error(error);

      setMessage("Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={(event) => {
          setFile(event.target.files?.[0] ?? null);
        }}
      />

      <button disabled={!file || uploading} onClick={handleUpload}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}
