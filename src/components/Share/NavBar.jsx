"use client";
import React from "react";
import NavIcon from "@/assets/10433045.png";
import user1 from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
const NavBar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const links = (
    <>
      <li className="font-normal text-[20px]">
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li className="font-normal text-[20px]">
        <NavLink href={"/all-books"}>All Books</NavLink>
      </li>
      <li className="font-normal text-[20px]">
        <NavLink href={"/my-profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 max-w-300 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <p className="font-bold text-2xl">
            <Link href={"/"}>Digital Library</Link>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {user ? (
          <div className="navbar-end flex gap-4">
            <h1>
              Hello, <span className="font-bold"> {user.name}</span>
            </h1>
            <Image
              src={user.image || user1}
              width={45}
              height={45}
              alt=""
              className="rounded-full"
            />
            <button
              onClick={async () => await authClient.signOut()}
              className="btn"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="navbar-end flex  items-center gap-4">
            <Image
              src={user1}
              alt="user1"
              width={41}
              height={41}
              className="rounded-full"
            />
            <button className="btn w-35 bg-[#403F3F] text-white">
              <Link href={"/login"}>Login</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
