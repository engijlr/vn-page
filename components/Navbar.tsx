"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="h-16  hidden lg:flex justify-between items-center px-6 lg:px-12">
        <Link href="/" className="text-secondary">
          {/*<Image src="/happy-face.svg" alt="logo" width={32} height={32} />*/}
          Valentina Nutrition
        </Link>

        <ul className="flex gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="font-medium capitalize text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-4 font-medium">
          <Button type="button" title="Log In" />
          <Button type="button" title="Sign Up" />
        </div>
      </nav>

      <nav className="h-16 flex lg:hidden justify-between items-center px-6">
        <Link href="/" className="text-secondary">
          {/*<Image src="/happy-face.svg" alt="logo" width={32} height={32} />*/}
          Valentina Nutrition
        </Link>
        {mobileMenuOpen ? (
          <div>
            <RiCloseCircleLine
              className="w-7 h-7 cursor-pointer"
              onClick={handleMobileMenuOpen}
            />
            <div className="absolute top-52 right-1/3">
              <ul className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="font-medium capitalize text-secondary text-2xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
              <div className="flex items-center gap-4 font-medium mt-10">
                <Button type="button" title="Log In" />
                <Button type="button" title="Sign Up" />
              </div>
            </div>
          </div>
        ) : (
          <HiBars3BottomRight
            className="w-7 h-7 cursor-pointer"
            onClick={handleMobileMenuOpen}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;
