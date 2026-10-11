
/* eslint-disable @next/next/no-img-element */
"use client";

import { IoArrowUndo } from "react-icons/io5";
import { authClient } from "../lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignout = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("Signout failed!");
        return;
      }

      toast.success("Signout Successfully!");

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1500);
    } catch (error) {
      console.error("Signout error:", error);
      toast.error("Something went wrong!");
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    const { error } = await authClient.updateUser({
      ...newUserData,
    });

    if (error) {
      toast.error("Profile update failed");
      return;
    }

    toast.success(`${newUserData.name} updated successfully`);
  };

  if (isPending) {
    return <p className="mt-10 text-center">লোড হচ্ছে...</p>;
  }

  if (!user) {
    return (
      <div className="mt-10 px-4 text-center">
        <p>প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।</p>

        <Link href="/sign-in" className="text-green-700 underline">
          সাইন ইন করুন
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 max-w-5xl mx-auto px-3 sm:px-4 md:px-6 mt-6 sm:mt-8 md:mt-10">
      <div className="space-y-5 sm:space-y-6">
        {/* Header Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            আমার প্রোফাইল
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Card */}
        <div className="box-border w-full max-w-[420px] md:max-w-none md:w-[500px] mx-auto bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border border-gray-100 shadow-sm">
          {/* Avatar + User Info */}
          <div className="flex items-center gap-3 md:gap-5 min-w-0 flex-1 w-full">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 ring-1 ring-gray-200">
              {user.image && (
                <img
                  src={user.image}
                  alt={user.name || "Profile"}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="space-y-1 min-w-0 flex-1">
              <h4 className="font-bold text-sm sm:text-base md:text-xl text-gray-800 leading-tight truncate">
                {user.name}
              </h4>

              <span className="text-[11px] sm:text-xs md:text-sm text-gray-500 block truncate">
                {user.email}
              </span>
            </div>
          </div>

          {/* Signout Button */}
          <button
            type="button"
            onClick={handleSignout}
            className="flex shrink-0 gap-1 items-center text-red-500 font-semibold px-2.5 py-1.5 rounded-lg text-xs border border-red-300 hover:bg-red-50 hover:border-red-400 transition-all duration-200"
          >
            <IoArrowUndo className="text-base" />
            সাইন আউট
          </button>
        </div>
      </div>

      {/* Update Card */}
      <div className="box-border mt-6 sm:mt-8 md:mt-10 w-full max-w-[420px] md:max-w-none md:w-[500px] mx-auto bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-8 border border-gray-100 shadow-sm flex flex-col items-center gap-4">
        <p className="font-bold text-sm sm:text-base">তথ্য</p>

        <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
          {/* Name Field */}
          <div className="w-full min-w-0">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              নাম
            </label>

            <input
              name="name"
              type="text"
              defaultValue={user.name || ""}
              className="box-border w-full min-w-0 px-3 py-2.5 sm:px-3.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E8345] focus:ring-1 focus:ring-[#0E8345] transition"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 w-full">
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#0A7B3E] hover:bg-[#086834] active:bg-[#07592c] text-white font-semibold text-sm rounded-lg shadow-[0_4px_12px_rgba(10,123,62,0.25)] transition duration-200"
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
