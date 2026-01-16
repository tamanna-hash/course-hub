import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-gray-700">{course.instructor.name}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-lg">
            ৳{course.price}
          </span>
          <Link href={`/courses/${course._id}`} className="btn btn-sm text-white btn-primary rounded-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
