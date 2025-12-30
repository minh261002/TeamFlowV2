import { requireAuth } from "@/lib/auth-utils";
import React from "react";

interface Props {
  params: Promise<{
    workflowId: string;
  }>;
}

const Page = async ({ params }: Props) => {
  await requireAuth();

  const { workflowId } = await params;
  return <div>w: {workflowId}</div>;
};

export default Page;
