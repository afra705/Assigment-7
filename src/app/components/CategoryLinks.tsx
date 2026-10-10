
import Link from "next/link";
import baseUrl from "../lib/categorylinks";

interface INavlinks {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const CategoryLinks = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/categories`, {
    cache: "force-cache",
  });

  const data: INavlinks[] = await res.json();

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-3 py-3 font-bold text-xs sm:gap-4 sm:px-5 sm:text-[13px]">
        {data.map((product) => (
          <Link
            href={`/category/${product.slug}`}
            key={product.id}
            className="flex items-center gap-1.5 rounded-xl px-3 py-2 transition hover:bg-green-50 hover:text-green-700"
          >
            <span>{product.icon}</span>
            <span>{product.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default CategoryLinks;
