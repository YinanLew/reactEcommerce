import React, {useEffect, useRef} from 'react';
import Header from "./Header/Header";
import Gallery from './Gallery/Gallery';
import NewSeason from "./newSeason/NewSeason";
import Footer from "./footer/Footer";


const Home = ({category}) => {

        return (
            <div>
                <Header />
                <Gallery category={category} />
                <NewSeason />
                <Footer />
            </div>
        );
}

export default Home;

