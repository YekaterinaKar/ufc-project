import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Video from "../../../Components/Video/Video";
import CommonFightsCard from "../../../Components/CommonFightsCard/CommonFightsCard";


function FightPage() {
    const router = useRouter();
    const { slug } = router.query;

    const [fight, setFight] = useState(null);

    useEffect(() => {
        async function fetchFight() {
            try {
                const res = await fetch(`/api/fights`);
                const data = await res.json();
                const filteredFight = data.find((f) => f.id === slug);
                console.log("Data from fight page: ", filteredFight);
                setFight(filteredFight);
            } catch (error) {
                console.error(error);
            }
        }

        fetchFight();
    }, [slug]);

    if (!fight) {
        return <div>Loading...</div>;
    }

    const handleBackClick = () => {
        router.back();
    };

    return (
        <div style={{  padding: "20px" }}>
            <h1
                style={{
                    
                    fontSize: "36px",
                    marginBottom: "10px",
                }}
            >
                {fight.between}
            </h1>
            <Video video={fight.video} />
            <CommonFightsCard
                key={fight.id}
                win={fight.win}
                between={fight.between}
                date={fight.date}
                rounds={fight.rounds}
                time={fight.time}
                by={fight.by}
                id={fight.id}
            />
            <textarea
                style={{
                    padding: "10px",
                    marginBottom: "20px",
                    width: "100%",
                    minHeight: "200px",
                }}
                aria-label="Comments"
            ></textarea>
            <button
                style={{
                    backgroundColor: "grey",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    marginRight: "10px",
                }}
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
        </div>
    );
}

export default FightPage;
