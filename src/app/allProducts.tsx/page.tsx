import React from 'react';
import baseUrl from '../lib/categorylinks';
import CardPage from '../components/Card';
import Link from 'next/link';

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
    dir: "up" | "down";
    pct: number;
  };
};

const AllProduct = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products`, {
    cache: 'force-cache'
  });

  const data = await res.json();

  return (
    <div id='allproduct' className="mt-6 sm:mt-8 lg:mt-10">
      <h2 className="text-xl sm:text-2xl font-bold">সব পণ্য</h2>

      <p className="text-sm sm:text-[15px] text-gray-600">
        মোট ৩৩টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
        {data.map((product: IProduct) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <CardPage product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;