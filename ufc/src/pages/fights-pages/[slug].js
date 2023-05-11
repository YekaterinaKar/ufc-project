import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Voting from "../../../Components/Voting/Voting";

import Video from "../../../Components/Video/Video";
import CommonFightsCard from "../../../Components/CommonFightsCard/CommonFightsCard";
import Image from "next/image";
import FighterImage from "../../../Components/FighterImage/FighterImage";
import Header from "../../../Components/Header/Header";

function FightPage() {
    const router = useRouter();
    const { slug } = router.query;

    const [fight, setFight] = useState(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [fairVotes, setFairVotes] = useState(0);
    const [notFairVotes, setNotFairVotes] = useState(0);
    const [rematchVotes, setRematchVotes] = useState(0);
    const [noRematchVotes, setNoRematchVotes] = useState(0);
    

    useEffect(() => {
        async function fetchFight() {
            try {
                const res = await fetch(`/api/fights`);
                const data = await res.json();
                const filteredFight = data.find((f) => f.id === slug);
                console.log("Data from fight page: ", filteredFight);
                setFight(filteredFight);
                setComments(filteredFight.comments || []);
                setFairVotes(filteredFight.fair);
                setNotFairVotes(filteredFight.unfair);
                setRematchVotes(filteredFight.rematch);
                setNoRematchVotes(filteredFight.norematch);
            } catch (error) {
                console.error(error);
            }
        }

        fetchFight();
    }, [slug]);

    const handleBackClick = () => {
        router.back();
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };
    const handleSubmit = async () => {
        if (comment !== "") {
            const res = await fetch("/api/fights", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: slug,
                    comment: comment,
                    fairVotes: fairVotes,
                    notFairVotes: notFairVotes,
                    rematchVotes: rematchVotes,
                    noRematchVotes: noRematchVotes,
                }),
            });

            const updatedFight = await res.json();
            setFight(updatedFight);
            setComment("");
            setFairVotes(updatedFight.fair);
            setNotFairVotes(updatedFight.unfair);
            setRematchVotes(updatedFight.rematch);
            setNoRematchVotes(updatedFight.norematch);
        }
    };

    const totalVotes = fairVotes + notFairVotes;
    const fairPercentage =
        totalVotes === 0 ? 0 : Math.round((fairVotes / totalVotes) * 100);
    const notFairPercentage =
        totalVotes === 0 ? 0 : Math.round((notFairVotes / totalVotes) * 100);

    const totalRematchVotes = rematchVotes + noRematchVotes;
    const rematchPercentage =
        totalRematchVotes === 0
            ? 0
            : Math.round((rematchVotes / totalRematchVotes) * 100);
    const noRematchPercentage =
        totalRematchVotes === 0
            ? 0
            : Math.round((noRematchVotes / totalRematchVotes) * 100);

    const handleFairVote = async () => {
        const fair = fairVotes + 1;
        setFairVotes((prevVotes) => prevVotes + 1);
        const res = await fetch("/api/fights", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: slug,
                comment: comment,
                fairVotes: fair,
                notFairVotes: notFairVotes,
                rematchVotes: rematchVotes,
                noRematchVotes: noRematchVotes,
            }),
        });
    };

    const handleNotFairVote = async() => {
        const unfair = notFairVotes + 1;
        setNotFairVotes((prevVotes) => prevVotes + 1);
         const res = await fetch("/api/fights", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: slug,
                comment: comment,
                fairVotes: fairVotes,
                notFairVotes: unfair,
                rematchVotes: rematchVotes,
                noRematchVotes: noRematchVotes,
            }),
        });
    };

    const handleRematchVote = async () => {
        const rematch = rematchVotes+1
        
        setRematchVotes((prevVotes) => prevVotes + 1);
         const res = await fetch("/api/fights", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({
                 id: slug,
                 comment: comment,
                 fairVotes: fairVotes,
                 notFairVotes: notFairVotes,
                 rematchVotes: rematch,
                 noRematchVotes: noRematchVotes,
             }),
         });
    };

    const handleNoRematchVote = async () => {
        const norematch = noRematchVotes+1

        setNoRematchVotes((prevVotes) => prevVotes + 1);
        const res = await fetch("/api/fights", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: slug,
                comment: comment,
                fairVotes: fairVotes,
                notFairVotes: notFairVotes,
                rematchVotes: rematchVotes,
                noRematchVotes: norematch,
            }),
        });

    };

    if (!fight) {
        return <Image src="/Jabber.png" alt="" width={500} height={500} />;
    }

 

    return (
        <div style={{ position: "relative" }}>
            <div style={{ padding: "20px" }}>
                <p
                    style={{
                        fontSize: "36px",
                        marginBottom: "10px",
                        textAlign: "center",
                    }}
                >
                    {fight.between}{" "}
                </p>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                    }}
                ></div>

                <Video video={fight.video} />

                <Image
                    style={{
                        position: "fixed",
                        top: "50%",
                        right: "20px",
                        transform: "translate(0,-50%)",
                        display: "inline-block",

                        padding: "20px",
                        margin: "20px",
                        borderRadius: "10px",
                    }}
                    src={fight.image1}
                    alt="fighter_image"
                    width={250}
                    height={375}
                />

                <Image
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "20px",
                        transform: "translate(0,-50%)",
                        display: "inline-block",

                        padding: "20px",
                        margin: "20px",
                        borderRadius: "10px",
                    }}
                    src={fight.image2}
                    alt="fighter_image"
                    width={250}
                    height={375}
                />

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
                        marginRight: "7px"
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

export default FightPage;
