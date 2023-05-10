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
            }}
        >
            <div>
                <Link href="/allfights">
                    <button
                        style={{
                            backgroundColor: "#fff",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            color: "#2e2e2e",
                            fontWeight: "bold",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                            marginRight: "10px",
                        }}
                    >
                        Fights
                    </button>
                </Link>
            </div>

            <h1
                style={{
                    textAlign: "center",
                    flex: 1,
                    margin: "0 auto",
                }}
            >
                Female UFC Fighters
            </h1>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href="/">
                    <button
                        style={{
                            backgroundColor: "#fff",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            color: "#2e2e2e",
                            fontWeight: "bold",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                            marginRight: "10px",
                        }}
                    >
                        Home
                    </button>
                </Link>
                <Link href="/auth/signin">
                    <button
                        style={{
                            backgroundColor: "#fff",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            color: "#2e2e2e",
                            fontWeight: "bold",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        Log In
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
