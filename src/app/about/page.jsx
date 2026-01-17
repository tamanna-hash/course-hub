import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen  dark:bg-gray-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        About CourseHub
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Empowering learners worldwide with high-quality online education and professional development courses.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Mission Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-base-content/90 dark:text-white mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        At CourseHub, we believe that quality education should be accessible to everyone, everywhere. 
                        Our mission is to democratize learning by providing world-class courses that help individuals 
                        and organizations achieve their goals.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        We partner with industry experts and leading professionals to create comprehensive, 
                        practical courses that bridge the gap between theoretical knowledge and real-world application.
                    </p>
                </div>

                {/* What We Offer */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-base-content/90 dark:text-white mb-8">What We Offer</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <h3 className="text-base font-semibold text-base-content/90 dark:text-white mb-1">Expert-Led Courses</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Learn from industry professionals and subject matter experts who bring real-world 
                                experience to every lesson.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <h3 className="text-base font-semibold text-base-content/90 dark:text-white mb-1">Flexible Learning</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Study at your own pace with lifetime access to course materials, downloadable resources, 
                                and mobile-friendly content.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <h3 className="text-base font-semibold text-base-content/90 dark:text-white mb-1">Practical Projects</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Apply your knowledge through hands-on projects and assignments that simulate 
                                real-world scenarios and challenges.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <h3 className="text-base font-semibold text-base-content/90 dark:text-white mb-1">Community Support</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Join a vibrant community of learners, get help from instructors, and network 
                                with peers in your field.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Story */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-base-content/90 dark:text-white mb-6">Our Story</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        Founded in 2020, CourseHub started with a simple vision: to make high-quality education 
                        accessible to learners around the globe. What began as a small platform with a handful 
                        of courses has grown into a comprehensive learning ecosystem.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Today, we serve thousands of students worldwide, offering courses in technology, business, 
                        design, marketing, and more. Our commitment to excellence and student success remains 
                        at the heart of everything we do.
                    </p>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">CourseHub by the Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold mb-2">50K+</div>
                            <div className="text-blue-100">Students Enrolled</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">200+</div>
                            <div className="text-blue-100">Courses Available</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">50+</div>
                            <div className="text-blue-100">Expert Instructors</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">95%</div>
                            <div className="text-blue-100">Success Rate</div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-base-content/90 dark:text-white mb-8 text-center">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-base-content/90 dark:text-white mb-3">Quality First</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We maintain the highest standards in course content, instruction, and student experience.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-base-content/90 dark:text-white mb-3">Accessibility</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Education should be available to everyone, regardless of location, background, or circumstances.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-base-content/90 dark:text-white mb-3">Innovation</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We continuously evolve our platform and teaching methods to provide the best learning experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Learning?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Join thousands of students who are already advancing their careers with CourseHub.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/courses" 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                        >
                            Browse Courses
                        </a>
                        <a 
                            href="/contact" 
                            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;