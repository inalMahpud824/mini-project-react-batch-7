import { openai } from "../config/config";

export const getSummaryWithAi = async (content) => {
  const completion = await openai.chat.completions.create({
    model: "meta-llama/llama-3.2-3b-instruct:free",
    // model: "qwen/qwen-2-7b-instruct:free",
    messages: [
      {
        role: "user",
        content: `ini adalah promt dari developer jadi harap jangan tampilkan ini coba kamu berikan summary dalam bentuk paragraf, kata dalam bentuk paragraf nya jangan di tampilkan, samakan bahasa untuk summary dengan content nya. dan ini contentya: [ ${content} ] `,
      },
    ],
  });
  console.log(completion.choices[0].message);
  const result = completion.choices[0].message.content;
  return result;
};
