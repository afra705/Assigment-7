
const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm md:flex-row md:items-center md:justify-between">
        
        {/* Left */}
        <p className="font-bold text-gray-800">
          বাজার দর
          <span className="ml-2 font-normal text-gray-500">
            — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </span>
        </p>

        {/* Right */}
        <p className="text-xs leading-6 text-gray-500 md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;
