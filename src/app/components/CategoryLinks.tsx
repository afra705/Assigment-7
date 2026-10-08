import Link from "next/link";
import baseUrl from "../lib/categorylinks";
interface INavlinks{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const CategoryLinks = async() => {
    const res = await fetch(`${baseUrl}/categories`,{cache:'force-cache'});
    const data:INavlinks[] = await res.json();
    
    console.log(data);


    return (
        
        <div className="bg-white flex justify-center items-center gap-5 font-bold text-[13px] p-3">
                {
                data.map((product)=>
                <Link href={`/category/${product.slug}`} key={product.id}>
                    <p><span>{product.icon}</span>{product.nameBn}</p>
                </Link>)
                }

        </div>
  
    );
};

export default CategoryLinks;