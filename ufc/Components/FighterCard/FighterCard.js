import FighterImage from "../FighterImage/FighterImage";
import { useState, useEffect } from "react";

export default function FighterCard({name, country, weight}) {
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
            <section
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "20px",
                    transform: "translateY(-50%)",
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
                <FighterImage />
                <br />
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <li>Name: {name}</li>

                    <li>Country: {country} </li>

                    <li>Weight class: {weight} </li>

                    <li>Height: </li>

                    <li>Rating: </li>

                    <li>DOB: </li>
                    
                    <li>Record: </li>
                </ul>
            </section>
        </>
    );
}
