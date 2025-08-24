"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  CreditCard,
  Users,
  TrendingUp,
  Wallet,
  Settings,
  HelpCircle,
  Shield,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: CreditCard, label: "Transactions", href: "/transactions" },
  { icon: Users, label: "Accounts", href: "/accounts" },
  { icon: TrendingUp, label: "Investments", href: "/investments" },
  { icon: CreditCard, label: "Credit Cards", href: "/credit-cards" },
  { icon: Wallet, label: "Loans", href: "/loans" },
  { icon: Shield, label: "Services", href: "/services" },
  { icon: HelpCircle, label: "My Privileges", href: "/privileges" },
  { icon: Settings, label: "Setting", href: "/settings" },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex h-screen flex-col bg-transparent border-r border-sidebar-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-4 mb-6">
        {!isCollapsed && (
          <img
            src="/logo.png"
            alt="Banking professional at desk"
            className="w-[138px] h-[32px] object-contain"
          />
        )}
        {isCollapsed && <CreditCard className="h-4 w-4 text-primary" />}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className={cn(
            " p-0 text-sidebar-foreground hover:bg-sidebar-accent",
            isCollapsed && "mx-auto mt-2"
          )}
        >
          {isCollapsed ? (
            <Menu className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        {sidebarItems?.filter(Boolean).map((item) => {
          if (!item || !item.label || !item.href || !item.icon) {
            console.warn(
              "[v0] Sidebar item missing required properties:",
              item
            );
            return null;
          }

          const isActive = pathname === item.href;
          const IconComponent = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full h-12 text-left pb-2 shadow-none font-normal transition-all duration-200",
                  isCollapsed
                    ? "justify-center px-0"
                    : "justify-start gap-3 px-3",
                  isActive
                    ? "bg-transparent text-[#2D60FF]"
                    : "text-[#B1B1B1] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <IconComponent className="!h-6 !w-6" />
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
