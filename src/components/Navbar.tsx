import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                src={"/logo.svg"}
                width={25}
                height={25}
                priority
                alt="logo"
              />
              <span className={`font-bold text-xl ${syne.className} `}>
                Tarno
              </span>
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
