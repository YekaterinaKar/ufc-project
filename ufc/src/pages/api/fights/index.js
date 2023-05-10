import dbConnect from "../../../../db/Connect";
import Fight from "../../../../db/models/Fight";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        try {
            const fights = await Fight.find();
            return response.status(200).json(fights);
        } catch (error) {
            console.error(error);
            return response
                .status(500)
                .json({ error: "Internal Server Error" });
        }
    } else if (request.method === "POST") {
        console.log("I am here");
        try {
            const {
                id,
                comment,
                fairVotes,
                notFairVotes,
                rematchVotes,
                noRematchVotes,
            } = request.body;
            const fight = await Fight.findOne({ id });

            //     if (!fight) {
            //     return response.status(404).json({ error: "Fight not found." });
            //}

            console.log(fairVotes);
            if (comment) fight.comments.push(comment);
            fight.fair = fairVotes;
            fight.unfair = notFairVotes;
            fight.rematch = rematchVotes;
            fight.norematch = noRematchVotes;
            await fight.save();

            return response.status(201).json(fight);
        } catch (error) {
            console.error(error);
            return response.status(400).json({ error: error.message });
        }
    } else {
        return response.status(405).json({ error: "Method Not Allowed" });
    }
}
