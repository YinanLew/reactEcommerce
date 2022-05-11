import React, {useEffect, useRef} from 'react';
import Header from "./Header/Header";
import Gallery from './Gallery/Gallery';
import NewSeason from "./newSeason/NewSeason";
import Footer from "./footer/Footer";
import BestSales from "./best/BestSales";


const Home = ({category}) => {

        return (
            <div>
                <Header />
                <Gallery category={category} />
                <NewSeason />
                <BestSales />
                <Footer />
            </div>
        );
}

export default Home;

