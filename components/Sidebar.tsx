"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

const routes = [
  {
    href: "/",
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

export function DesktopSidebar() {
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

export function MobileSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const activeRoute =
    routes.find((route) => {
      return route.href.length > 0 && pathname.includes(route.href);
    }) || routes[0];

  return (
    <div className="block md:hidden border-separate bg-background">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-4 w-4" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[400px] sm:w-[540px] space-y-4"
          >
            <Logo />
            <Separator />

            <div className="flex flex-col gap-1">
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
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <route.icon />
                  {route.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
