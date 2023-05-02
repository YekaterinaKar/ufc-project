import React from "react";
import useSWR from "swr";
import { useState } from "react";
import Map from "../../Components/Map/Map";
import SearchBar from "../../Components/SearchBar/SearchBar";
import FighterCard from "../../Components/FighterCard/FighterCard";
import Image from "next/image";
import CommonFightsCard from "../../Components/CommonFightsCard/CommonFightsCards";


function Home() {
  const [selectedFighter, setSelectedFighter] = useState(null);


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
            <Map setSelectedFighter={setSelectedFighter} />
            <CommonFightsCard />

            {selectedFighter && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "20px",
                        transform: "translate(0,-50%)",
                        display: "inline-block",
                        width: "250px",
                        height: "500px",
                        backgroundColor: "#fff",
                        padding: "20px",
                        margin: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                        textAlign: "center",
                    }}
                >
                    <FighterCard
                        image={selectedFighter.image}
                        name={selectedFighter.name}
                        record={selectedFighter.record}
                        weightClass={selectedFighter.weightClass}
                        
                    />
                </div>
            )}
        </>
    );
}

export default Home;
//https://codesandbox.io/s/p5lwvkp7x?file=/package.json
// <FighterCard fighter={fighter}/>