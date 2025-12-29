"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { useTRPC } from "@/trpc/client";
import { caller } from "@/trpc/server";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const testAi = useMutation(trpc.testGoogleAi.mutationOptions());

  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Workflow created");
      },
    })
  );
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      <Button onClick={() => create.mutate()}>Create Workflow</Button>
      <Button onClick={() => testAi.mutate()}>Test Google AI</Button>
    </div>
  );
};

export default Page;
