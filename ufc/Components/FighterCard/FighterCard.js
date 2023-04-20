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
                <FighterImage/>
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <li>Name</li>
                    <li>Country</li>
                    <li>Weight class</li>
                    <li>age</li>
                    <li>win loss records</li>
                    
                </ul>
            </section>
        </>
    );
}
