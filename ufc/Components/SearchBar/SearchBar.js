import { useState, useEffect } from "react";
import FighterCard from "../FighterCard/FighterCard";
import FighterImage from "../FighterImage/FighterImage";

export default function SearchBar({setMatchingFighter}) {
    const [searchValue, setSearchValue] = useState("");
    //const [matchingFighter, setMatchingFighter] = useState(null);

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
           
        </div>
    );
}
