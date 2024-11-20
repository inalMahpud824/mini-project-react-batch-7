import { supabase } from "../config/config";

export const addArticle = async (data) => {
  const { error, status } = await supabase
    .from("articles")
    .insert(data)
  if (error) {
    throw new Error(error);
  }
  return status
}