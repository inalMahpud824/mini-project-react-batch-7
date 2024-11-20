import { supabase } from "../config/config"

export const deleteImage = async (fileName) => {
  const { data, error } = await supabase.storage
    .from("image-article")
    .remove([`public/${fileName}`]);
  if(error){
    throw new Error(error)
  }
  return data
}