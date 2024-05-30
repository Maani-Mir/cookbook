import React from "react";
import authors from "@/content/images/authors.svg";
import bookround from "@/content/images/book-round.svg";
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
import nexteat from "@/content/images/next-eat.svg";
import nextfaultstars from "@/content/images/next-fault-stars.svg";
import nextleft from "@/content/images/next-left.svg";
import nextright from "@/content/images/next-right.svg";
import nextthief from "@/content/images/next-thief.svg";
import notif from "@/content/images/notif.svg";
import openbook from "@/content/images/open-book.svg";
import palacio from "@/content/images/palacio.svg";
import pause from "@/content/images/pause.svg";
import pauseround from "@/content/images/pause-round.svg";
import profile from "@/content/images/profile.svg";
import readbooks from "@/content/images/read-books.svg";
import readingbooks from "@/content/images/reading-books.svg";
import rowling from "@/content/images/rowling.svg";
import sapiens from "@/content/images/sapiens.svg";
import sherlock from "@/content/images/sherlock.svg";
import sidegatsby from "@/content/images/sidegatsby.svg";
import sidewonder from "@/content/images/sidewonder.svg";
import sideeat from "@/content/images/sideeat.svg";
import sidewavy from "@/content/images/sidewavy.svg";
import songwavy from "@/content/images/songwavy.svg";
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
    <div className="grid grid-cols-3 ">
      <div className="col-span-2 ml-8 h-screen">
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
                  class="block w-[550px] p-3 pr-[20rem]  pl-8 text-lg font-semibold rounded-full bg-[#ECF0F3] text-[#B2BAC8] dark:text-slate-900 "
                  placeholder="Search your book..."
                  required
                />
                <svg
                  class="absolute -end-7 top-1.5 bottom-[12px] w-10 h-10 pl-1 pt-2 pb-1 text-[#27A857] bg-white rounded-full"
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
          <div className="text-[#212121] font-bold text-xl mt-3 ml-96 justify-items-end">
            EN
          </div>
          <div className="ml-3 rounded-full bg-[#D3F8D8] p-2 mw-11 mh-11">
            <Image src={britainonly} />
          </div>
        </div>
        <div className=" flex ml-10 mt-8 pt-9 rounded-3xl bg-[#1AA928]">
          <Image className="absolute object-contain w-[54%]" src={whitewavy} />
          <div className="flex-1 flex-grow relative">
            <div className="relative ml-10">
              <h2 className="text-3xl tracking-wider font-bold text-white font-serif">
                TRENDING BOOKS
              </h2>
              <h2 className="text-3xl tracking-wider font-bold text-white mt-1 font-serif">
                THIS MONTH
              </h2>
              <div className={nunito.className}>
                <p className="mt-6 text-lg font-normal leading-8 text-[#DCE0E5]">
                  Listen to trending books in this months
                </p>
              </div>
              <div className="mt-11 mb-[60px] justify-start">
                <div className={nunito.className}>
                  <Link
                    href="#"
                    className=" text-sm rounded-full bg-[#EB763C] pt-4.5 px-7 py-3 font-extrabold text-center text-[#FFFFFF] "
                  >
                    VIEW NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex-auto relative ">
              <Image
                className="absolute left-[151px] mt-[45px] w-28"
                src={dancingman}
              />
            </div>
            <div className="flex-auto relative ">
              <Image
                className="relative right-[68px] w-[291px]"
                src={flyingbooks}
              />
            </div>
            <div className=" ">
              <Image
                className="relative mt-6 right-[553px] w-[118px]"
                src={hearts}
              />
            </div>
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
              <h3 className="ml-10 text-[#434C56] mt-2 font-bold text-base">
                Never eat alone
              </h3>
              <h4 className="mt-[2px] text-sm ml-14 text-[#8D96A8] font-normal">
                Keith Ferrazzi
              </h4>
            </div>
            <div>
              <div className="mt-4 ml-14">
                <Image src={greatgatsby} />
              </div>
              <h3 className="ml-14 text-[#434C56] mt-2 font-bold text-base">
                Great Gasby
              </h3>
              <h4 className="mt-[2px] text-sm ml-12 text-[#8D96A8] font-normal">
                F.Scott Fitzgerald
              </h4>
            </div>
            <div>
              <div className="mt-4 ml-14">
                <Image src={sapiens} />
              </div>
              <h3 className="ml-[73px] text-[#434C56] mt-2 font-bold text-base">
                Sapiens
              </h3>
              <h4 className="mt-[2px] text-sm ml-12 text-[#8D96A8] font-normal">
                Yuval Noah Harari
              </h4>
            </div>
            <div>
              <div className="mt-4 ml-14">
                <Image src={thebookthief} />
              </div>
              <h3 className="ml-10 text-[#434C56] mt-2 font-bold text-base">
                The Book Thief
              </h3>
              <h4 className="mt-[2px] text-sm ml-14 text-[#8D96A8] font-normal">
                Markus Zukas
              </h4>
            </div>
            <div>
              <div className="mt-4 ml-14">
                <Image src={sherlock} />
              </div>
              <h3 className="ml-10 text-[#434C56] mt-2 font-bold text-base">
                Sherlock Holmes
              </h3>
              <h4 className="mt-[2px] text-sm ml-[59px] text-[#8D96A8] font-normal">
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
            <div className="grid grid-cols-6">
              <div>
                <div className="mt-5 ml-14 ">
                  <Image
                    src={markus}
                    className="rounded-full ring-offset-2 ring-2 ring-[#27A857]"
                  />
                </div>
                <h3 className="ml-[42px] text-[#434D56] mt-3 font-semibold text-base">
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
                <h3 className="ml-[47px] text-[#434D56] mt-3 font-semibold text-base">
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
                <h3 className="ml-[50px] text-[#434D56] mt-3 font-semibold text-base">
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
                <h3 className="ml-[30px] text-[#434D56] mt-3 font-semibold text-base">
                  Yuval Noah Harari
                </h3>
              </div>
              <div>
                <div className="mt-5 ml-16">
                  <Image
                    src={rowling}
                    className="rounded-full ring-offset-2 ring-2 ring-[#27A857]"
                  />
                </div>
                <h3 className="ml-[56px] text-[#434D56] mt-3 font-semibold text-base">
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
                <h3 className="ml-[53px] text-[#434D56] mt-3 font-semibold text-base">
                  R.J Palacio
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-1">
            <div className="flex mt-9 ml-[40px] rounded-2xl shadow-xl bg-white">
              <div className="m-2  p-[13px] rounded-xl bg-[#E4FBE7]">
                <Image src={readbooks} className=" " />
              </div>

              <h2 className="mt-4 ml-5 font-bold text-2xl text-[#303030]">
                20
              </h2>
              <h2 className="mt-12 -ml-7 font-normal text-[17px] text-[#8A97A4]">
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
              <h2 className="mt-12 -ml-7 font-normal text-[17px] text-[#8A97A4]">
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
              <h2 className="mt-12 -ml-7 font-normal text-[17px] text-[#8A97A4]">
                Reading books
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-36 rounded-[40px] bg-[#E4FBE7] ">
        <div className={nunito.className}>
          <div className="flex mt-9 ml-8">
            <div className="rounded-full bg-white p-3 pt-2">
              <Image src={notif} />
            </div>
            <div className="flex rounded-full bg-white ml-5 pl-[6px]">
              <Image src={profile} />
              <h3 className="text-[#212121] ml-[17px] mt-3 font-semibold text-[17px]">
                Thanh Pham
              </h3>
              <Image src={dropdown} className="ml-[49px] mr-[17px]" />
            </div>
          </div>
          <div className="rounded-2xl bg-white ml-[33px] mt-9 mr-[39px] shadow-lg">
            <div className="flex pt-6">
              <Image src={sidewavy} className="absolute mt-9" />
              <Image src={sidegatsby} className="ml-5 mt-1.5 z-10" />
              <Image
                src={sidewonder}
                className="z-10 mt-2 ml-[29px] rounded-xl ring-offset-[3px] ring-2 ring-[#27A857]"
              />
              <Image src={sideeat} className="z-10 ml-[29px] mt-1.5" />
            </div>
            <h2 className="text-[#333333] mt-[26px] absolute ml-[122px] text-xl font-bold">
              Wonder
            </h2>
            <h3 className="text-[#70808F] absolute mt-[58px] ml-[125px] text-sm font-normal">
              R.J. Palacio
            </h3>
            <div className="ml-[30px]">
              <Image src={songwavy} className="mt-2.5" />
            </div>
            <div className="flex">
              <div className="rounded-full mt-2 p-3 bg-[#D6F5E1] ml-[64px] mb-8">
                <Image src={nextleft} className=" " />
              </div>
              <div className=" mt-3 ml-[34px]">
                <Image src={pauseround} className="absolute -mt-[9px] -ml-1" />
                <Image src={pause} className="mt-[1px] ml-1.5" />
              </div>
              <div className="rounded-full mt-2 p-3 bg-[#D6F5E1] ml-[40px] mb-8">
                <Image src={nextright} />
              </div>
            </div>
          </div>
          <div className="mt-9 ml-[31px]">
            <h2 className="text-[#333333] text-[22px] font-bold">Next Books</h2>
          </div>
          <div className="flex rounded-2xl bg-white ml-[31px] mt-2.5 mr-[39px] p-1.5 shadow-lg">
            <Image src={nextfaultstars} className="" />
            <h2 className="mt-2.5 ml-4 font-bold text-base text-[#333333] ">
              Fault In Our Stars
            </h2>
            <h2 className="mt-[39px] -ml-[131px] font-normal text-sm text-[#8A97A4]">
              John Green
            </h2>
            <h2 className="mt-[25px] ml-[106px] font-normal text-sm text-[#8998A9]">
              02:20:03
            </h2>
          </div>
          <div className="flex rounded-2xl bg-white ml-[31px] mt-5 mr-[39px] p-1.5 shadow-lg">
            <Image src={nexteat} className="" />
            <h2 className="mt-2.5 ml-4 font-bold text-base text-[#333333]">
              Never Eat Alone
            </h2>
            <h2 className="mt-[39px] -ml-[121px] font-normal text-sm text-[#8A97A4]">
              Keith Ferrazzi
            </h2>
            <h2 className="mt-[25px] ml-[90px] font-normal text-sm text-[#8998A9]">
              02:20:03
            </h2>
          </div>
          <div className="flex rounded-2xl bg-white ml-[31px] mt-5 mr-[39px] p-1.5 shadow-lg">
            <Image src={nextthief} className="" />
            <h2 className="mt-2.5 ml-4 font-bold text-base text-[#333333]">
              The Book Thief
            </h2>
            <h2 className="mt-[39px] -ml-[115px] font-normal text-sm text-[#8A97A4]">
              Markus Zukas
            </h2>
            <h2 className="mt-[25px] ml-[89px] font-normal text-sm text-[#8998A9]">
              02:20:03
            </h2>
          </div>
          <div className="mt-6 ml-[31px]">
            <h2 className="text-[#333333] text-[22px] font-bold letter">
              Daily Work
            </h2>
          </div>
          <div className="rounded-2xl bg-white ml-[31px] mt-2.5 mr-[39px] p-1.5 pb-[21px] mb-10 shadow-lg">
            <h2 className="mt-2.5 ml-[22px] font-semibold text-xl text-[#27A857] ">
              Books this week
            </h2>
            <div className="ml-7 mt-2 mb-2">
              <Image src={openbook} className="" />
            </div>
            <div className="-mt-[88px] ml-52">
              <h2 className="text-[#27A857] font-bold text-xl absolute pt-[22px] px-5 pb-5">
                3/5
              </h2>
              <Image src={bookround} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
