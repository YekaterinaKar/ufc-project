import { useState, useEffect } from "react";
import Image from "next/image";
import FightCard from "../../Components/FightCard/FightCard";

export default function AllFight() {
    const [fights, setFights] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredFights, setFilteredFights] = useState([]);

    useEffect(() => {
        async function fetchFights() {
            try {
                const res = await fetch("/api/fights");
                const data = await res.json();
                setFights(data);
                setFilteredFights(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchFights();
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filtered = fights.filter((fight) =>
            fight.between.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFights(filtered);
    };

    const handleSearchReset = () => {
        setSearchTerm("");
        setFilteredFights(fights);
    };

    return (
        <>
            <Image
                src="/Jabber.png"
                alt=""
                width={300}
                height={300}
                style={{
                    position: "fixed",
                    top: "50%",
                    right: "1px",
                    transform: "translate(0,-50%)",
                    display: "inline-block",
                    width: "500px",
                    height: "500px",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "10px",
                    marginTop: "100px",
                }}
            />
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        marginBottom: "20px",
                        marginTop: "20px",
                        width: "350px",
                        padding: "9px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "2px solid #2e2e2e",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        background: "#fffaf2",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 10px",
                        fontSize: "20px",
                        borderRadius: "5px",
                        background: "#2e2e2e",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        marginRight: "10px",
                        marginLeft: "10px",
                        marginTop: "10px",
                        color: "papayawhip",
                    }}
                >
                    Search
                </button>
                <button
                    type="button"
                    onClick={handleSearchReset}
                    style={{
                        padding: "10px 20px",
                        fontSize: "20px",
                        borderRadius: "5px",
                        background: "#2e2e2e",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        color: "papayawhip",
                    }}
                >
                    All
                </button>
            </form>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    width: "75%",
                    alignSelf: "flex-start",
                    marginTop: "50px",
                    marginLeft: "50px",
                }}
            >
                {filteredFights.map((fight) => (
                    <FightCard
                        key={fight.id}
                        setFights={setFights}
                        win={fight.win}
                        between={fight.between}
                        date={fight.date}
                        rounds={fight.rounds}
                        time={fight.time}
                        by={fight.by}
                        id={fight.id}
                    />
                ))}
            </div>
         
        </>
    );
}

