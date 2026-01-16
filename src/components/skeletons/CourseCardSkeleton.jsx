export default function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image skeleton */}
      <div className="relative h-48 bg-gray-200">
        <span className="absolute top-3 left-3 bg-gray-300 h-5 w-20 rounded-full" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        
        {/* Title */}
        <div className="h-5 bg-gray-300 rounded w-3/4" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <div className="space-y-1">
            <div className="h-3 bg-gray-300 rounded w-24" />
            <div className="h-2 bg-gray-200 rounded w-16" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="h-5 bg-gray-300 rounded w-16" />
          <div className="h-8 bg-gray-300 rounded-full w-24" />
        </div>
      </div>
    </div>
  );
}
