"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const pageNames: Record<string, string> = {
  "/": "Overview",
  "/accounts": "Accounts",
  "/transactions": "Transactions",
  "/investments": "Investments",
  "/credit-cards": "Credit Cards",
  "/loans": "Loans",
  "/services": "Services",
  "/privileges": "My Privileges",
  "/settings": "Setting",
};

export function Header() {
  const pathname = usePathname();
  const pageName = pageNames[pathname] || "Dashboard";

  return (
    <header className="flex  !py-5 items-center justify-between border-b border-border bg-background px-6">
      {/* Page Title */}
      <div>
        <h1 className="text-[28px] font-[600] text-[#343C6A]">{pageName}</h1>
      </div>

      {/* Search and Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative bg-[#F5F7FA] rounded-[40px] w-[255px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for something"
            className="w-full h-[50px] pl-10 !border-none"
          />
        </div>

        {/* Settings */}
        <Button
          variant="ghost"
          size="icon"
          className="bg-[#F5F7FA] w-[50px] h-[50px] rounded-full items-center justify-center"
        >
          <Settings className="!h-6 !w-6 text-primary" />
        </Button>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative bg-[#F5F7FA] w-[50px] h-[50px] rounded-full items-center justify-center"
        >
          <Bell className="!h-6 !w-6  text-[#FE5C73]" />
          <span className="absolute top-2 right-[10px] h-2 w-2 rounded-full bg-transparent border border-[#FE5C73] border-solid"></span>
        </Button>

        {/* Profile */}
        <div className="w-[60px]">
          <Avatar className="!w-full !h-[60px]">
            <AvatarImage
              src="/professional-woman-diverse.png"
              alt="Profile"
              className="!w-full !h-[60px] object-cover"
            />
            <AvatarFallback className="text-lg">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
