import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

    return (
        <div>
            <h1>{fight.between}</h1>
        </div>
    );
}

export default FightPage;
