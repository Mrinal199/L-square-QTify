import React from "react";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";


function HomePage() {
    const { data } = useOutletContext();
    const {topAlbums, newAlbums, songs} = data;
    return  (
        <>
            <Hero />
        </>
    )
}

export default HomePage;