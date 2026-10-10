/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-location-assign-relative-destination */

'use client'
import Image from 'next/image';
import logo from '@/assets/logo-icon.png';
import Link from 'next/link';
import { authClient } from '../lib/auth-client';
import { FaUser } from 'react-icons/fa';
import { IoArrowUndo } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
const { data: session,isPending } = authClient.useSession()
 const user = session?.user;
  const handleSignout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  if (isPending) {
    return null;
  }
  return (
    <div className="">
      {/* nav */}
      <div className="bg-white">
        <div className="p-3 max-w-7xl mx-auto flex justify-between pt-5">
          {/* left side */}
          <div className="flex gap-2">
            <div>
              <Image
                src={logo}
                alt="logo"
                height={30}
                width={30}
                className="bg-green-700 p-5 rounded-2xl"
              />
            </div>
            <div>
              <Link href="/">
                <h2 className="font-bold text-2xl">বাজার দর</h2>
                  <p className="text-[12px]">
                {new Intl.DateTimeFormat("bn-BD", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "Asia/Dhaka",
                }).format(new Date())}
              </p>
                            </Link>
            </div>
          </div>

          {/* right side */}
          {user ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                {/* btn */}
                <div  tabIndex={0}
                     role="button" className="flex gap-2 items-center cursor-pointer">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                      <img
                        alt="profile"
                        src={user.image || "/default-avatar.png"}
                      />
                    </div>
                  </div>
                  <h2>{user.name}</h2>
                  <IoMdArrowDropdown />
                </div>
                {/* dropdown */}
                  <ul
                    tabIndex={0}
                    role='button'
                    className="dropdown-content menu bg-base-100 rounded-xl z-50 mt-3 w-64 p-3 shadow-lg border border-gray-200"
                  >
                    {/* info */}
                    <li>
                      <span className="font-semibold text-gray-800">{user.name}</span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                    </li>
                        <div className="divider my-0"></div>
                      <li>
                        <Link href='/profile'>
                             <FaUser /> আমার প্রোফাইল
                        </Link>
                               <button
                onClick={handleSignout}
                className="flex gap-1 items-center text-red-600 p-2 px-4 rounded-xl text-[13px]"
              >
               <IoArrowUndo /> সাইন আউট
              </button>
                      </li>
                  </ul>
              </div>

       
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/sign-in">
                <button className="text-[13px]">সাইন ইন</button>
              </Link>
              <Link href="/sign-up">
                <button className="bg p-1 px-3 lg:p-2 shadow-2xl shadow-green-200 lg:px-5 text-white rounded-2xl text-[13px]">
                  সাইন আপ
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* category */}
    </div>
  );
};

export default Navbar;