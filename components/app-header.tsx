import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

const AppHeader = () => {
  return (
    <header className="flex h-14 shrink-0 items-center border-b px-4 gap-2 bg-background">
      <SidebarTrigger />
    </header>
  );
};

export default AppHeader;
