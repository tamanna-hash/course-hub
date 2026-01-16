import { getCourses } from "@/app/actions/server/course";
import React from "react";
import CourseCard from "../cards/CourseCard";

const Courses = async () => {
  const courses = (await getCourses()) || [];
  return (
    <div>
      <h1 className="section-title">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
