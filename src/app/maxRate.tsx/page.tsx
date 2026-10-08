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



const MaxRate = async() => {
    const res = await fetch(`${baseUrl}/products`,{cache:'force-cache'});
    const data = await res.json();
   
    const filteredData = data.filter((f: IProduct)=>
        f.change.dir === 'up')
        .sort((a:IProduct,b:IProduct)=> b.change.pct - a.change.pct)
        .slice(0,6)
    return (
        <div className='mt-20 mb-10'>
            <h2 className='text-2xl font-bold' ><span className='text-red-700 mb-10'>▲</span> আজ দাম বেড়েছে</h2>
            <div className='grid grid-cols-3 gap-4 mt-10'>
                {
                filteredData.map((product:IProduct)=> 
                <Link href={`/products/${product.id}`} key={product.id}>
                <CardPage key={product.id} product={product}></CardPage>
                </Link>
            )
                }
            </div>
        </div>
    );
};

export default MaxRate;