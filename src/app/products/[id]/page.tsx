import DetailsCard from "@/app/components/DetailsCard";
import { FaGreaterThan } from "react-icons/fa";
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

export const instant = false;
type Params = {
  id: string;
};
const getUnitName = (unit: string) => {
  if (unit === "kg") return "কেজি";
  if (unit === "liter") return "লিটার";
  if (unit === "piece") return "টি";
  if (unit === "gram") return "গ্রাম";
  if (unit === "dozen") return "ডজন";

  return unit;
};
const banglaNumber = new Intl.NumberFormat("bn-BD");
const ProductDetails = async({params,}: {params: Promise<Params>}) => {
    const { id } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`,{cache:'force-cache'});
    const data = await res.json();

    console.log(data);

    return (
        <>
<div className="lg:w-7xl mx-auto mt-10">
  {/* Breadcrumb */}
  <p className="flex items-center gap-2 text-sm text-gray-500 mb-6">
    <span>হোম</span>
    <FaGreaterThan className="text-[10px] text-gray-400" />
    <span>{data?.categoryNameBn}</span>
    <FaGreaterThan className="text-[10px] text-gray-400" />
    <span>{data?.nameBn}</span>
  </p>

  {/* Product Details Card */}
  <div className="flex justify-between items-center bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
    
    {/* Left Side */}
    <div className="flex items-center gap-4">
      <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
        {data?.image}
      </div>

      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-gray-900">{data?.nameBn}</h2>

        <p className="text-sm text-gray-500">
          প্রতি {getUnitName(data?.unit)} · {data?.nameBn}
        </p>

        <p className="text-sm text-gray-600">
          গতকালের তুলনায় আজ দাম বেড়েছে ·{" "}
          {banglaNumber.format(data.today - data.yesterday)} টাকা
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="bg-gray-100/70 px-6 py-4 rounded-2xl text-center min-w-35">
      <p className="text-xs text-gray-500">আজকের দাম</p>

      <p className="text-3xl font-extrabold text-gray-900 my-1">
        {data?.today.toLocaleString("bn-BD")}
      </p>

      <p className="text-xs text-gray-500">
        টাকা / {getUnitName(data?.unit)}
 
      </p>

            {data.change.dir === "up" ? (
              <p className="text-red-700">▲{data.change.pct}%</p>
            ) :  data.change.dir === "down" ?(
             <p className="text-green-800">▼{data.change.pct}%</p>
            ): <p className="text-gray-800 ">— {data.change.pct}%</p>}
    </div>

  </div>
</div>
            {/* 2nd part */}
    <div className="lg:w-7xl mx-auto bg-white rounded-2xl mt-10 px-4 p-7">
        <p className="font-bold text-[15px] pl-7 mt-[-10]">দামের সারসংক্ষেপ</p>
        {/* card */}
        <div>
            <DetailsCard product={data}/>
        </div>
    </div>
</>
    );
};

export default ProductDetails;