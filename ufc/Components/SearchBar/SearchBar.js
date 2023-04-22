import Image from "next/image";
import { useState, useEffect } from "react"
import FighterCard from "../FighterCard/FighterCard";





export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const [matchFound, setMatchFound] = useState(false);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        setMatchFound(false); // reset match found when input changes
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for ${searchValue}`);
        setMatchFound(
            fighters.some(
                (fighter) =>
                    fighter.name.toLowerCase() ===
                    searchValue.toLowerCase().trim()
            )
        ); // check if there is a fighter with matching name
    };

    const [fighters, setFighters] = useState([]);

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

    const filteredFighters = fighters.filter((fighter) =>
        fighter.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

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
                        backgroundColor: "#E0FFFF",
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
                        backgroundColor: "#E0FFFF",
                        marginLeft: "10px",
                        marginTop: "25px",
                    }}
                    type="submit"
                >
                   
                </button>
            </form>
            {matchFound &&
                filteredFighters.map((fighter) => (
                    <FighterCard
                        key={fighter._id}
                        name={fighter.name}
                        country={fighter.country}
                        weight={fighter.weight}
                    />
                ))}
        </div>
    );
}



