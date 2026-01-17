import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";
import HowItWorks from "@/components/home/HowItWorks";
import Instructors from "@/components/home/Instructors";
import NewsLetter from "@/components/home/NewsLetter";
import PopularCategories from "@/components/home/PopularCategories";
import Testimonials from "@/components/home/Testimonials";
import { getCourses } from "@/app/actions/server/course";

// Helper function to serialize MongoDB data
const serializeCourse = (course) => {
  return {
    _id: course._id.toString(),
    title: course.title,
    slug: course.slug,
    description: course.description,
    price: course.price,
    discountPrice: course.discountPrice,
    originalPrice: course.originalPrice,
    duration: course.duration,
    level: course.level,
    rating: course.rating,
    students: course.students,
    enrolledStudents: course.enrolledStudents || course.students,
    category: course.category,
    thumbnail: course.thumbnail,
    image: course.image || course.thumbnail,
    instructor: course.instructor ? {
      id: course.instructor.id,
      name: course.instructor.name,
      title: course.instructor.title,
      role: course.instructor.role,
      company: course.instructor.company,
      image: course.instructor.image,
      avatar: course.instructor.avatar,
      rating: course.instructor.rating,
      bio: course.instructor.bio,
      specialties: course.instructor.specialties,
      social: course.instructor.social
    } : null,
    features: course.features,
    syllabus: course.syllabus,
    language: course.language,
    certificate: course.certificate,
    featured: course.featured,
    createdAt: course.createdAt && typeof course.createdAt.toISOString === 'function' 
      ? course.createdAt.toISOString() 
      : course.createdAt || null
  };
};

export default async function Home() {
  // Fetch courses data from database
  const rawCourses = await getCourses();
  
  // Serialize courses data
  const courses = rawCourses.map(serializeCourse);
  
  // Extract unique instructors from courses data
  const instructorsMap = new Map();
  
  courses.forEach(course => {
    if (course.instructor) {
      const instructorId = course.instructor.id || course.instructor.name;
      if (!instructorsMap.has(instructorId)) {
        instructorsMap.set(instructorId, {
          id: instructorId,
          name: course.instructor.name,
          title: course.instructor.title || course.instructor.role,
          company: course.instructor.company,
          image: course.instructor.image || course.instructor.avatar,
          rating: course.instructor.rating,
          bio: course.instructor.bio,
          specialties: course.instructor.specialties,
          courseCount: 0,
          totalStudents: 0,
          social: course.instructor.social
        });
      }
      
      // Add course to instructor's stats
      const instructor = instructorsMap.get(instructorId);
      instructor.courseCount += 1;
      instructor.totalStudents += course.enrolledStudents || 0;
    }
  });

  const instructorsData = Array.from(instructorsMap.values()).slice(0, 8);

  // Get featured courses (first 4 courses or courses marked as featured)
  const featuredCourses = courses
    .filter(course => course.featured === true)
    .slice(0, 4);
  
  // If no featured courses, take first 4 courses
  const finalFeaturedCourses = featuredCourses.length > 0 
    ? featuredCourses 
    : courses.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Banner />
      <HowItWorks />
      <PopularCategories />
      <Instructors instructorsData={instructorsData} />
      <Featured featuredCourses={finalFeaturedCourses} />
      <Testimonials />
      <NewsLetter />
    </div>
  );
}
