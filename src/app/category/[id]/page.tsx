
import SortedProduct from "@/app/components/SortedProduct";

import Link from "next/link";

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

type ICategory = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};

type Params = {
  id: string;
};

export const instant = false;

const getCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: ICategory[] = await res.json();
  return data;
};

const CategoryDetails = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: IProduct[] = await res.json();

  const categories = await getCategories();

  const currentCategories = categories.find(
    (c) => c.slug === id
  );

  // Empty state: invalid slug or no products
  if (!currentCategories || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl sm:text-7xl font-bold text-gray-300">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold mt-4 text-gray-800">
          কোনো পণ্য পাওয়া যায়নি!
        </h2>

        <p className="text-gray-500 text-sm mt-2 max-w-md">
          এই ক্যাটাগরিতে কোনো পণ্য নেই অথবা ক্যাটাগরিটি খুঁজে পাওয়া যায়নি।
        </p>

        <Link
          href="/"
          className="mt-6 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="w-full lg:w-7xl mx-auto flex gap-3 sm:gap-4 bg-white p-3 sm:p-5 rounded-2xl mt-6 sm:mt-8 lg:mt-10">
        <div className="text-2xl sm:text-3xl shrink-0">
          {currentCategories.icon}
        </div>

        <div className="min-w-0">
          <h2 className="text-lg sm:text-xl font-bold">
            {currentCategories.nameBn}
          </h2>

          <p className="text-gray-500 text-xs sm:text-[13px]">
            {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* Products */}
      <SortedProduct products={data} />
    </>
  );
};

export default CategoryDetails;
