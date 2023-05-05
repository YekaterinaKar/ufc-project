
import YouTube from "react-youtube";

import { useState, useEffect } from 'react';
import FighterImage from '../../Components/FighterImage/FighterImage';
import Flag from '../../Components/Flag/Flag';
import Image from 'next/image';

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
          <div>
              {" "}
              <YouTube videoId="_NJLkTl63FM" />
          </div>

          <div>
              <YouTube videoId="UF1DkF28zic" />
          </div>
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

/*
 {
     CommonFights?.length > 0 && !isSameFighter ? (
         <div>
             <CommonFightsCard
                 isVisible={isVisible}
                 setFights={setFights}
                 win={secondFoundObject?.win}
                 between={secondFoundObject?.between}
                 date={secondFoundObject?.date}
                 rounds={secondFoundObject?.rounds}
                 time={secondFoundObject?.time}
                 by={secondFoundObject?.by}
             />
         </div>
     ) : null;
 } 
 */