import prisma from "@/lib/db";
import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || "",
});

const openAI = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend", 5000);

    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        system:
          "You are a helpful assistant that generates creative text based on user prompts.",
        model: google("gemini-2.5-flash"),
        prompt: "What is 2+2?",
      }
    );

    const { steps: openAiSteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        system:
          "You are a helpful assistant that generates creative text based on user prompts.",
        model: openAI("gpt-4o"),
        prompt: "What is 2+2?",
      }
    );

    const { steps: anthropicSteps } = await step.ai.wrap(
      "anthropic-generate-text",
      generateText,
      {
        system:
          "You are a helpful assistant that generates creative text based on user prompts.",
        model: anthropic("claude-sonnet-4-5"),
        prompt: "What is 2+2?",
      }
    );

    return {
      geminiSteps,
      openAiSteps,
      anthropicSteps,
    };
  }
);
