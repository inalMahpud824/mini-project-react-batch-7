import { supabase } from "../config/config";

export const uploadImage = async (file, fileName) => {
  const { data, error } = await supabase.storage
    .from("image-article")
    .upload(`public/${fileName}`, file, {
      cacheControl: "3600",
      upsert: false,
    });
  if (error) {
    throw new Error(error);
  }
  return data;
};
