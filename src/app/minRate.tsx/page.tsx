
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

const MinPage = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products`, {
    cache: 'force-cache'
  });

  const data = await res.json();

  const filteredData = data
    .filter((f: IProduct) => f.change.dir === 'down')
    .sort((a: IProduct, b: IProduct) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 lg:mb-10">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="text-green-700">▼</span> আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
        {filteredData.map((product: IProduct) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <CardPage product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MinPage;
