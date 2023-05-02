import React from "react";
import useSWR from "swr";
import { useState } from "react";
import Map from "../../Components/Map/Map";
import SearchBar from "../../Components/SearchBar/SearchBar";
import FighterCard from "../../Components/FighterCard/FighterCard";
import Image from "next/image";
import CommonFightsCard from "../../Components/CommonFightsCard/CommonFightsCards";


function Home() {
  

  const {data, isLoading} = useSWR("/api/fighters")
  if (isLoading) {
    return (
        <>
            
            <Image
                src="/My-Jab-Gym-Gloves-original.png"
                alt=""
                width={500}
                height={500}
            />
        </>
    );
  }
  console.log("From Index: ", data)



    return (
        <>
            <SearchBar /> 
            <Map />
            <CommonFightsCard/>
        </>
    );
}

export default Home;
//https://codesandbox.io/s/p5lwvkp7x?file=/package.json
// <FighterCard fighter={fighter}/>