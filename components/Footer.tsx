import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-center lg:text-left">
      <div className="bg-black/5 p-4 text-center text-surface">
        <p>
          &copy; 2023 Copyright:
          <Link href="#" className="text-surface">
            {" "}
            TW Elements
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
