import Image from "next/image";
import banner from "@/assets/bazar-hero.png";
import LiveDate from "./LiveDate";

const Banner = () => {
  return (
    <div className="pt-10">
      <div className="bg-white p-3 sm:p-5 md:p-7 lg:p-10 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-80 justify-between">

        {/* first part */}
        <div className="">
          <LiveDate />

          <h2 className="text-2xl font-bold py-4">
            আজকের বাজারের দাম এক নজরে
          </h2>

          <p className="text-gray-500 text-[13px]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন <br />
            -সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="bg mt-4 p-3 sm:p-4 lg:p-5 text-white rounded-2xl font-bold text-[12px]">
            <a href="#allproduct">সব পণ্য দেখুন</a>
          </button>
        </div>

        {/* second part */}
        <div className="p-1 sm:p-2 lg:p-0 self-center md:self-auto">
          <Image
            src={banner}
            alt="banner"
            height={300}
            width={300}
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;
