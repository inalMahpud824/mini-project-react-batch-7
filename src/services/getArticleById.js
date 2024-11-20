import { supabase } from "../config/config";

export const getArticleById = async (id) => {
  const { data, error } = await supabase.from("articles").select().eq("id", id);
  if(error){
    throw new Error(error.message);
  }
  return data
}