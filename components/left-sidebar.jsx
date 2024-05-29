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
import { Nunito } from "next/font/google";

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

const nunito = Nunito({
  subsets: ["latin"],
});

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
      <div className={nunito.className}>
        <div>
          <div className="ml-5 mr-3 mt-[159px]">
            {links.map((link) => {
              const LinkIcon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "text-sm text-[#ABB5BA] font-semibold hover:text-white flex justify-start items-center gap-6 pl-3 hover:bg-[#EB763C] pt-3 pb-3 mt-3 rounded-full cursor-pointer",
                    {
                      "bg-[#EB763C] text-slate-50 rounded-full": isActive,
                    }
                  )}
                >
                  <LinkIcon
                    className={clsx(
                      "w-[33px] rounded-full bg-white p-[3px] hover:bg-[#EB763C]",
                      {
                        "fill-current text-[#EB763C] ": isActive,
                        "hover:fill-current hover:text-[#EB763C]": !isActive,
                      }
                    )}
                  />
                  <p className="hidden md:block ">{link.name}</p>
                </Link>
              );
            })}
          </div>
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
