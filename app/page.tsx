import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();
  const data = await caller.getUsers();
  return <div>{JSON.stringify(data, null)}</div>;
};

export default Page;
