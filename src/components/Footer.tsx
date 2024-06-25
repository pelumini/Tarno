import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const FooterList = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href={"#"}>Phones</Link>
            <Link href={"#"}>Laptops</Link>
            <Link href={"#"}>Desktops</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>TVs</Link>
            <Link href={"#"}>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>Returns & Exchanges</Link>
            <Link href={"#"}>FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              At our electronics store, we dedicated to providing the latest and
              greatest devices and accessories to our cutomers. With a wide
              selection of phones, TVs, laptops, watches, and accessories.
            </p>
            <p>&copy; {new Date().getFullYear()} Tarno. All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href={"#"}>
                <FacebookIcon />
              </Link>
              <Link href={"#"}>
                <TwitterIcon />
              </Link>
              <Link href={"#"}>
                <InstagramIcon />
              </Link>
              <Link href={"#"}>
                <YoutubeIcon />
              </Link>
            </div>
          </FooterList>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
