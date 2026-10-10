"use client";

import CardPage from "@/app/components/Card";
import Link from "next/link";
import { useState } from "react";

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
};

const SortedProduct = ({ products }: { products: IProduct[] }) => {
  const [sort, setSort] = useState<
    "ডিফল্ট" | "কম থেকে বেশি" | "বেশি থেকে কম"
  >("ডিফল্ট");

  const sorted = [...products];

  const SortedProduct = (sorted: IProduct[]) => {
    if (sort === "কম থেকে বেশি") {
      return sorted.sort((a, b) => a.today - b.today);
    }

    if (sort === "বেশি থেকে কম") {
      return sorted.sort((a, b) => b.today - a.today);
    }

    return sorted;
  };

  const SortedProducts = SortedProduct(sorted);

  return (
    <div>
      <div className="mt-6 sm:mt-8 lg:mt-10 flex items-center justify-end gap-2 bg-white px-3 sm:px-4 py-2.5 rounded-2xl shadow-sm">
        <span className="text-xs text-gray-500 font-medium">সাজান</span>

        <select
          value={sort}
          onChange={(e) =>
            setSort(
              e.target.value as
                | "ডিফল্ট"
                | "কম থেকে বেশি"
                | "বেশি থেকে কম"
            )
          }
          className="h-8 w-33 text-xs text-gray-700 bg-white border border-gray-300 rounded-lg px-2 py-1 outline-none cursor-pointer focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all"
        >
          <option value="ডিফল্ট">ডিফল্ট</option>
          <option value="কম থেকে বেশি">দাম: কম থেকে বেশি</option>
          <option value="বেশি থেকে কম">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <p className="text-gray-500 text-[13px] mt-6 sm:mt-8 lg:mt-10 mb-2">
        মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
        {SortedProducts.map((product: IProduct) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <CardPage product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SortedProduct;