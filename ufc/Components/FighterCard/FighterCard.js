import FighterImage from "../FighterImage/FighterImage";

import { useState, useEffect } from "react";

export default function FighterCard() {
    const [fighters, setFighters] = useState([]);

  useEffect(() => {
    async function fetchFighters() {
      try {
        const res = await fetch('/api/fighters');
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
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                }}
            >
                <FighterImage />
                <br />
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <li>Name: Amanda Nunes</li>
                    <br />
                    <li>Country: Brazil</li>
                    <br />
                    <li>Weight class: Bandetweight</li>
                    <br />
                    <li>age</li>
                    <br />
                    <li>height</li>
                    <br />
                    <li>win loss records: 23, 5, 1</li>
                </ul>
            </section>
        </>
    );
}
