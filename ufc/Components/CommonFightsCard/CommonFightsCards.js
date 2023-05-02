import { useState, useEffect } from "react";

export default function CommonFightsCard({between, win, date, rounds, time, by}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

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

 console.log("Fights", fights)
 

 return (
     <>
         {isVisible && (
             <section
                 style={{
                     position: "fixed",
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50%, 50%)",
                     backgroundColor: "#fff",
                     padding: "20px",
                     borderRadius: "10px",
                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                     textAlign: "center",
                 }}
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
