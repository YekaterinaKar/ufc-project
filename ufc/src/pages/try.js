
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
          <div>
              <h2>Leave a comment</h2>
              <textarea
                  style={{
                      padding: "10px",
                      marginBottom: "20px",
                      width: "100%",
                      minHeight: "100px",
                      resize: "none",
                  }}
                  aria-label="Leave a comment"
                  value={comment}
                  onChange={handleCommentChange}
              ></textarea>
              <button
                  style={{
                      backgroundColor: "#2e2e2e",
                      color: "white",
                      padding: "10px 10px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginRight: "7px",
                  }}
                  onClick={handleSubmit}
              >
                  Submit
              </button>
              <button
                  style={{
                      backgroundColor: "#2e2e2e",
                      color: "white",
                      padding: "10px 10px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      fontSize: "15px",
                  }}
                  onClick={handleBackClick}
              >
                  Back
              </button>
              <section>
                  <ul style={{ listStyle: "none" }}>
                      {fight.comments?.map((comment, index) => {
                          return (
                              <li
                                  key={index}
                                  style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                      padding: "10px",
                                      margin: "10px 0",
                                      backgroundColor: "#F5F5F5",
                                      borderRadius: "5px",
                                      boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                                      position: "relative",
                                  }}
                              >
                                  {comment}
                                  <button
                                      style={{
                                          position: "absolute",
                                          top: "5px",
                                          right: "5px",
                                          backgroundColor: "transparent",
                                          border: "none",
                                          cursor: "pointer",
                                      }}
                                  >
                                      x
                                  </button>
                              </li>
                          );
                      })}
                  </ul>
              </section>

              <div
                  style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                  }}
              >
                  <h3>Do you think the fight was judged fair?</h3>

                  <button onClick={handleFairVote}>
                      <div style={{ flex: 1 }}>
                          <div
                              style={{
                                  fontSize: "24px",
                                  fontWeight: "bold",
                                  marginBottom: "5px",
                              }}
                          >
                              {fairPercentage}%
                          </div>
                          <div style={{ fontSize: "16px" }}>Fair</div>
                      </div>
                  </button>
                  <div
                      style={{
                          height: "50px",
                          width: "5px",
                          backgroundColor: "black",
                          margin: "0 10px",
                      }}
                  ></div>
                  <button onClick={handleNotFairVote}>
                      <div style={{ flex: 1 }}>
                          <div
                              style={{
                                  fontSize: "24px",
                                  fontWeight: "bold",
                                  marginBottom: "5px",
                              }}
                          >
                              {notFairPercentage}%
                          </div>
                          <div style={{ fontSize: "16px" }}>Not Fair</div>
                      </div>
                  </button>
              </div>
              <div
                  style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                  }}
              >
                  <h3>Should the fighters get a rematch?</h3>

                  <button onClick={handleRematchVote}>
                      <div style={{ flex: 1 }}>
                          <div
                              style={{
                                  fontSize: "24px",
                                  fontWeight: "bold",
                                  marginBottom: "5px",
                              }}
                          >
                              {rematchPercentage}%
                          </div>
                          <div style={{ fontSize: "16px" }}>Rematch</div>
                      </div>
                  </button>
                  <div
                      style={{
                          height: "50px",
                          width: "5px",
                          backgroundColor: "black",
                          margin: "0 10px",
                      }}
                  ></div>
                  <button onClick={handleNoRematchVote}>
                      <div style={{ flex: 1 }}>
                          <div
                              style={{
                                  fontSize: "24px",
                                  fontWeight: "bold",
                                  marginBottom: "5px",
                              }}
                          >
                              {noRematchPercentage}%
                          </div>
                          <div style={{ fontSize: "16px" }}>No Rematch</div>
                      </div>
                  </button>
              </div>
          </div>
      </div>
  );
}

export default FightersPage;

