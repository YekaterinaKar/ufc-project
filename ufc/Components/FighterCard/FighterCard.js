import FighterImage from "../FighterImage/FighterImage";
import { useState, useEffect } from "react";

export default function FighterCard() {
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

    return (
        <>
            {fighters.map((fighter) => (
                <section
                    key={fighter._id}
                    style={{
                        position: "relative",
                        display: "inline-block",
                        width: "250px",
                        height: "350px",
                        backgroundColor: "#fff",
                        padding: "20px",
                        margin: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                        textAlign: "center",
                    }}
                >
                    <FighterImage />
                    <br />
                    <ul
                        style={{ listStyle: "none", padding: "0", margin: "0" }}
                    >
                        <li>Name: {fighter.name}</li>

                        <li>Country: {fighter.country} </li>

                        <li>Weight class: {fighter.weight} </li>

                        <li>Height: </li>

                        <li>Rating: </li>

                        <li>DOB: </li>

                        <li>Record: </li>
                    </ul>
                </section>
            ))}
        </>
    );
}
