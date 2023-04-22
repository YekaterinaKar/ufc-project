import FighterImage from "../FighterImage/FighterImage";


export default function FighterCard({name, country, weight, image}) {
    

    return (
        <>
            <section
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "20px",
                    transform: "translateY(-50%)",
                    display: "inline-block",
                    width: "250px",
                    height: "500px",
                    backgroundColor: "#fff",
                    padding: "20px",
                    margin: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                }}
            >
                <FighterImage image={image} />
                <br />
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <li style ={{fontWeight: "bold"}}>
                        Name: {name}
                    </li>

                    <li>Country: {country} </li>

                    <li>Weight class: {weight} </li>

                    <li>Height: </li>

                    <li>Rating: </li>

                    <li>DOB: </li>

                    <li>Record: </li>
                </ul>
            </section>
        </>
    );
}
