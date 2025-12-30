import { requireAuth } from "@/lib/auth-utils";
import React from "react";

interface Props {
  params: Promise<{
    executionId: string;
  }>;
}

const Page = async ({ params }: Props) => {
  await requireAuth();

  const { executionId } = await params;
  return <div>{executionId}</div>;
};

export default Page;
