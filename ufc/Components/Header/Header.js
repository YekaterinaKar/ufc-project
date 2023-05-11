import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "#2e2e2e",
                color: "#fff",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                width: "100%",
                height: "50px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",

                    marginLeft: "600px",
                    color: "papayawhip",
                    fontSize: "40px",
                }}
            >
                Female UFC Fighters
            </h1>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href="/">
                    <button
                        style={{
                            backgroundColor: "papayawhip",
                            border: "none",
                            padding: "12px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            color: "#2e2e2e",
                            fontWeight: "bold",
                            fontSize: "20px",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                            marginRight: "10px",
                        }}
                    >
                        Home
                    </button>
                </Link>
                <Link href="/allfights">
                    <button
                        style={{
                            backgroundColor: "papayawhip",
                            border: "none",
                            padding: "12px",
                            fontSize: "20px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            color: "#2e2e2e",
                            fontWeight: "bold",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                            marginLeft: "15px",
                            marginRight: "15px",
                        }}
                    >
                        Fights
                    </button>
                </Link>
            </div>
            <style jsx>{`
                button:hover {
                    color: papayawhip;
                }
            `}</style>
        </header>
    );
};

export default Header;
