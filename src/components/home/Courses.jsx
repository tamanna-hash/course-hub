import { getCourses } from "@/app/actions/server/course";
import React from "react";
import CoursesClient from "./CoursesClient";

const Courses = async () => {
  const rawCourses = (await getCourses()) || [];
  
  // Serialize courses data for client component
  const courses = rawCourses.map(course => ({
    _id: course._id.toString(),
    title: course.title,
    description: course.description,
    price: course.price,
    discountPrice: course.discountPrice,
    category: course.category,
    level: course.level,
    rating: course.rating,
    students: course.students,
    enrolledStudents: course.enrolledStudents || course.students,
    thumbnail: course.thumbnail,
    image: course.image || course.thumbnail,
    instructor: course.instructor,
    duration: course.duration,
    featured: course.featured,
    slug: course.slug
  }));

  return <CoursesClient courses={courses} />;
};

export default Courses;
