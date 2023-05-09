import { useState } from "react";
import FighterCard from "../../Components/FighterCard/FighterCard";
import StarButton from "../../Components/StarButton/StarButton";

export default function Favourites() {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (fighter) => {
        setFavourites((prevFavourites) => [...prevFavourites, fighter]);
    };

    return (
        <div>
            <h2>Your Favourites</h2>
            {favourites.map((fighter, index) => (
                <FighterCard
                    key={index}
                    name={fighter.name}
                    country={fighter.country}
                    weight={fighter.weight}
                    image={fighter.image}
                    height={fighter.height}
                    ranking={fighter.ranking}
                    record={fighter.record}
                    dob={fighter.dob}
                />
            ))}
        </div>
    );
}