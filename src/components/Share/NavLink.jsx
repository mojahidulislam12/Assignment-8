"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  console.log("Current PathName", pathName);

  const isActive = href === pathName;

  return (
    <Link href={href} className={`${isActive ? "bg-base-500 text-black" : ""}`}>
      {children}
    </Link>
  );
};

export default NavLink;
