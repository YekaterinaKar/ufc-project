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
      <Link href="/favourites">
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
          Favourites
        </button>
      </Link>

      <h1 style={{ margin: "0" }}>Female UFC Fighters</h1>

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
    </header>
  );
};

export default Header;



