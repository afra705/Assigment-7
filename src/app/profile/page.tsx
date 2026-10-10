/* eslint-disable @next/next/no-location-assign-relative-destination */
/* eslint-disable @next/next/no-img-element */
"use client";
import { IoArrowUndo } from "react-icons/io5";
import { authClient } from "../lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log("User image:", user?.image);
  const handleSignout = async () => {
    toast.success(`Signout successfully`)
    await authClient.signOut();
    window.location.href = "/";
  };

  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      
    };
    const {error} = await authClient.updateUser({
      ...newUserData,
    });
    if (error) {
  toast.error("Profile update failed");
  return;
}
     toast.success(`${newUserData.name} updated successfully`)
  };
  if (isPending) {
  return <p className="mt-10 text-center">লোড হচ্ছে...</p>;
}

if (!user) {
  return (
    <div className="mt-10 text-center">
      <p>প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।</p>
      <Link href="/sign-in" className="text-green-700 underline">
        সাইন ইন করুন
      </Link>
    </div>
  );
}


// 
  return (
<div className="mt-10 w-full max-w-5xl mx-auto">
  <div className="space-y-6">
    {/* Header Section */}
    <div>
      <h3 className="text-xl font-bold text-gray-800">আমার প্রোফাইল</h3>
      <p className="text-sm text-gray-500 mt-1">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
    </div>

    {/* Profile Card */}
    <div className="w-125 max-w-7xl mx-auto bg-white rounded-2xl p-4 md:p-8 flex items-center justify-between gap-4 border border-gray-100 shadow-sm">
  {/* Avatar + User Info */}
  <div className="flex items-center gap-3 md:gap-5 min-w-0">
    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gray-100 ring-1 ring-gray-200">
{user.image && (
  <img
    src={user.image}
    alt={user.name || "Profile"}
    className="w-full h-full object-cover"
  />
)}
</div>

    <div className="space-y-1 min-w-0">
      <h4 className="font-bold text-base md:text-xl text-gray-800 leading-tight truncate">
        {user.name}
      </h4>
      <span className="text-xs md:text-sm text-gray-500 block truncate">
        {user.email}
      </span>
    </div>
  </div>

  {/* Signout Button */}
<button
  onClick={handleSignout}
  className="flex shrink-0 gap-1 items-center text-red-500 font-semibold px-2 py-1.5 rounded-lg text-xs border border-red-300 hover:bg-red-50 hover:border-red-400 transition-all duration-200"
>
    <IoArrowUndo className="text-base" />
    সাইন আউট
  </button>
</div>
  </div>

  {/* update card */}
    <div className="mt-10 w-125 max-w-7xl mx-auto bg-white rounded-2xl p-4 md:p-8 items-center justify-between gap-4 border border-gray-100 shadow-sm flex flex-col">

     <p className="font-bold">তথ্য</p>
      <form onSubmit={onSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              নাম
            </label>
            <input
              name='name'
              type="text"
              className="w-110 px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E8345] focus:ring-1 focus:ring-[#0E8345] transition"
            />
          </div>


          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-110 py-2.5 px-4 bg-[#0A7B3E] hover:bg-[#086834] active:bg-[#07592c] text-white font-semibold text-sm rounded-lg shadow-[0_4px_12px_rgba(10,123,62,0.25)] transition duration-200"
            >
              আপডেট
            </button>
          </div>
        </form>
</div>
</div>
  );
};

export default ProfilePage;
