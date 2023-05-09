import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Voting from "../../../Components/Voting/Voting";

import Video from "../../../Components/Video/Video";
import CommonFightsCard from "../../../Components/CommonFightsCard/CommonFightsCard";
import Image from "next/image";
import FighterImage from "../../../Components/FighterImage/FighterImage";

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
                }),
            });

            const updatedFight = await res.json();
            setFight(updatedFight);
            setComment("");
        }
    };
     const totalVotes = fairVotes + notFairVotes;
     const fairPercentage =
         totalVotes === 0 ? 0 : Math.round((fairVotes / totalVotes) * 100);
     const notFairPercentage =
         totalVotes === 0 ? 0 : Math.round((notFairVotes / totalVotes) * 100);

    if (!fight) {
        return <Image src="/Jabber.png" alt="" width={500} height={500} />;
    }
 

    return (
        <div>
            <div style={{ padding: "20px" }}>
                <h1
                    style={{
                        fontSize: "36px",
                        marginBottom: "10px",
                        textAlign: "center",
                    }}
                >
                    {fight.between}
                </h1>
               <CommonFightsCard between ={fight.between}
               id = {fight.id}
               win ={fight.win}
               date = {fight.date}
               rounds = {fight.rounds}
               time = {fight.time}
               by = {fight.by}
               /> 
                <Video video={fight.video} />

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
                        backgroundColor: "grey",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        marginRight: "10px",
                    }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <button
                    style={{
                        backgroundColor: "grey",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "5px",
                    }}
                    onClick={handleBackClick}
                >
                    Back
                </button>
                <ul style={{ listStyle: "none" }}>
                    {fight.comments?.map((comment, index) => {
                        return <li key={index}>{comment}</li>;
                    })}
                </ul>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}
                >
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
                    <div
                        style={{
                            height: "50px",
                            width: "5px",
                            backgroundColor: "black",
                            margin: "0 10px",
                        }}
                    ></div>
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
                </div>

                <button onClick={() => setFairVotes((prev) => prev + 1)}>
                    Fair
                </button>
                <button onClick={() => setNotFairVotes((prev) => prev + 1)}>
                    Not Fair
                </button>
            </div>

            
        </div>
    );
}

export default FightPage;
