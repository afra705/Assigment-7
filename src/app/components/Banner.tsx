
import Image from 'next/image';
import banner from '@/assets/bazar-hero.png';
import LiveDate from './LiveDate';

const Banner = () => {
    return (
      <div className='pt-10'>
        <div className='bg-white p-10 rounded-2xl flex gap-80 justify-between'>
            {/* first part */}
            <div className=''>
              <LiveDate/>
          <h2 className='text-2xl font-bold py-4' >আজকের বাজারের দাম এক নজরে</h2>
                <p className='text-gray-500 text-[13px] '>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন <br />
                -সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button  className='mt-4 bg p-1 px-4 lg:p-3 shadow-2xl shadow-green-200 lg:px-6 text-white rounded-2xl text-[13px]'>সব পণ্য দেখুন</button>
            </div>
            <div>
                 <Image src={banner} alt='banner' height={300} width={300}/>
            </div>
        </div>
      </div>
    );
};

export default Banner;