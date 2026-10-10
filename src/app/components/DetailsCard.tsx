
import React from "react";

type IProduct = {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
};

const DetailsCard = ({ product }: { product: IProduct }) => {
  const minPrice = Math.min(...product.markets.map((m) => m.min));
  const maxPrice = Math.max(...product.markets.map((m) => m.max));

  return (
    <div className="w-full min-w-0 max-w-full">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-2 lg:gap-4 p-1 sm:p-1 lg:p-5 w-full min-w-0 max-w-full mx-auto">
        {/* Minimum Price */}
        <div className="box-border min-w-0 max-w-full rounded-xl lg:rounded-2xl border border-[#dce5dc] bg-[#fafcfb] px-2 sm:px-2 lg:px-6 py-3 sm:py-3 lg:py-4">
          <p className="text-[10px] sm:text-[10px] lg:text-xs text-gray-700">
            সর্বনিম্ন দাম
          </p>

          <p className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-green-700 break-words">
            {minPrice.toLocaleString("bn-BD")}{" "}
            <span className="text-xs lg:text-sm">টাকা</span>
          </p>

          <p className="text-[10px] sm:text-[10px] lg:text-xs text-gray-600">
            সবচেয়ে কম দামের বাজার
          </p>
        </div>

        {/* Maximum Price */}
        <div className="box-border min-w-0 max-w-full rounded-xl lg:rounded-2xl border border-[#dce5dc] bg-[#fafcfb] px-2 sm:px-2 lg:px-6 py-3 sm:py-3 lg:py-4">
          <p className="text-[10px] sm:text-[10px] lg:text-xs text-gray-700">
            সর্বাধিক দাম
          </p>

          <p className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-red-700 break-words">
            {maxPrice.toLocaleString("bn-BD")}{" "}
            <span className="text-xs lg:text-sm">টাকা</span>
          </p>

          <p className="text-[10px] sm:text-[10px] lg:text-xs text-gray-600">
            সবচেয়ে বেশি দামের বাজার
          </p>
        </div>

        {/* Average Price */}
        <div className="box-border min-w-0 max-w-full rounded-xl lg:rounded-2xl border border-[#dce5dc] bg-[#fafcfb] px-2 sm:px-2 lg:px-6 py-3 sm:py-3 lg:py-4 lg:col-span-1">
          <p className="text-[10px] sm:text-[10px] lg:text-xs text-gray-700">
            গড় দাম
          </p>

          <p className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-green-700 break-words">
            {((minPrice + maxPrice) / 2).toLocaleString("bn-BD")}{" "}
            <span className="text-xs lg:text-sm">টাকা</span>
          </p>

          <p className="text-[10px] sm:text-[10px] lg:text-xs text-gray-600">
            প্রতি কেজি-এর হিসাবে
          </p>
        </div>
      </div>

      {/* Table Heading */}
      <p className="font-bold text-xs sm:text-xs lg:text-[15px] text-[#26352b] px-1 sm:px-1 lg:px-7 mt-2 sm:mt-2.5 lg:mt-3 break-words">
        বাজারভিত্তিক আজকের দাম
      </p>

      {/* Responsive Table */}
      <div className="box-border w-full min-w-0 max-w-full p-1 sm:p-1 lg:p-5">
        <div className="box-border w-full min-w-0 max-w-full overflow-x-auto rounded-xl lg:rounded-2xl border border-[#dce5dc]">
          <div className="w-full min-w-[300px] sm:min-w-[320px] lg:min-w-[650px]">
            {/* Table Header */}
            <div className="grid grid-cols-5 items-center border-b border-[#e6ebe6] bg-[#fafcf9] px-1 sm:px-1.5 lg:px-4 py-2 sm:py-2 lg:py-4 text-[8px] sm:text-[9px] lg:text-[13px] font-bold text-gray-500">
              <p>বাজার</p>
              <p className="pl-1 sm:pl-1.5 lg:pl-4">বিভাগ</p>
              <p className="text-center">সর্বনিম্ন</p>
              <p className="text-center">সর্বাধিক</p>
              <p className="text-right">গড়</p>
            </div>

            {/* Table Rows */}
            <div>
              {product.markets
                .sort((a, b) => a.min - b.min)
                .sort((a, b) => a.max - b.max)
                .map((bazar) => (
                  <div
                    key={bazar.market}
                    className="grid grid-cols-5 items-center border-b border-[#dce3dc] px-1 sm:px-1.5 lg:px-4 py-2 sm:py-2 lg:py-3 text-[8px] sm:text-[9px] lg:text-[13px] text-[#303a32] transition-colors odd:bg-[#fafcf9] even:bg-[#f0f5f0] hover:bg-[#e8f0e8] last:border-b-0"
                  >
                    <p className="pr-0.5 sm:pr-1 font-bold break-words">
                      {bazar.market}
                    </p>

                    <p className="pr-0.5 pl-1 sm:pl-1.5 lg:pl-4 break-words">
                      {bazar.division}
                    </p>

                    <p className="text-center break-words">
                      {bazar.min.toLocaleString("bn-BD")}
                    </p>

                    <p className="text-center break-words">
                      {bazar.max.toLocaleString("bn-BD")}
                    </p>

                    <p className="text-right font-bold break-words">
                      {Number.isInteger((bazar.min + bazar.max) / 2)
                        ? ((bazar.min + bazar.max) / 2).toLocaleString(
                            "bn-BD"
                          )
                        : ((bazar.min + bazar.max) / 2).toLocaleString(
                            "bn-BD",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
