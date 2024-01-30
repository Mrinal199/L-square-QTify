// import logo from './logo.svg';
// import './App.css';

import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlnums } from "./api/api";




function App() {
  const [searchData, useSearchData] = useState();
    const [data, setData] = useState({});
    const generateData = (key, source) => {
        source().then((data) => {
            setData((prevData) => {
                return {...prevData, [key]: data};
            })
        })
    }

    useEffect(() => {
        generateData("topAlbums", fetchTopAlnums);
        generateData("newAlbums", fetchNewAlbums);
        generateData("songs", fetchSongs);
    }, []);
    const {topAlbums = [], newAlbums = [], songs = []} = data;

  return (
    <>
      <div>
          <Navbar />
          <Outlet context={{ data: {topAlbums, newAlbums, songs}}} />
      </div>
    </>

  );
}

export default App;
