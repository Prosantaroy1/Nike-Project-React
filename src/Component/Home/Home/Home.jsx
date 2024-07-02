import React from 'react';
import Banner from '../Banner/Banner';
import ShopFirst from '../ShopFirst Sec/ShopFirst';
import NewWeeksec from '../NewWeek Sec/NewWeeksec';
import MemberShipSec from '../Membership Sec/MemberShipSec';

const Home = () => {
    return (
        <div>
           <Banner/>
           <ShopFirst/>
           <NewWeeksec/>
           <MemberShipSec/>
        </div>
    );
};

export default Home;