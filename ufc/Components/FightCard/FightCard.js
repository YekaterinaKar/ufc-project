import { useState, useEffect } from "react";
import Link from "next/link";


export default function FightCard({
    between,
    win,
    date,
    rounds,
    time,
    by,
    id,
   
}) {
   

    return (
        <>
            {(
                <div style={{ display: "flex" }}>
                   
                    <section
                        style={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                            textAlign: "center",
                            margin: "10px", 
                            
                        }}
                    >
                       
                        <ul
                            style={{
                                listStyle: "none",
                                padding: "0",
                                margin: "0",
                            }}
                        >
                            <li
                                style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                                <Link href={`/fights-pages/${id}`}>
                                    {between}
                                </Link>
                            </li>

                            <li style={{ marginTop: "10px" }}>win: {win}</li>

                            <li style={{ marginTop: "10px" }}>date: {date}</li>

                            <li style={{ marginTop: "10px" }}>
                                rounds: {rounds}
                            </li>

                            <li style={{ marginTop: "10px" }}>time: {time}</li>

                            <li style={{ marginTop: "10px" }}>by: {by}</li>
                        </ul>
                    </section>
                </div>
            )}
        </>
    );
}
