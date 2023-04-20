import Image from "next/image";
export default function SearchBar() {
    return (
        <form
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 0,
            }}
        >
            <input
                style={{
                    padding: "10px",
                    border: "black, 1px, solid",
                    borderRadius: "20px",
                    fontSize: "18px",
                    width: "400px",
                    marginRight: "10px",
                    backgroundColor: "#E0FFFF",
                }}
                type="text"
            />
            <button
                style={{
                    backgroundColor: "#E0FFFF",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    padding: "10px",
                    fontSize: "20px",
                }}
                type="submit"
            >
                <Image
                    src="/s.png"
                    alt="magnifying glass"
                    width={45}
                    height={45}
                />
            </button>
        </form>
    );
}





