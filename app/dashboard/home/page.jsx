import React from "react";
import authors from "@/content/images/authors.svg";
import britainonly from "@/content/images/britain-only.svg";
import dan from "@/content/images/dan.svg";
import dancingman from "@/content/images/dancing-man.svg";
import dropdown from "@/content/images/dropdown.svg";
import flyingbooks from "@/content/images/flying-books.svg";
import greatgatsby from "@/content/images/great-gatsby.svg";
import hearts from "@/content/images/hearts.svg";
import john from "@/content/images/john.svg";
import markus from "@/content/images/markus.svg";
import nevereatalone from "@/content/images/never-eat-alone.svg";
import notif from "@/content/images/notif.svg";
import palacio from "@/content/images/palacio.svg";
import profile from "@/content/images/profile.svg";
import readbooks from "@/content/images/read-books.svg";
import readingbooks from "@/content/images/reading-books.svg";
import rowling from "@/content/images/rowling.svg";
import sapiens from "@/content/images/sapiens.svg";
import sherlock from "@/content/images/sherlock.svg";
import thebookthief from "@/content/images/the-book-thief.svg";
import whitewavy from "@/content/images/white-wavy.svg";
import yuval from "@/content/images/yuval.svg";

import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div className="mt-8 ml-10 flex flex-row">
          <form class="max-w-lg">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-[#B2BAC8] sr-only"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <div className={nunito.className}>
                <input
                  class="block w-full p-3 pr-[19rem]  ps-10 text-lg rounded-full bg-[#ECF0F3] text-[#B2BAC8] dark:text-slate-900 "
                  placeholder="Search your book..."
                  required
                />
                <svg
                  class="absolute end-2.5 top-1.5 bottom-[12px] w-10 h-10 pl-1 pt-2 pb-1 text-[#27A857] bg-white rounded-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 9a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>
          <div className="text-[#212121] font-semibold text-xl mt-2.5 ml-48">
            EN
          </div>
          <div className="ml-3 rounded-full bg-[#D3F8D8] p-2 mw-11 mh-11">
            <Image src={britainonly} />
          </div>
        </div>
        <div className="flex ml-10 mt-8 pl-[53px] pt-9 rounded-3xl bg-[#1AA928]">
          <div className="relative isolate flex-auto text-left mx-0">
            <h2 className="text-3xl tracking-wider font-semibold text-white font-serif">
              TRENDING BOOKS
            </h2>
            <h2 className="text-3xl tracking-wider font-semibold text-white mt-1 font-serif">
              THIS MONTH
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#DCE0E5]">
              Listen to trending books in this months
            </p>
            <div className="mt-11 mb-[60px] justify-start">
              <Link
                href="#"
                className=" text-sm rounded-full bg-[#EB763C] pt-4.5 px-9 py-3 font-semibold text-center text-[#FFFFFF] "
              >
                VIEW NOW
              </Link>
            </div>
          </div>
          <div className=" ">
            <Image
              className="absolute right-[417px] w-[804px]"
              src={whitewavy}
            />
          </div>
          <div className="flex-auto relative ">
            <Image className="relative left-36 mt-12 w-28" src={dancingman} />
          </div>
          <div className="flex-auto relative ">
            <Image className="relative right-16 w-[272px]" src={flyingbooks} />
          </div>
          <div className=" ">
            <Image
              className="absolute mt-8 right-[557px] w-[104px]"
              src={hearts}
            />
          </div>
        </div>
        <div className={nunito.className}>
          <div className="flex flex-row mt-8 ml-10">
            <h2 className="font-bold text-2xl text-[#303030]">Popular</h2>
            <Link
              href="#"
              className="mt-[3px] ml-10 font-semibold text-lg text-[#1AA928]"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-5 ">
            <div>
              <div className="mt-4 ml-14">
                <Image src={nevereatalone} />
              </div>
              <h3 className="ml-10 text-[#434C56] mt-2 font-bold">
                Never eat alone
              </h3>
              <h4 className="mt-[2px] text-sm ml-14 text-[#8D96A8]">
                Keith Ferrazzi
              </h4>
            </div>
            <div>
              <div className="mt-4 ml-14">
                <Image src={greatgatsby} />
              </div>
              <h3 className="ml-14 text-[#434C56] mt-2 font-bold">
                Great Gasby
              </h3>
              <h4 className="mt-[2px] text-sm ml-12 text-[#8D96A8]">
                F.Scott Fitzgerald
              </h4>
            </div>
            <div>
              <div className="mt-4 ml-14">
                <Image src={sapiens} />
              </div>
              <h3 className="ml-[73px] text-[#434C56] mt-2 font-bold">
                Sapiens
              </h3>
              <h4 className="mt-[2px] text-sm ml-12 text-[#8D96A8]">
                Yuval Noah Harari
              </h4>
            </div>
            <div>
              <div className="mt-4 ml-14">
                <Image src={thebookthief} />
              </div>
              <h3 className="ml-10 text-[#434C56] mt-2 font-bold">
                The Book Thief
              </h3>
              <h4 className="mt-[2px] text-sm ml-14 text-[#8D96A8]">
                Markus Zukas
              </h4>
            </div>
            <div>
              <div className="mt-4 ml-14">
                <Image src={sherlock} />
              </div>
              <h3 className="ml-10 text-[#434C56] mt-2 font-bold">
                Sherlock Holmes
              </h3>
              <h4 className="mt-[2px] text-sm ml-[59px] text-[#8D96A8]">
                Conan Doyle
              </h4>
            </div>
          </div>
          <div className="mt-5 ml-10 border-b-[1px] border-[#E0E7EB] border-0"></div>
          <div>
            <div className="flex flex-row mt-5 ml-10">
              <h2 className="font-bold text-2xl text-[#303030]">Top Authors</h2>
              <Link
                href="#"
                className="mt-[3px] ml-10 font-semibold text-lg text-[#1AA928]"
              >
                View all
              </Link>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="mt-5 ml-14 ">
                  <Image
                    src={markus}
                    className="rounded-full ring-offset-2 ring-2 ring-[#27A857]"
                  />
                </div>
                <h3 className="ml-[42px] text-[#434D56] mt-3 font-semibold">
                  Markus Zukas
                </h3>
              </div>
              <div>
                <div className="mt-5 ml-[53px]">
                  <Image
                    src={dan}
                    className="rounded-full ring-offset-2 ring-2 ring-[#27A857]"
                  />
                </div>
                <h3 className="ml-[47px] text-[#434D56] mt-3 font-semibold">
                  Dan Brown
                </h3>
              </div>
              <div>
                <div className="mt-5 ml-14">
                  <Image
                    src={john}
                    className="rounded-full ring-offset-2 ring-2 ring-[#27A857]"
                  />
                </div>
                <h3 className="ml-[50px] text-[#434D56] mt-3 font-semibold">
                  John Green
                </h3>
              </div>
              <div>
                <div className="mt-5 ml-[61px]">
                  <Image
                    src={yuval}
                    className="rounded-full ring-offset-2 ring-2 ring-[#27A857]"
                  />
                </div>
                <h3 className="ml-[30px] text-[#434D56] mt-3 font-semibold">
                  Yuval Noah Harari
                </h3>
              </div>
              <div>
                <div className="mt-5 ml-9">
                  <Image
                    src={rowling}
                    className="rounded-full ring-offset-2 ring-2 ring-[#27A857]"
                  />
                </div>
                <h3 className="ml-[30px] text-[#434D56] mt-3 font-semibold">
                  J.K Rowling
                </h3>
              </div>
              <div>
                <div className="mt-5 ml-[56px]">
                  <Image
                    src={palacio}
                    className="rounded-full ring-offset-2 ring-2 ring-[#27A857]"
                  />
                </div>
                <h3 className="ml-[53px] text-[#434D56] mt-3 font-semibold">
                  R.J Palacio
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex mt-9 ml-[40px] rounded-2xl shadow-xl bg-white">
              <div className="m-2  p-[13px] rounded-xl bg-[#E4FBE7]">
                <Image src={readbooks} className=" " />
              </div>

              <h2 className="mt-4 ml-5 font-bold text-2xl text-[#303030]">
                20
              </h2>
              <h2 className="mt-12 -ml-7 font-normal text-md text-[#8A97A4]">
                Read books
              </h2>
            </div>
            <div className="flex mt-9 ml-[30px] rounded-2xl shadow-xl bg-white">
              <div className="m-2  p-[13px] rounded-xl bg-[#E4FBE7]">
                <Image src={authors} className=" " />
              </div>

              <h2 className="mt-4 ml-5 font-bold text-2xl text-[#303030]">
                20
              </h2>
              <h2 className="mt-12 -ml-7 font-normal text-md text-[#8A97A4]">
                Authors
              </h2>
            </div>
            <div className="flex mt-9 ml-[30px] rounded-2xl shadow-xl bg-white">
              <div className="m-2  p-[13px] rounded-xl bg-[#E4FBE7]">
                <Image src={readingbooks} className=" " />
              </div>

              <h2 className="mt-4 ml-5 font-bold text-2xl text-[#303030]">
                03
              </h2>
              <h2 className="mt-12 -ml-7 font-normal text-md text-[#8A97A4]">
                Reading books
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 rounded-[40px] bg-[#E4FBE7]">
        <div className={nunito.className}>
          <div className="flex mt-9">
            <div className="rounded-full bg-white ml-8 p-3 pt-2">
              <Image src={notif} />
            </div>
            <div className="flex rounded-full bg-white ml-6 pl-[6px]">
              <Image src={profile} />
              <h3 className="text-[#212121] ml-[17px] mt-3 font-semibold">
                Thanh Pham
              </h3>
              <Image src={dropdown} className="ml-12 mr-6" />
            </div>
          </div>
          <div>{/*TODO: from here*/}</div>
        </div>
      </div>
    </div>
  );
}
