export default function CourseCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden animate-pulse border border-gray-100 dark:border-gray-700">
      
      {/* Image skeleton */}
      <div className="relative h-36 bg-gray-200 dark:bg-gray-700">
        <span className="absolute top-2 left-2 bg-gray-300 dark:bg-gray-600 h-4 w-16 rounded-full" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        
        {/* Title */}
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-20" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-12" />
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-20" />
        </div>
      </div>
    </div>
  );
}
