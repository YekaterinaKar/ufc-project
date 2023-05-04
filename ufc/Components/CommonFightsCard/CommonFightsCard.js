import { useState, useEffect } from "react";

export default function CommonFightsCard({between, win, date, rounds, time, by, setFights, foundObject}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

 //const [fights, setFights] = useState([]);

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
    ;
 }, []);

 

 return (
     <>
         {isVisible && (
             <section
                
             >
                 <button
                     style={{
                         position: "absolute",
                         top: "10px",
                         right: "10px",
                         background: "none",
                         border: "none",
                         cursor: "pointer",
                         fontSize: "1.2rem",
                     }}
                     onClick={handleClose}
                 >
                     X
                 </button>
                 <br></br>
                 <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                     <li style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {between}
                     </li>

                     <li style={{ marginTop: "10px" }}>win: {win}</li>

                     <li style={{ marginTop: "10px" }}>
                         date: {date}
                     </li>

                     <li style={{ marginTop: "10px" }}>
                         rounds: {rounds}
                     </li>

                     <li style={{ marginTop: "10px" }}>
                         time: {time}
                     </li>

                     <li style={{ marginTop: "10px" }}>by: {by}</li>
                 </ul>
             </section>
         )}
     </>
 );
}
