import { useState } from "react";

export default function StarButton({ addFavourite }) {
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => {
        setIsFilled(!isFilled);
        if (addFavourite && !isFilled) {
            addFavourite();
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                border: "none",
                background: "none",
                outline: "none",
                cursor: "pointer",
                padding: "0",
                margin: "0",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{
                    width: "24px",
                    height: "24px",
                    fill: isFilled ? "gold" : "none",
                    stroke: "gold",
                    strokeWidth: "2",
                }}
            >
                <path d="M12 17.27l-5.74 3.48 1.64-6.01L2.76 9.8l6.08-.44L12 3l2.16 6.36 6.08.44-4.14 3.94 1.64 6.01z" />
            </svg>
        </button>
    );
}
