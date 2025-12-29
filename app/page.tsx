import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();
  return <div></div>;
};

export default Page;
