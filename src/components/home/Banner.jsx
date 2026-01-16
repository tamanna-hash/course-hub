import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-20 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Learn New Skills, <span className="text-sky-400">Boost Your Career</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Join thousands of students on CourseHub and explore top-quality online courses in web development, AI, design, marketing, and more.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/courses"
              className="btn btn-primary px-6 py-3 text-white rounded-md hover:bg-sky-400 transition"
            >
              Browse Courses
            </Link>
            <Link
              href="/register"
              className="btn btn-outline btn-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
            alt="Online learning"
            className="rounded-xl shadow-xl w-full md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
