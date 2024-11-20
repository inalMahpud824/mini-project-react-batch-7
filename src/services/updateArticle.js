import { supabase } from "../config/config";

export const updateArticleById = async (id, payload) => {
  const { data, error } = await supabase
    .from("articles")
    .update({
      title: payload.title,
      description: payload.description,
      image: payload.image,
      content: payload.content,
      update_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
