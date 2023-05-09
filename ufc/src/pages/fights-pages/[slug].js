import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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


    if (!fight) {
        return <Image src="/Jabber.png" alt="" width={500} height={500} />;
    }

    return (
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
        </div>
    );
}

export default FightPage;
