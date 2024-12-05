"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex justify-center mt-8 -mb-4">
      <div className="bg-white shadow-md rounded-full p-1">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-0">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <ul
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/") ? "text-pink-500" : "text-gray-500"
                  )}>
                  <span className="text-xl hover:text-black">Home</span>
                </ul>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" passHref>
                <ul
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/projects") ? "text-pink-500" : "text-gray-500"
                  )}>
                  <span className="text-xl hover:text-black">Projects</span>
                </ul>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://cv.drjvtlkr.com" passHref>
                <ul
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("https://cv.drjvtlkr.com")
                      ? "text-pink-500"
                      : "text-gray-500"
                  )}>
                  <span className="text-xl hover:text-black">Resume</span>
                </ul>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" passHref>
                <ul
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/about") ? "text-pink-500" : "text-gray-500"
                  )}>
                  <span className="text-xl hover:text-black">About</span>
                </ul>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
