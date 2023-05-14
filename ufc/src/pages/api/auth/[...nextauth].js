import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@component/pages/auth/mongoose";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "id",
            clientSecret: "secret",
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
};
export default NextAuth(authOptions);
