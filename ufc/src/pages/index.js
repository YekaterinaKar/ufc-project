import React from "react";
import useSWR from "swr";
import { useState } from "react";
import Map from "../../Components/Map/Map";
import SearchBar from "../../Components/SearchBar/SearchBar";
import FighterCard from "../../Components/FighterCard/FighterCard";
import Image from "next/image";
import CommonFightsCard from "../../Components/CommonFightsCard/CommonFightsCard";

function Home() {
    const [selectedFighter, setSelectedFighter] = useState(null);
    const [matchingFighter, setMatchingFighter] = useState(null);

    const [fights, setFights] = useState([]);

    const { data, isLoading } = useSWR("/api/fighters");
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
    console.log("From Index: ", data);

    const isSameFighter =
        selectedFighter &&
        matchingFighter &&
        selectedFighter._id === matchingFighter._id;

   

    selectedFighter && selectedFighter.fights
        ? console.log("Selected Fighter fights:", selectedFighter.fights)
        : null;
    matchingFighter && matchingFighter.fights
        ? console.log("Matching fighter fights :", matchingFighter.fights)
        : null;

console.log("all fights from fights collection", fights)
    

    const CommonFights =
        selectedFighter &&
        matchingFighter &&
        selectedFighter.fights &&
        matchingFighter.fights
            ? selectedFighter.fights.filter((fight) =>
                  matchingFighter.fights.includes(fight)
              )
            : [];


    CommonFights &&
        console.log("AN ARRAY OF COMMON FIGHTS IDs", CommonFights);

   

const commonFightsArray = fights.filter((fight) =>
    CommonFights?.includes(fight.id)
);

console.log("commonFightsArray", commonFightsArray);



 /*  const commonFight = CommonFights?.join(", "); // returns strings joing by comma out of an array, if only 1 string it just gets returned
    console.log("COMMON FIGHT:", commonFight);

*/


    const foundObject = fights.find((fight) => fight.id === CommonFights[0]); 
    console.log("Found Object", foundObject); 

const secondFoundObject = fights.find((fight) => fight.id === CommonFights[1]);
console.log("secondFoundObject", secondFoundObject)





    return (
        <>
            <SearchBar setMatchingFighter={setMatchingFighter} />
            <Map setSelectedFighter={setSelectedFighter} />

            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, 50%)",
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                }}
            >
                {CommonFights?.length > 0 && !isSameFighter && (
                    <CommonFightsCard
                        setFights={setFights}
                        win={foundObject?.win}
                        between={foundObject?.between}
                        date={foundObject?.date}
                        rounds={foundObject?.rounds}
                        time={foundObject?.time}
                        by={foundObject?.by}
                    />
                )}
            </div>
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "30%",
                    transform: "translate(-50%, 50%)",
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                }}
            >
                {CommonFights?.length > 0 && !isSameFighter && (
                    <CommonFightsCard
                        setFights={setFights}
                        win={secondFoundObject?.win}
                        between={secondFoundObject?.between}
                        date={secondFoundObject?.date}
                        rounds={secondFoundObject?.rounds}
                        time={secondFoundObject?.time}
                        by={secondFoundObject?.by}
                    />
                )}
            </div>

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
                        country={selectedFighter.country}
                        record={selectedFighter.record}
                        weight={selectedFighter.weight}
                        ranking={selectedFighter.ranking}
                        height={selectedFighter.height}
                        fights={selectedFighter.fights}
                    />
                </div>
            )}

            {matchingFighter && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        right: "20px",
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
                        image={matchingFighter.image}
                        name={matchingFighter.name}
                        country={matchingFighter.country}
                        weight={matchingFighter.weight}
                        height={matchingFighter.height}
                        ranking={matchingFighter.ranking}
                        record={matchingFighter.record}
                        fights={matchingFighter.fights}
                    />
                </div>
            )}
        </>
    );
}

export default Home;

//https://codesandbox.io/s/p5lwvkp7x?file=/package.json
