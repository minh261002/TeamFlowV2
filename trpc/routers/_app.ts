import { inngest } from "@/inngest/client";
import {
  createTRPCRouter,
  premiumProcedure,
  protectedProcedure,
} from "../init";
import prisma from "@/lib/db";

export const appRouter = createTRPCRouter({
  testGoogleAi: premiumProcedure.mutation(async () => {
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
