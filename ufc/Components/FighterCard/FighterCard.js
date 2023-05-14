import FighterImage from "../FighterImage/FighterImage";
import StarButton from "../StarButton/StarButton";
import { useState } from "react";


export default function FighterCard({name, country, weight, image, height, ranking,  record, dob}) {

   
 const [isFavourite, setIsFavourite] = useState(false);
 const addFavourite = () => {
     setIsFavourite(true);
 };
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
