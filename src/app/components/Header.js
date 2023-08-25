"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"} className="text-xl font-semibold">
          My Blog
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/blog"}>
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
              Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
