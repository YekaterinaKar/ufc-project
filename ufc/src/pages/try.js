
import YouTube from "react-youtube";

import { useState, useEffect } from 'react';
import FighterImage from '../../Components/FighterImage/FighterImage';
import Flag from '../../Components/Flag/Flag';
import Image from 'next/image';
import Header from "../../Components/Header/Header";
import Voting from "../../Components/Voting/Voting";

function FightersPage() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    async function fetchFighters() {
      try {
        const res = await fetch('/api/fighters');
        const data = await res.json();
        setFighters(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFighters();
  }, []);
console.log(fighters)
  return (
      <div>
     
     
          <Image
              src="/My-Jab-Gym-Gloves-original.png"
              alt=""
              width={150}
              height={150}
          />
          <div style={{ fontSize: "300px" }}>⚡</div>
          <ul
              style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  listStyleType: "none",
              }}
          >
              {fighters.map((fighter) => (
                  <li
                      key={fighter._id}
                      style={{ flexBasis: "20%", marginBottom: "1rem" }}
                  >
                      <FighterImage image={fighter.image}></FighterImage>
                      {fighter.name}
                  </li>
              ))}
              <div style={{ fontSize: "200px" }}>⚡</div>
          </ul>
          
      </div>
  );
}

export default FightersPage;

