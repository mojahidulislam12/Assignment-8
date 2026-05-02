"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  console.log("Current PathName", pathName);

  const isActive = href === pathName;

  return (
    <Link href={href} className={`${isActive ? "bg-gray-500 text-white" : ""}`}>
      {children}
    </Link>
  );
};

export default NavLink;
