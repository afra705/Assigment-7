import CardPage from "@/app/components/Card";
import baseUrl from "@/app/lib/categorylinks";

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

const getCategories = async()=>{
  const res = await fetch(`${baseUrl}/categories`,{cache:'force-cache'});
    const data:ICategory[] = await res.json();
  return data;
}
// 
const CategoryDetails = async ({params,}: {params: Promise<Params>}) => {
  const { id } = await params;

  const res = await fetch(`${baseUrl}/products?category=${id}`,
    {
      cache: "force-cache",
    }
  );

  const data:IProduct[] = await res.json();
  console.log(data);

  const categories = await getCategories();
  const currentCategories = categories.find(
    (c) => c.slug === id);
    console.log(currentCategories);

  return (
<>
    <div className="flex gap-2 bg-white p-5 rounded-2xl mt-10">
        <div className="text-3xl">
            {currentCategories?.icon}
        </div>
        <div>
            <h2 className="font-bold">{currentCategories?.nameBn}</h2>
            <p className="text-gray-500 text-[13px]">{data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
    </div>
{/* middle part */}
    <div>
        <select defaultValue="ডিফল্ট" className="select">
        <option value='max to min'>দাম: কম থেকে বেশি </option>
        <option value='min to max'>দাম: বেশি থেকে কম</option>
        </select>
    </div>

      <p className="text-gray-500 text-[13px] mt-10 mb-2">মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
    <div className='grid grid-cols-3 gap-4 mt-10'>
            {
                data.map((product:IProduct)=> 
                <CardPage key={product.id} product={product}></CardPage>)
            }
    </div>
</>
  );
};

export default CategoryDetails;