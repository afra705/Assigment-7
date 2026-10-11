"use client";
import { authClient, signIn } from '@/app/lib/auth-client';
import Link from 'next/link';
import toast from 'react-hot-toast';

const signInGoogle = async () => {
  try {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  } catch (error) {
    console.error("Google login failed:", error);
    toast.error("Google login failed");
  }
};

const signInGithub = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}



const SignInPage = () => {

const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

 const email = formData.get("email") as string;
    const password = formData.get("password") as string;

  const { data: signInData, error } = await signIn.email({
    email,
    password,
    callbackURL: "/",
  });

  // if (error) {
  //   console.error("Sign in failed:", error);
  
  //   return;
  // }
     if (error) {
    toast.error( "Sign in failed!");
    return;
  }

toast.success("Sign in successfully!")
  console.log("Sign in successful:", signInData);

  window.location.href = "/";
};
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4 mt-[-50]">
      {/* Title & Subtitle */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#1f2937]">
          সাইন ইন
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#4b5563]">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>
 
      {/* Main Card */}
      <div className="w-full max-w-[500px] bg-white rounded-2xl border border-[#e5e7eb] shadow-sm p-6 sm:p-7">
        <form onSubmit={onSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs font-bold text-[#374151] mb-1.5">
              ইমেইল
            </label>
            <input
              name='email'
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-3.5 py-2 rounded-lg border border-[#e2e8f0] text-sm text-[#1f2937] placeholder-[#9ca3af] outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-xs font-bold text-[#374151] mb-1.5">
              পাসওয়ার্ড
            </label>
           <input
              name='password'
              type="password"
              required
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E8345] focus:ring-1 focus:ring-[#0E8345] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#0a8043] text-white font-medium rounded-lg text-sm shadow-sm"
          >
            সাইন ইন
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#e5e7eb]"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2.5 text-[#6b7280]">অথবা</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Google */}
          <button
          onClick={signInGoogle}
            type="button"
            className="flex items-center justify-center gap-1.5 py-2 px-2 bg-white border border-[#e5e7eb] rounded-lg text-xs font-bold text-[#1f2937]"
          >
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span  className="truncate">Google দিয়ে চালিয়ে যান</span>
          </button>

          {/* GitHub */}
          <button
          onClick={signInGithub}
            type="button"
            className="flex items-center justify-center gap-1.5 py-2 px-2 bg-white border border-[#e5e7eb] rounded-lg text-xs font-bold text-[#1f2937]"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0 text-[#1f2937]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="truncate">GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-xs text-[#4b5563]">
          অ্যাকাউন্ট নেই?{' '}
          <Link href='/sign-up' className="text-[#0a8043] font-semibold cursor-pointer">
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      {/* Back to Home Link */}
      <Link href='/' className="mt-5 text-xs text-[#6b7280] flex items-center gap-1 cursor-pointer">
        <span>←</span>
        <span>হোম পেজে ফিরে যান</span>
      </Link>
    </div>
  );
};

export default SignInPage;