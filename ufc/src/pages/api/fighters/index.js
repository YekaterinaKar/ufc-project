import Fighter from "./../../../../db/models/Fighter.js";
import dbConnect from "./../../../../db/Connect.js";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const fighters = await Fighter.find();
        return response.status(200).json(fighters);
    } else {
        return response.status(405).json({ message: "Method not allowed" });
    }
}
