import Image from 'next/image';
import logo from '@/assets/logo-icon.png';
import CategoryLinks from './CategoryLinks';
import Link from 'next/link';

const Navbar = () => {
    return (
 <div className=''>
    {/* nav */}
    <div className='bg-white'>
        <div className='p-3 max-w-7xl mx-auto flex justify-between pt-5'>
        {/* left side */}
        <div className="flex gap-2">
          <div>
            <Image src={logo} alt="logo" height={30} width={30} 
            className='bg-green-700 p-5 rounded-2xl'
            />
          </div>
          <div>
            <Link href='/'>
                <h2 className="font-bold text-2xl">বাজার দর</h2>
                <p className="text-[12px]">মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
            </Link>
          </div>
        
        </div>
          {/* right side */}
          <div className='flex gap-3'>
            <button className='text-[13px]'>সাইন ইন</button>
            <button className='bg p-1 px-3 lg:p-2 shadow-2xl shadow-green-200 lg:px-5 text-white rounded-2xl text-[13px]'>সাইন আপ</button>
          </div>
      </div>
    </div>
      {/* category */}
      <CategoryLinks/>
 </div>
    );
};

export default Navbar;