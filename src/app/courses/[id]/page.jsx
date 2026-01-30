import { getSingleCourse } from "@/app/actions/server/course";
import EnrollButton from "@/components/buttons/EnrollButton";
import { 
  IoStar, 
  IoTime, 
  IoTrendingUp, 
  IoPeople, 
  IoCheckmarkCircle, 
  IoPlayCircle,
  IoDocumentText,
  IoTrophy,
  IoShield,
  IoInfinite,
  IoDownload,
  IoHeart,
  IoShare,
  IoBookmark
} from "react-icons/io5";
export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = (await getSingleCourse(id));
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
    <div className="bg-base-100 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 dark:bg-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"></div>
        
        {/* Subtle Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 dark:bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/3 dark:bg-white/2 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20">
                  <IoTrendingUp className="w-4 h-4" />
                  {course.category}
                </span>
                <div className="flex items-center gap-1 text-yellow-300 dark:text-yellow-400">
                  <IoStar className="w-5 h-5 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-white/80   /70">({course.students}+ students)</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {course.title}
              </h1>
              
              <p className="text-xl text-white/90   /80 leading-relaxed">
                {course.description}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <IoTime className="w-5 h-5 text-blue-200 dark:text-blue-300" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoTrendingUp className="w-5 h-5 text-green-200 dark:text-green-300" />
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoPeople className="w-5 h-5 text-purple-200 dark:text-purple-300" />
                  <span className="font-medium">{course.students}+ enrolled</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 dark:border-white/10 transition-all duration-300">
                  <IoHeart className="w-5 h-5" />
                  <span>Save</span>
                </button>
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 dark:border-white/10 transition-all duration-300">
                  <IoShare className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
            
            {/* Right Content - Course Preview */}
            <div className="relative">
              <div className="relative bg-white/5 dark:bg-white/3 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-white/5">
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-white/70  text-sm">Course Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Course Overview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { 
                  icon: IoTime, 
                  label: "Duration", 
                  value: course.duration,
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
                  iconColor: "text-blue-600 dark:text-blue-400"
                },
                { 
                  icon: IoTrendingUp, 
                  label: "Level", 
                  value: course.level,
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
                  iconColor: "text-green-600 dark:text-green-400"
                },
                {
                  icon: IoStar,
                  label: "Rating",
                  value: course.rating,
                  color: "from-yellow-500 to-orange-500",
                  bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
                  iconColor: "text-yellow-600 dark:text-yellow-400"
                },
                { 
                  icon: IoPeople, 
                  label: "Students", 
                  value: `${course.students}+`,
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
                  iconColor: "text-purple-600 dark:text-purple-400"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${item.bgColor} rounded-2xl p-6 border border-white/50 dark:border-gray-600/50 backdrop-blur-sm hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600     mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-gray-900   ">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* What You'll Learn */}
            <div className="bg-white dark:bg-gray-800  rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl text-black font-bold  mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <IoCheckmarkCircle className="w-5 h-5 text-white" />
                </div>
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Master the fundamentals and advanced concepts",
                  "Build real-world projects from scratch",
                  "Learn industry best practices and standards",
                  "Get hands-on experience with modern tools",
                  "Understand practical implementation techniques",
                  "Develop problem-solving skills"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                    <IoCheckmarkCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="text-black bg-white rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <IoDocumentText className="w-5 h-5 text-white" />
                </div>
                Course Content
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Introduction & Setup", lessons: 5, duration: "45 min" },
                  { title: "Core Concepts", lessons: 8, duration: "2h 30min" },
                  { title: "Practical Applications", lessons: 12, duration: "4h 15min" },
                  { title: "Advanced Techniques", lessons: 6, duration: "2h 45min" },
                  { title: "Final Project", lessons: 3, duration: "1h 30min" }
                ].map((section, i) => (
                  <div key={i} className="border border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold  ">{section.title}</h3>
                          <p className="text-sm text-gray-600 ">{section.lessons} lessons • {section.duration}</p>
                        </div>
                      </div>
                      <IoPlayCircle className="w-6 h-6 text-gray-400  hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900    mb-6">Meet Your Instructor</h2>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative">
                  <img
                    src={course.instructor?.avatar}
                    alt={course.instructor?.name}
                    className="w-24 h-24 rounded-2xl object-cover border-4 border-gradient-to-r from-blue-500 to-purple-500"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <IoTrophy className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900    mb-2">
                    {course.instructor?.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{course.instructor?.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Expert instructor with real-world experience in analytics and business intelligence. 
                    Passionate about teaching and helping students achieve their career goals.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600    ">
                    <div className="flex items-center gap-1">
                      <IoPeople className="w-4 h-4" />
                      <span>10,000+ students taught</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoStar className="w-4 h-4 text-yellow-500" />
                      <span>4.9 instructor rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              {/* Price Section */}
              <div className="text-center mb-6">
                <div className="flex justify-center items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    ৳{course.discountPrice}
                  </span>
                  <span className="text-xl line-through text-gray-500    ">
                    ৳{course.price}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  <IoTrophy className="w-4 h-4" />
                  Save ৳{course.price - course.discountPrice}
                </div>
              </div>

              {/* Enroll Button */}
              <div className="mb-6">
                <EnrollButton course={course} />
              </div>

              {/* Course Includes */}
              <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                <h4 className="font-bold text-gray-900    mb-4 flex items-center gap-2">
                  <IoShield className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  This course includes:
                </h4>
                <ul className="space-y-3">
                  {[
                    { icon: IoInfinite, text: "Lifetime access" },
                    { icon: IoTrophy, text: "Certificate of completion" },
                    { icon: IoDocumentText, text: "Practical projects" },
                    { icon: IoDownload, text: "Downloadable resources" },
                    { icon: IoPeople, text: "Expert support" },
                    { icon: IoPlayCircle, text: "Mobile and TV access" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <IoShield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-800 dark:text-green-200 text-sm">30-Day Money-Back Guarantee</p>
                    <p className="text-green-600 dark:text-green-300 text-xs">Full refund if not satisfied</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Courses */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-900    mb-4">Students also bought</h4>
              <div className="space-y-4">
                {[1, 2, 3].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors duration-200">
                    <div className="w-16 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-gray-900    text-sm truncate">Related Course {i + 1}</h5>
                      <p className="text-xs text-gray-600    ">By Expert Instructor</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <IoStar className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-600    ">4.8</span>
                        </div>
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">৳1,999</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
