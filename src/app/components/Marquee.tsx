import React from 'react';
import baseUrl from '../lib/categorylinks';
interface INavlinks{
    id: string,
    slug: string,
    nameBn: string,
    categoryIcon: string,
    unit:string,
    today: number,
    change:{
        pct: number,
        dir:string,
    }
}

const Marquee = async() => {

    const res = await fetch(`${baseUrl}/products`,{cache:'force-cache'});
    const data = await res.json();
    console.log(data);


    return (
      <div className="flex gap-5 sm:pl-2">
        {data.map((product: INavlinks) => (
          <div className="flex gap-2 p-3 text-[13px]" key={product.slug}>
            <span>{product.categoryIcon}</span>
            <p>{product.nameBn}</p>
            <p>{product.today} টাকা/কেজি </p>

            {product.change.dir === "up" ? (
              <p className="text-red-700">▲{product.change.pct}%</p>
            ) :  product.change.dir === "down" ?(
             <p className="text-green-800">▼{product.change.pct}%</p>
            ): <p className="text-gray-800 ">— {product.change.pct}%</p>}
          </div>
        ))}
      </div>
    );
};

export default Marquee;