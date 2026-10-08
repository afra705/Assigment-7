'use client'
import CardPage from "@/app/components/Card";
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

const SortedProduct = ({products}:{products:IProduct[]}) => {
    const [sort, setSort] = useState< "ডিফল্ট" | "কম থেকে বেশি" | "বেশি থেকে কম"
>("ডিফল্ট"); 
    const sorted  = [...products]
    const SortedProduct = (sorted:IProduct[])=>{

        if(sort === 'কম থেকে বেশি'){
             return sorted.sort((a,b)=> a.today - b.today)
        }
        if(sort === 'বেশি থেকে কম'){
            return sorted.sort((a,b)=> b.today - a.today)
        }
        return sorted
    }

    const SortedProducts = SortedProduct(sorted)

    return (
        <div>
     <div className="flex justify-end mt-10 bg-white p-4 rounded-2xl">
        <p className="text-[13px] text-gray-500 flex items-center ml-3">সাজান</p>
        <select value={sort} onChange={(e)=> setSort(e.target.value as          
            | "কম থেকে বেশি"
            | "বেশি থেকে কম")}  className="select w-40 ">
            <option value="ডিফল্ট">ডিফল্ট</option>
            <option value='কম থেকে বেশি'>দাম: কম থেকে বেশি </option>
            <option value='বেশি থেকে কম'>দাম: বেশি থেকে কম</option>
        </select>
            
     </div>
        <p className="text-gray-500 text-[13px] mt-10 mb-2">মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
         <div className='grid grid-cols-3 gap-4 mt-10'>
            {
                SortedProducts.map((product:IProduct)=> 
                <CardPage key={product.id} product={product}></CardPage>)
            }
    </div>
    </div>
    );
};

export default SortedProduct;