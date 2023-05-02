import dbConnect from "../../../../db/Connect";
import Fight from "../../../../db/models/Fight";


export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const fights= await Fight.find();
        return response.status(200).json(fights);
        
    } else {
        return response.status(405).json({ message: "Method not allowed" });
    }
}