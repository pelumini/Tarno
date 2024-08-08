import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Syne } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentuser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

const syne = Syne({ subsets: ["latin"] });

const Navbar = async () => {
  const currentUser = await getCurrentuser();

  return (
    <div
      className="
  sticky
  top-0
  w-full
  bg-slate-200
  z-30
  shadow-sm
  "
    >
      <div className="py-4 border-b-[1px]">
        <div className="container">
          <div
            className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link href="/" className={`${syne.className} font-bold text-2xl`}>
              Tarno
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
