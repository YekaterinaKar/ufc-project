import dbConnect from "../../../../db/Connect";
import Fight from "../../../../db/models/Fight";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const fights = await Fight.find();
        return response.status(200).json(fights);
    } else if (request.method === "POST") {
        try {
            const { id, comment } = request.body;
            const fight = await Fight.findOne({ id });

            if (!fight) {
                return response.status(404).json({ error: "Fight not found." });
            }

            fight.comments.push(comment);
            await fight.save();

            return response.status(201).json(fight);
        } catch (error) {
            console.error(error);
            return response.status(400).json({ error: error.message });
        }
    }
}
