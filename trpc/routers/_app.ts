import { inngest } from "@/inngest/client";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const appRouter = createTRPCRouter({
  testGoogleAi: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
      data: {},
    });

    return { success: true, message: "AI job queued" };
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: { email: "minh@gmail.com" },
    });

    return { success: true, message: "Job queued" };
  }),
});

export type AppRouter = typeof appRouter;
