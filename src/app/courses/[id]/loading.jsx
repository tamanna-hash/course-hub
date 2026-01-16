export default function CourseDetailsSkeleton() {
  return (
    <div className="bg-base-200 min-h-screen py-10 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Hero */}
          <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-72 bg-gray-300" />
            <div className="p-6 space-y-4">
              <div className="h-6 w-32 bg-gray-300 rounded-full" />
              <div className="h-8 w-3/4 bg-gray-300 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-base-100 rounded-xl shadow p-4 text-center space-y-2"
              >
                <div className="h-3 w-16 bg-gray-200 rounded mx-auto" />
                <div className="h-5 w-20 bg-gray-300 rounded mx-auto" />
              </div>
            ))}
          </div>

          {/* Instructor Section */}
          <div className="bg-base-100 rounded-2xl shadow p-6 flex items-center gap-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-40 bg-gray-300 rounded" />
              <div className="h-4 w-28 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-base-100 rounded-2xl shadow-lg p-6 h-fit sticky top-24 space-y-6">

          {/* Price */}
          <div className="space-y-2 text-center">
            <div className="h-8 w-32 bg-gray-300 rounded mx-auto" />
            <div className="h-4 w-24 bg-gray-200 rounded mx-auto" />
          </div>

          {/* Button */}
          <div className="h-12 w-full bg-gray-300 rounded-full" />

          {/* Highlights */}
          <div className="border-t pt-4 space-y-3">
            <div className="h-4 w-40 bg-gray-300 rounded" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-3 w-full bg-gray-200 rounded" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
