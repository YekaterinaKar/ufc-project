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
                    marginTop: "25px",
                }}
                type="text"
            />
            <button
                style={{
                    padding: "19px",
                    border: "black, 1px, solid",
                    borderRadius: "30px",
                    backgroundColor: "#E0FFFF",
                    marginLeft: "10px",
                    marginTop: "25px",
                }}
                type="submit"
            >
                
            </button>
        </form>
    );
}





