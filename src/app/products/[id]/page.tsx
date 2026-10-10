
import DetailsCard from "@/app/components/DetailsCard";
import { FaGreaterThan } from "react-icons/fa";

type Params = {
  id: string;
};

export const instant = false;

const getUnitName = (unit: string) => {
  if (unit === "kg") return "কেজি";
  if (unit === "liter") return "লিটার";
  if (unit === "piece") return "টি";
  if (unit === "gram") return "গ্রাম";
  if (unit === "dozen") return "ডজন";

  return unit;
};

const banglaNumber = new Intl.NumberFormat("bn-BD");

const ProductDetails = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
    { cache: "force-cache" }
  );

  const data = await res.json();

  return (
    <>
      {/* Product Details */}
      <div className="box-border w-full min-w-0 sm:max-w-[340px] md:max-w-none lg:w-7xl mx-auto mt-4 sm:mt-5 lg:mt-10 px-2 sm:px-3 lg:px-0">
        {/* Breadcrumb */}
        <p className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs lg:text-sm text-gray-500 mb-3 sm:mb-4 lg:mb-6">
          <span>হোম</span>
          <FaGreaterThan className="text-[8px] text-gray-400 shrink-0" />
          <span>{data?.categoryNameBn}</span>
          <FaGreaterThan className="text-[8px] text-gray-400 shrink-0" />
          <span className="break-words">{data?.nameBn}</span>
        </p>

        {/* Product Details Card */}
        <div className="box-border flex min-w-0 flex-col md:flex-row justify-between items-stretch md:items-center gap-3 sm:gap-3 lg:gap-4 bg-white border border-gray-100 rounded-xl sm:rounded-2xl lg:rounded-3xl p-2 sm:p-2.5 lg:p-6 shadow-sm">
          {/* Left Side */}
          <div className="flex items-start gap-2 sm:gap-2 lg:gap-4 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-20 lg:h-20 shrink-0 bg-gray-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-base sm:text-lg lg:text-3xl">
              {data?.image}
            </div>

            <div className="space-y-0.5 sm:space-y-1 min-w-0">
              <h2 className="text-xs sm:text-sm lg:text-2xl font-bold text-gray-900 break-words">
                {data?.nameBn}
              </h2>

              <p className="text-[9px] sm:text-[10px] lg:text-sm text-gray-500 break-words">
                প্রতি {getUnitName(data?.unit)} · {data?.nameBn}
              </p>

              <p className="text-[9px] sm:text-[10px] lg:text-sm text-gray-600 break-words">
                গতকালের তুলনায় আজ দাম বেড়েছে ·{" "}
                {banglaNumber.format(data.today - data.yesterday)} টাকা
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="box-border bg-gray-100/70 px-2 sm:px-2.5 lg:px-6 py-2 sm:py-2.5 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl text-center w-full min-w-0 md:w-auto md:min-w-35 shrink-0">
            <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500">
              আজকের দাম
            </p>

            <p className="text-lg sm:text-xl lg:text-3xl font-extrabold text-gray-900 my-0.5 sm:my-1">
              {data?.today.toLocaleString("bn-BD")}
            </p>

            <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500">
              টাকা / {getUnitName(data?.unit)}
            </p>

            {data.change.dir === "up" ? (
              <p className="text-[10px] sm:text-xs lg:text-sm text-red-700">
                ▲{data.change.pct}%
              </p>
            ) : data.change.dir === "down" ? (
              <p className="text-[10px] sm:text-xs lg:text-sm text-green-800">
                ▼{data.change.pct}%
              </p>
            ) : (
              <p className="text-[10px] sm:text-xs lg:text-sm text-gray-800">
                — {data.change.pct}%
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Price Summary */}
      <div className="box-border w-full min-w-0 sm:max-w-[340px] md:max-w-none lg:w-7xl mx-auto bg-white rounded-xl sm:rounded-2xl mt-4 sm:mt-5 lg:mt-10 px-2 sm:px-2.5 lg:px-7 py-3 sm:py-3 lg:py-7 overflow-hidden">
        <p className="font-bold text-xs sm:text-xs lg:text-[15px] mb-2 sm:mb-3 lg:mb-4">
          দামের সারসংক্ষেপ
        </p>

        <DetailsCard product={data} />
      </div>
    </>
  );
};

export default ProductDetails;
