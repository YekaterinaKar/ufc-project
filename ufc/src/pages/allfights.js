
import { useState, useEffect } from "react";
import Image from "next/image";
import CommonFightsCard from "../../Components/CommonFightsCard/CommonFightsCard";

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
            <div> All the fights</div>
            <Image src="/Jabber.png" alt="" width={300} height={300} />

            {fights.map((fight) => (
                <CommonFightsCard
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
