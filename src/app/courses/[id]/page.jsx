import { getSingleCourse } from "@/app/actions/server/course";
import EnrollButton from "@/components/buttons/EnrollButton";
import { IoStar } from "react-icons/io5";
export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = (await getSingleCourse(id));
console.log(course);
  if (!course) {
    return {
      title: "Course Not Found | CourseHub",
    };
  }

  return {
    title: `${course.title} | CourseHub`,
    description: course.description,
    openGraph: {
      title: `${course.title} | CourseHub`,
      description: course.description,
      url: `https://yourwebsite.com/courses/${course.slug}`,
      images: [
        {
          url: "https://i.ibb.co.com/S4GMDKtC/Screenshot-2026-01-16-214612.png",
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
      images: [
        "https://i.ibb.co.com/S4GMDKtC/Screenshot-2026-01-16-214612.png",
      ],
    },
  };
}
export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = await getSingleCourse(id);
  console.log(course);
  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero */}
          <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <span className="inline-block mb-3 bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full">
                {course.category}
              </span>
              <h1 className="text-3xl font-bold  mb-3">
                {course.title}
              </h1>
              <p className="text-secondary leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>

          {/* Course Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Duration", value: course.duration },
              { label: "Level", value: course.level },
              {
                label: "Rating",
                value: (
                  <span className="flex items-center justify-center gap-1">
                    {course.rating}
                    <IoStar className="text-yellow-400 text-sm" />
                  </span>
                ),
              },
              { label: "Students", value: `${course.students}+` },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-base-100 rounded-xl shadow p-4 text-center"
              >
                <p className="text-sm text-secondary mb-1">{item.label}</p>
                <p className="text-lg font-semibold ">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Instructor Section */}
          <div className="bg-base-100 rounded-2xl shadow p-6 flex flex-col sm:flex-row items-center gap-6">
            <img
              src={course.instructor?.avatar}
              alt={course.instructor?.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-accent"
            />
            <div>
              <h3 className="text-xl font-semibold ">
                {course.instructor?.name}
              </h3>
              <p className="text-secondary mb-2">{course.instructor?.title}</p>
              <p className="text-sm text-secondary">
                Expert instructor with real-world experience in analytics and
                business intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-base-100 rounded-2xl shadow-lg p-6 h-fit sticky top-24 space-y-6">
          {/* Price Box */}
          <div className="text-center space-y-2">
            <div className="flex justify-center items-center gap-3">
              <span className="text-3xl font-bold text-primary">
                ৳{course.discountPrice}
              </span>
              <span className="line-through text-secondary">
                ৳{course.price}
              </span>
            </div>
            <p className="text-sm text-success font-medium">
              Save ৳{course.price - course.discountPrice}
            </p>
          </div>

          {/* Enroll Button */}
          <EnrollButton course={course} />

          {/* Course Highlights */}
          <div className="border-t pt-4 space-y-3">
            <h4 className="font-semibold ">
              This course includes:
            </h4>
            <ul className="text-sm text-secondary space-y-2">
              <li>✔ Lifetime access</li>
              <li>✔ Certificate of completion</li>
              <li>✔ Practical projects</li>
              <li>✔ Expert support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
