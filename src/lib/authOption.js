import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/app/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { collections, dbConnect } from "./dbConnect";
const collection = await dbConnect(collections.USERS)
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      const isExist = await collection.findOne({
        email: user.email,
        provider: account?.provider,
      });
      if (isExist) {
        return true;
      }
      const newUser = {
        provider: account?.provider,
        name: user?.name,
        email: user?.email,
        image: user?.image,
        role: "user",
      };
      const result = await collection.insertOne(newUser);
      return result.acknowledged;
    },
  },
};
