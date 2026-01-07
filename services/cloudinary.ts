
const CLOUD_NAME = "ds2mbrzcn";
const UPLOAD_PRESET = "real_unsigned";

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to upload image to Cloudinary");
  }

  const data = await response.json();
  return data.public_id;
};

export const getCloudinaryUrl = (publicId: string, options: string = "f_auto,q_auto,w_1200"): string => {
  if (!publicId) return "https://picsum.photos/seed/placeholder/800/1200";
  // If it's already a full URL (legacy data), return it
  if (publicId.startsWith("http")) return publicId;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${options}/${publicId}`;
};
