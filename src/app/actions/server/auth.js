"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
const userCollection = await dbConnect(collections.USERS);
export const postUser = async (payload) => {
  const { email, password, name } = payload;
  // check payload
  if (!email || !password) return null;
  //  check user
  const ifExist = await userCollection.findOne({ email });
  if (ifExist) return null;
  // create user
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };
  // insert user
  const result = await userCollection.insertOne(newUser);
  console.log(result);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};
export const loginUser = async (payload) => {
  const { email, password, name } = payload;

  if (!email || !password) return null;

  const user = await userCollection.findOne({ email });
  if (!user) return null;
  const isMatched = await bcrypt.compare(password,user.password)
  if(isMatched){
    return user
  }else{
    return null
  }
};
