import { supabase } from "../config/config";

export const getDataArticles = async () => {
  const { data, error } = await supabase.from("articles").select();
  if (error) {
    throw new Error(error);
  }
  if (data) {
    return data;
  }
};
