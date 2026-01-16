import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getCourses = async () => {
  const courses = (await dbConnect(collections.COURSES)).find().toArray();
  return courses;
};
export const getSingleCourse = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const course = (await dbConnect(collections.COURSES)).findOne(query);
  return course || {};
};
