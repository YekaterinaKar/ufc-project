import FighterImage from "../FighterImage/FighterImage";



export default function FighterCard({name, country, weight, image, height, ranking,  record, dob}) {

   

    return (
        <>
            <section>
                <FighterImage image={image} />
                <br />
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <li style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {" "}
                        {name}
                    </li>

                    <li style={{ marginTop: "10px" }}>Age: {dob} </li>

                    <li style={{ marginTop: "10px" }}>Country: {country} </li>

                    <li style={{ marginTop: "10px" }}>
                        Weight class: {weight}{" "}
                    </li>

                    <li style={{ marginTop: "10px" }}>Height: {height} cm</li>

                    <li style={{ marginTop: "10px" }}>Ranking: {ranking} </li>

                    <li style={{ marginTop: "10px" }}>Record:{record} </li>
                </ul>
            </section>
        </>
    );
}
