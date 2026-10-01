const API_URL = "/api";

export async function uploadNormally(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/uploads/normal`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload file");
  }

  return response.json();
}
