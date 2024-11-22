import { openai } from "../config/config";

export const getSummaryWithAi = async (content) => {
  const completion = await openai.chat.completions.create({
    model: "meta-llama/llama-3.2-3b-instruct:free",
    // model: "qwen/qwen-2-7b-instruct:free",
    messages: [
      {
        role: "user",
        content: `give me summary and the same language as in the article and this is the article:  ${content} `,
      },
    ],
  });
  const result = completion.choices[0].message.content;
  return result;
};
