"use client";


import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";;

import { cn } from "@/lib/utils";
import { NavigationGroup, NavigationItem } from "@/constants/sidebar";
import BadgeStatus from "./badge-status";

export interface DocsSidebarNavProps {
  items: NavigationGroup[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
    const pathname = usePathname();
  
    return items.length ? (
      <div className="flex flex-col gap-6">
        {items.map((group, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h4 className="rounded-md px-2 py-1 text-sm font-semibold">
              {group.name}
            </h4>
            {group.children?.length > 0 && (
              <DocsSidebarNavItems items={group.children} pathname={pathname} />
            )}
          </div>
        ))}
      </div>
    ) : null;
  }
  

interface DocsSidebarNavItemsProps {
  items: NavigationItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({ items, pathname }: DocsSidebarNavItemsProps) {
    return items?.length ? (
      <div className="relative grid grid-flow-row auto-rows-max gap-0.5 text-sm">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group relative flex h-8 w-full items-center justify-between rounded-lg px-2 font-normal text-foreground",
              "transition-transform duration-200 hover:translate-x-px hover:text-accent-foreground",
              pathname === item.href &&
                "bg-accent font-medium text-accent-foreground",
            )}
          >
            <span className="relative shrink-0">{item.name}</span>
            <div className="flex gap-1 items-center">
              {item.isNew && (
                <BadgeStatus variant="new" />
              )}
              {item.isUpdated && (
                <BadgeStatus variant="updated" />
              )}
              {item.isComingSoon && (
                <BadgeStatus variant="comingsoon" />
              )}
              {item.isPaid && (
                <BadgeStatus variant="paid" />
              )}
              {/* You can still add ExternalLinkIcon if needed */}
            </div>
          </Link>
        ))}
      </div>
    ) : null;
  }
