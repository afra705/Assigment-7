import React from 'react';
import baseUrl from '../lib/categorylinks';
import CardPage from '../components/Card';
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

const AllProduct = async() => {
    const res = await fetch(`${baseUrl}/products`,{cache:'force-cache'});
    const data = await res.json();


    return (
        <div>
            <h2 className='text-2xl font-bold'>সব পণ্য</h2>
            <p className='text-[15px] text-gray-600'>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
             <div className='grid grid-cols-3 gap-4 mt-10'>
                {
                data.map((product:IProduct)=> 
                <CardPage key={product.id} product={product}></CardPage>)
                }
            </div>
        </div>
    );
};

export default AllProduct;