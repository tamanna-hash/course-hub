export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200  py-10">
      <div className="mx-auto max-w-11/12 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo & Description */}
        <div className="flex-1">
          <h1 className="text-lg font-bold text-primary mb-2">CourseHub</h1>
          <p className="text-gray-400">
            Learn, grow, and level up your skills with top-notch online courses.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex justify-between">
          <div>
            <h2 className="font-semibold text-gray-300 mb-2">Courses</h2>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-sky-400">Web Development</a></li>
              <li><a href="#" className="hover:text-sky-400">AI & ML</a></li>
              <li><a href="#" className="hover:text-sky-400">Design</a></li>
              <li><a href="#" className="hover:text-sky-400">Marketing</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-300 mb-2">Company</h2>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-sky-400">About Us</a></li>
              <li><a href="#" className="hover:text-sky-400">Contact</a></li>
              <li><a href="#" className="hover:text-sky-400">Careers</a></li>
              <li><a href="#" className="hover:text-sky-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-300 mb-2">Support</h2>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-sky-400">Help Center</a></li>
              <li><a href="#" className="hover:text-sky-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sky-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CourseHub. All rights reserved.
      </div>
    </footer>
  );
}
