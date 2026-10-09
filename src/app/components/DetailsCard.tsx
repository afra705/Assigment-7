
import React from 'react';  
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

const DetailsCard = ({product}:{product:IProduct}) => {  

    const minPrice = Math.min(...product.markets.map(m=> m.min))
    const maxPrice = Math.max(...product.markets.map(m => m.max));
    return (
      <>
        <div>
          {/* card */}
          <div className="flex justify-between gap-3 p-5 w-full">
            {/* 1 */}
            <div className="flex-1 rounded-2xl border border-[#dce5dc] bg-[#fafcfb] px-6 py-4">
              <p className="text-xs text-gray-700">সর্বনিম্ন দাম</p>

              <p className="text-3xl font-bold text-green-700">
                {minPrice.toLocaleString("bn-BD")}{" "}
                <span className="text-sm">টাকা</span>
              </p>

              <p className="text-xs text-gray-600">সবচেয়ে কম দামের বাজার</p>
            </div>

            <div className="flex-1 rounded-2xl border border-[#dce5dc] bg-[#fafcfb] px-6 py-4">
              <p className="text-xs text-gray-700">সর্বাধিক দাম</p>

              <p className="text-3xl font-bold text-red-700">
                {maxPrice.toLocaleString("bn-BD")}{" "}
                <span className="text-sm">টাকা</span>
              </p>

              <p className="text-xs text-gray-600">সবচেয়ে বেশি দামের বাজার</p>
            </div>

            <div className="flex-1 rounded-2xl border border-[#dce5dc] bg-[#fafcfb] px-6 py-4">
              <p className="text-xs text-gray-700">গড় দাম</p>

              <p className="text-3xl font-bold text-green-700">
                {((minPrice + maxPrice) / 2).toLocaleString("bn-BD")}{" "}
                <span className="text-sm">টাকা</span>
              </p>

              <p className="text-xs text-gray-600">প্রতি কেজি-এর হিসাবে</p>
            </div>
          </div>

          <p className="font-bold text-[15px] text-[#26352b] pl-7">
            বাজারভিত্তিক আজকের দাম
          </p>
          <div className=" rounded-2xl p-5 sm:p-6">
            <div className="overflow-x-auto rounded-2xl border border-[#dce5dc]">
              <div className="min-w-162.5">
                <div className="grid grid-cols-5 items-center border-b border-[#e6ebe6] bg-[#fafcf9] px-4 py-4 text-[13px] font-bold text-gray-500">
                  <p>বাজার</p>
                  <p className="pl-15">বিভাগ</p>
                  <p className="text-center">সর্বনিম্ন</p>
                  <p className="text-center">সর্বাধিক</p>
                  <p className="text-right">গড়</p>
                </div>
                <div>
                  {product.markets
                    .sort((a, b) => a.min - b.min)
                    .sort((a, b) => a.max - b.max)
                    .map((bazar) => (
                      <div
                        key={bazar.market}
                        className="grid grid-cols-5 items-center border-b border-[#dce3dc] px-4 py-3 text-[13px] text-[#303a32] transition-colors odd:bg-[#fafcf9] even:bg-[#f0f5f0] hover:bg-[#e8f0e8] last:border-b-0"
                      >
                        <p className="pr-2 font-bold">{bazar.market}</p>
                        <p className="pr-2 pl-15">{bazar.division}</p>
                        <p className="text-center whitespace-nowrap">
                          {bazar.min.toLocaleString("bn-BD")} টাকা
                        </p>
                        <p className="text-center whitespace-nowrap">
                          {bazar.max.toLocaleString("bn-BD")} টাকা
                        </p>
                        <p className="text-right font-bold whitespace-nowrap">
                          {Number.isInteger((bazar.min + bazar.max) / 2)
                            ? ((bazar.min + bazar.max) / 2).toLocaleString(
                                "bn-BD",
                              )
                            : ((bazar.min + bazar.max) / 2).toLocaleString(
                                "bn-BD",
                                {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                },
                              )}{" "}
                          টাকা
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );  

};  
  
export default DetailsCard;
