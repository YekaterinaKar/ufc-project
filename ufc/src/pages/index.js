import React from "react";
import useSWR from "swr";
import { useState } from "react";
import Image from "next/image";
import Map from "../../Components/Map/Map";
import SearchBar from "../../Components/SearchBar/SearchBar";
import FighterCard from "../../Components/FighterCard/FighterCard";
import CommonFightsCard from "../../Components/CommonFightsCard/CommonFightsCards";


function Home() {
  const [fighter, setFighter] =useState("")

  const {data, isLoading} = useSWR("/api/fighters")
  if (isLoading) {
    return (
       <h2> wait a second ...</h2>
    );
  }
  console.log("From Index: ", data)

  function handleClick(newData) {
    const newFighter = data.find((fighter) => fighter._id === newData)
    setFighter(newFighter)
  }

    return (
        <>
            <SearchBar />
            
            <div>
                <Map handleClick={handleClick} />
            </div>
        </>
    );
}

export default Home;
//https://codesandbox.io/s/p5lwvkp7x?file=/package.json
// <FighterCard fighter={fighter}/>