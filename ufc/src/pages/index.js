import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Map from "../../Components/Map/Map";
import SearchBar from "../../Components/SearchBar/SearchBar";
import FighterCard from "../../Components/FighterCard/FighterCard";
import CommonFightsCard from "../../Components/CommonFightsCard/CommonFightsCards";


function Home() {

  const {data, isLoading} = useSWR("/api/fighters")
  if (isLoading) {
    return (
       <h2> wait a second ...</h2>
    );
  }
  console.log(data)
    return (
        <>
            <SearchBar />
            <Map />
            <FighterCard />
            
        </>
    );
}

export default Home;
//https://codesandbox.io/s/p5lwvkp7x?file=/package.json