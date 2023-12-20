import React from "react";
import './Home.scss';
import Hero from "./Hero/Hero";
import Amenities from "./Amenities/Amenities";
import Explore from "./Explore/Explore";
import Culture from "./Culture/Culture";
import Food from "./Food/Food";
import Beaches from "./Beaches/Beaches";
import Weather from "./Weather/Weather";

const Home = () => {
    return (
        <>
            <Hero />
            <Explore />
            <Culture />
            <Food />
            <Beaches />
            <Amenities />
            <Weather />
        </>
    );
}
 
export default Home;