import { useState, useEffect } from "react";
import FighterCard from "../FighterCard/FighterCard";
import FighterImage from "../FighterImage/FighterImage";

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const [matchingFighter, setMatchingFighter] = useState(null);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
      //  setMatchingFighter(null); // reset match found when input changes (but i need it just  on search button click)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for ${searchValue}`);
        const foundFighter = fighters.find(
            (fighter) =>
                fighter.name.toLowerCase() === searchValue.toLowerCase().trim()
        );
        setMatchingFighter(foundFighter || null);
    };

    const [fighters, setFighters] = useState([]);
console.log("Fighters from Searchbar", fighters)
    useEffect(() => {
        async function fetchFighters() {
            try {
                const res = await fetch("/api/fighters");
                const data = await res.json();
                setFighters(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchFighters();
    }, []);

console.log("Mathing fighter",matchingFighter)

    return (
        <div>
            <form
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 0,
                }}
                onSubmit={handleFormSubmit}
            >
                <input
                    style={{
                        padding: "10px",
                        border: "black, 1px, solid",
                        borderRadius: "20px",
                        fontSize: "18px",
                        width: "400px",
                        marginRight: "10px",
                        backgroundColor: "#dfeefa",
                        marginTop: "25px",
                    }}
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                />
                <button
                    style={{
                        padding: "19px",
                        border: "black, 1px, solid",
                        borderRadius: "30px",
                        backgroundColor: "#dfeefa",
                        marginLeft: "10px",
                        marginTop: "25px",
                    }}
                    type="submit"
                ></button>
            </form>
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
                    />
                </div>
            )}
        </div>
    );
}
