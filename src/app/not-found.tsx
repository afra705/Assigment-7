
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-extrabold text-green-700">
        404
      </h1>

      <h2 className="mt-5 text-2xl font-bold text-gray-900">
        দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
      </h2>

      <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
        আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি অথবা পেজটির ঠিকানা ভুল।
      </p>

      <Link
        href="/"
        className="mt-7 rounded-xl bg-green-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-800"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
