"use client";

import React from "react";
import Image from "next/image";

import {
  HomeIcon,
  Squares2X2Icon,
  HeartIcon,
  FolderMinusIcon,
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import logo from "@/content/images/logo.svg";
import reader from "@/content/images/reading-man.svg";

const links = [
  { name: "Home", href: "/dashboard/home", icon: HomeIcon },
  { name: "Categories", href: "/dashboard/categories", icon: Squares2X2Icon },
  { name: "Favorite", href: "/dashboard/favorite", icon: HeartIcon },
  { name: "Your Library", href: "/dashboard/library", icon: FolderMinusIcon },
  { name: "Setting", href: "/dashboard/setting", icon: Cog6ToothIcon },
  {
    name: "Log out",
    href: "/dashboard/logout",
    icon: ArrowRightStartOnRectangleIcon,
  },
];

export default function LeftSideBar() {
  const pathname = usePathname();
  return (
    <div className="w-[260px] p-4 bg-white peer:transition ease-out delay-150 duration-200">
      <div className="">
        <Image
          src={logo}
          alt="CookBook"
          sizes="(min-width: 100px) 32rem, 20rem"
          className="ml-[64px] mt-[20px]"
        />
      </div>
      <div>
        <div className="ml-3 mr-2 mt-32">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-md text-[#ABB5BA] font-medium hover:text-white flex justify-start items-center gap-8 pl-4 hover:bg-[#EB763C] pt-4 pb-4 mt-4 rounded-full cursor-pointer",
                  {
                    "bg-[#EB763C] text-slate-50": pathname === link.href,
                  }
                )}
              >
                <LinkIcon className="w-7 rounded-full" />
                <p className="hidden md:block ">{link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <Image
          src={reader}
          alt="BookReader"
          sizes="(min-width: 100px) 32rem, 20rem"
          className="pt-36 ml-12 pb-7"
        />
      </div>
    </div>
  );
}
