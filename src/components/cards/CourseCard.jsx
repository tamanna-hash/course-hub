import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group border border-gray-100 dark:border-gray-700 h-80 flex flex-col">
      
      {/* Image - Fixed height */}
      <div className="relative h-36 overflow-hidden flex-shrink-0">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      {/* Content - Flexible area */}
      <div className="p-4 flex flex-col flex-1 min-h-0">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 flex-shrink-0">
          {course.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 flex-1 min-h-0">
          {course.description}
        </p>

        {/* Instructor - Fixed height */}
        <div className="flex-shrink-0 mb-3">
          {course.instructor && (
            <div className="flex items-center gap-2">
              <img
                src={course.instructor.image || course.instructor.avatar || '/default-avatar.png'}
                alt={course.instructor.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-xs text-gray-700 dark:text-gray-300">{course.instructor.name}</span>
            </div>
          )}
        </div>

        {/* Footer - Always at bottom */}
        <div className="flex items-center justify-between flex-shrink-0 mt-auto pt-2">
          <span className="text-primary font-bold text-base">
            ৳{course.price}
          </span>
          <Link href={`/courses/${course._id}`} className="btn btn-sm text-white btn-primary rounded-full text-xs px-3 py-1 hover:shadow-lg transition-shadow whitespace-nowrap">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
