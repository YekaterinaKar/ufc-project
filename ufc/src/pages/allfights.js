import { useState, useEffect } from "react";
import Image from "next/image";

import FightCard from "../../Components/FightCard/FightCard";

export default function AllFight() {
    const [fights, setFights] = useState([]);

    useEffect(() => {
        async function fetchFights() {
            try {
                const res = await fetch("/api/fights");
                const data = await res.json();
                setFights(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchFights();
    }, []);
    console.log(fights);

    return (
        <>
            <Image src="/Jabber.png" alt="" width={300} height={300} style={{
                        position: "fixed",
                        top: "50%",
                        right: "20px",
                        transform: "translate(0,-50%)",
                        display: "inline-block",
                        width: "500px",
                        height: "500px",
                        
                        padding: "20px",
                        margin: "20px",
                        borderRadius: "10px",
                        
                        
                    }} />

            {fights.map((fight) => (
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
            
        </>
    );
}
