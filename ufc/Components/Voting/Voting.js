import { useEffect } from "react";
export default function Voting (){
    
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
    }, []);

   

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

    const handleFairVote = () => {
        setFairVotes((prevVotes) => prevVotes + 1);
    };

    const handleNotFairVote = () => {
        setNotFairVotes((prevVotes) => prevVotes + 1);
    };

    const handleRematchVote = () => {
        setRematchVotes((prevVotes) => prevVotes + 1);
    };

    const handleNoRematchVote = () => {
        setNoRematchVotes((prevVotes) => prevVotes + 1);
    };

    return (<>
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
            
    </>)
        }