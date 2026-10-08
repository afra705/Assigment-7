import React from 'react';
import Banner from './components/Banner';
import MaxRate from './maxRate.tsx/page';
import MinPage from './minRate.tsx/page';
import AllProduct from './allProducts.tsx/page';

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <MaxRate/>
      <MinPage/>
      <AllProduct/>
    </div>
  );
};

export default HomePage;