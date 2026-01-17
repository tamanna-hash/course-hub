import Logo from "../shared/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-200 dark:text-gray-300 py-10">
      <div className="mx-auto max-w-11/12 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo & Description */}
        <div className="flex-1">
          <Logo/>
          <p className="text-gray-400 dark:text-gray-500">
            Learn, grow, and level up your skills with top-notch online courses.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex justify-between">
          <div>
            <h2 className="font-semibold text-gray-300 dark:text-gray-200 mb-2">Courses</h2>
            <ul className="space-y-1 text-gray-400 dark:text-gray-500">
              <li><Link href="/courses" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">All Courses</Link></li>
              <li><Link href="/courses" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Web Development</Link></li>
              <li><Link href="/courses" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">AI & ML</Link></li>
              <li><Link href="/courses" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Design</Link></li>
              <li><Link href="/courses" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-300 dark:text-gray-200 mb-2">Company</h2>
            <ul className="space-y-1 text-gray-400 dark:text-gray-500">
              <li><Link href="/about" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Blog</Link></li>
              <li><Link href="/courses" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-300 dark:text-gray-200 mb-2">Support</h2>
            <ul className="space-y-1 text-gray-400 dark:text-gray-500">
              <li><Link href="/contact" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Help Center</Link></li>
              <li><Link href="/about" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 dark:border-gray-800 mt-10 pt-6 text-center text-gray-500 dark:text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} CourseHub. All rights reserved.
      </div>
    </footer>
  );
}
