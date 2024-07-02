import React from 'react';
import Banner from '../Banner/Banner';
import ShopFirst from '../ShopFirst Sec/ShopFirst';
import NewWeeksec from '../NewWeek Sec/NewWeeksec';
import MemberShipSec from '../Membership Sec/MemberShipSec';
import ShopClassis from '../Shop Classis/ShopClassis';
import ProductLink from '../Product Link/ProductLink';

const Home = () => {
    return (
        <div>
           <Banner/>
           <ShopFirst/>
           <NewWeeksec/>
           <ShopClassis/>
           <MemberShipSec/>
           <ProductLink/>
        </div>
    );
};

export default Home;