
/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoArrowUndo } from "react-icons/io5";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  if (isPending) return null;

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-4 sm:px-5 lg:px-6">
        {/* Left: Logo and Brand */}
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src={logo}
            alt="বাজার দর logo"
            width={42}
            height={42}
            className="shrink-0 rounded-xl bg-green-700 p-2 sm:h-12 sm:w-12"
          />

          <div className="min-w-0">
            <h2 className="truncate text-lg font-bold text-gray-900 sm:text-2xl">
              বাজার দর
            </h2>

            <p className="text-[10px] text-gray-500 sm:text-xs">
              {new Intl.DateTimeFormat("bn-BD", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "Asia/Dhaka",
              }).format(new Date())}
            </p>
          </div>
        </Link>

        {/* Right: Auth */}
        {user ? (
          <div className="dropdown dropdown-end shrink-0">
            <div
              tabIndex={0}
              role="button"
              className="flex max-w-[180px] cursor-pointer items-center gap-2 rounded-xl p-1.5 transition hover:bg-gray-50 sm:max-w-xs sm:gap-3 sm:p-2"
            >
              <div className="avatar">
                <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-green-700 ring-offset-2 sm:h-11 sm:w-11">
                  <img
                    alt="Profile"
                    src={user.image || "/default-avatar.png"}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <span className="max-w-20 truncate text-xs font-semibold sm:max-w-36 sm:text-sm">
                {user.name}
              </span>

              <IoMdArrowDropdown className="shrink-0" />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu z-50 mt-3 w-60 max-w-[calc(100vw-24px)] rounded-xl border border-gray-200 bg-white p-3 shadow-lg sm:w-64"
            >
              <li className="pointer-events-none">
                <span className="truncate font-semibold text-gray-800">
                  {user.name}
                </span>
                <span className="break-all text-xs text-gray-500">
                  {user.email}
                </span>
              </li>

              <div className="divider my-1" />

              <li>
                <Link href="/profile" className="flex items-center gap-2">
                  <FaUser />
                  আমার প্রোফাইল
                </Link>
              </li>

              <li>
                <button
                  onClick={handleSignout}
                  className="flex items-center gap-2 text-red-600"
                >
                  <IoArrowUndo />
                  সাইন আউট
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <Link
              href="/sign-in"
              className="whitespace-nowrap rounded-lg px-2 py-2 text-xs font-medium text-gray-700 hover:text-green-700 sm:px-3 sm:text-sm"
            >
              সাইন ইন
            </Link>

            <Link
              href="/sign-up"
              className="whitespace-nowrap rounded-xl bg-green-700 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-800 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              সাইন আপ
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
