"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

const routes = [
  {
    href: "",
    name: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    name: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    name: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    name: "Billing",
    icon: CoinsIcon,
  },
];

function DesktopSidebar() {
  const pathname = usePathname();

  const activeRoute =
    routes.find((route) => {
      return route.href.length > 0 && pathname.includes(route.href);
    }) || routes[0];

  return (
    <div className="hidden relative md:block w-[280px] h-screen overflow-hidden bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-border">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-border p-4">
        <Logo />
      </div>

      <div className="flex items-center justify-center p-4">TODO Credit</div>

      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarItemActive"
                  : "sidebarItem",
            })}
          >
            <route.icon />
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DesktopSidebar;
