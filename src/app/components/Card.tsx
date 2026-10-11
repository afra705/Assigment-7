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
interface IP{
    product:IProduct,
}
const CardPage = ({product}:IP) => {
    return (
        <>
    <div>
  {/* Card */}
  <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
    
    {/* Top section */}
    <div className="flex items-center gap-3">
      
      {/* Product Image */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xl">
        {product.image}
      </div>

      {/* Product Info */}
      <div>
        <h2 className="text-sm font-semibold text-gray-800">
          {product.nameBn}
        </h2>

       <p className="text-[10px] text-gray-500">
        প্রতি {{
          kg: "কেজি",
          liter: "লিটার",
          piece: "টি",
          gram: "গ্রাম",
          dozen: "ডজন",
        }[product.unit] || product.unit}
      </p>
      </div>
    </div>

    {/* Today's Price */}
    <div className="mt-3">
      <p className="text-[10px] text-gray-500">
        আজকের দাম
      </p>

      {/* Price + Change */}
      <div className="mt-0.5 flex items-center justify-between">
        
        <p className="text-base font-semibold text-gray-900">
          {product.today.toLocaleString("bn-BD")} <span className="text-xs font-normal">টাকা</span>
        </p>

       {product.change.dir === "up" ? (
              <p className="text-red-700 text-[10px] bg-red-50 p-1 px-2 rounded-2xl">▲{product.change.pct}%</p>
            ) : product.change.dir === "down" ?(
             <p className="text-green-800 text-[10px] bg-green-50 p-1 px-2 rounded-2xl">▼{product.change.pct}%</p>
            ): <p className="text-gray-800 text-[10px] bg-gray-50 p-1 px-2 rounded-2xl">— {product.change.pct}%</p>}

        
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default CardPage;