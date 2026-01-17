"use client";

import React, { useState } from 'react';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    // Sample blog posts data (reduced to 4 posts)
    const blogPosts = [
        {
            id: 1,
            title: "10 Essential Web Development Skills Every Developer Should Master in 2024",
            excerpt: "Discover the most in-demand web development skills that will boost your career and help you stay competitive in the ever-evolving tech industry.",
            content: `
                <p>The web development landscape is constantly evolving, and staying current with the latest skills is crucial for career success. In 2024, developers need to master a combination of traditional and emerging technologies to remain competitive.</p>
                
                <h3>1. Modern JavaScript (ES6+)</h3>
                <p>Understanding modern JavaScript features like arrow functions, destructuring, async/await, and modules is fundamental. These features make code more readable and efficient.</p>
                
                <h3>2. React and Component-Based Architecture</h3>
                <p>React continues to dominate the frontend landscape. Learning React hooks, context API, and state management is essential for building scalable applications.</p>
                
                <h3>3. TypeScript</h3>
                <p>TypeScript adds static typing to JavaScript, making code more maintainable and reducing bugs. It's becoming the standard for large-scale applications.</p>
                
                <h3>4. Node.js and Backend Development</h3>
                <p>Full-stack development skills are highly valued. Understanding Node.js, Express, and database integration opens up more opportunities.</p>
                
                <h3>5. Cloud Services and Deployment</h3>
                <p>Knowledge of AWS, Azure, or Google Cloud Platform is crucial for deploying and scaling applications in production environments.</p>
                
                <p>By mastering these skills, you'll be well-positioned to tackle the challenges of modern web development and advance your career in 2024 and beyond.</p>
            `,
            author: "Sarah Johnson",
            date: "January 15, 2024",
            readTime: "8 min read",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
            tags: ["JavaScript", "React", "Node.js", "Career"]
        },
        {
            id: 2,
            title: "The Complete Guide to Machine Learning for Beginners",
            excerpt: "Start your journey into machine learning with this comprehensive guide covering fundamental concepts, tools, and practical applications.",
            content: `
                <p>Machine Learning (ML) is transforming industries and creating new opportunities for developers and data scientists. This comprehensive guide will help you understand the fundamentals and get started with your ML journey.</p>
                
                <h3>What is Machine Learning?</h3>
                <p>Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every scenario.</p>
                
                <h3>Types of Machine Learning</h3>
                <p><strong>Supervised Learning:</strong> Learning with labeled data to make predictions.</p>
                <p><strong>Unsupervised Learning:</strong> Finding patterns in data without labels.</p>
                <p><strong>Reinforcement Learning:</strong> Learning through interaction and feedback.</p>
                
                <h3>Essential Tools and Libraries</h3>
                <p>Python is the most popular language for ML, with libraries like scikit-learn, TensorFlow, and PyTorch providing powerful tools for building models.</p>
                
                <h3>Getting Started</h3>
                <p>Begin with simple projects like linear regression or classification problems. Practice with real datasets from Kaggle or UCI ML Repository.</p>
                
                <p>Remember, machine learning is a journey that requires patience and continuous learning. Start with the basics and gradually work your way up to more complex algorithms and applications.</p>
            `,
            author: "Dr. Michael Chen",
            date: "January 12, 2024",
            readTime: "12 min read",
            category: "AI & Machine Learning",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
            tags: ["Machine Learning", "Python", "AI", "Data Science"]
        },
        {
            id: 3,
            title: "UI/UX Design Trends That Will Dominate 2024",
            excerpt: "Explore the latest design trends and principles that are shaping user experiences across digital platforms this year.",
            content: `
                <p>The world of UI/UX design is constantly evolving, with new trends emerging that shape how users interact with digital products. Here are the key trends that will define 2024.</p>
                
                <h3>1. Minimalist Design with Bold Typography</h3>
                <p>Clean, minimalist interfaces paired with bold, expressive typography create striking visual hierarchies while maintaining usability.</p>
                
                <h3>2. Dark Mode and Adaptive Interfaces</h3>
                <p>Dark mode continues to gain popularity, with designers creating adaptive interfaces that seamlessly switch between light and dark themes.</p>
                
                <h3>3. Micro-Interactions and Subtle Animations</h3>
                <p>Small, purposeful animations enhance user experience by providing feedback and guiding user attention without being distracting.</p>
                
                <h3>4. Voice User Interfaces (VUI)</h3>
                <p>With the rise of smart speakers and voice assistants, designing for voice interactions is becoming increasingly important.</p>
                
                <h3>5. Sustainable and Accessible Design</h3>
                <p>Designers are focusing on creating inclusive experiences that work for all users while considering environmental impact through efficient design choices.</p>
                
                <p>These trends reflect a broader shift towards more human-centered, accessible, and sustainable design practices that prioritize user needs and environmental responsibility.</p>
            `,
            author: "Emma Rodriguez",
            date: "January 10, 2024",
            readTime: "6 min read",
            category: "Design",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
            tags: ["UI Design", "UX Design", "Trends", "User Experience"]
        },
        {
            id: 4,
            title: "Building Your First Mobile App: A Step-by-Step Guide",
            excerpt: "Learn how to create your first mobile application from concept to deployment with practical tips and best practices.",
            content: `
                <p>Creating your first mobile app can seem daunting, but with the right approach and tools, you can bring your ideas to life. This guide will walk you through the entire process.</p>
                
                <h3>Step 1: Define Your App Idea</h3>
                <p>Start by clearly defining what problem your app solves. Research your target audience and analyze competitors to understand the market landscape.</p>
                
                <h3>Step 2: Choose Your Development Approach</h3>
                <p><strong>Native Development:</strong> Platform-specific apps using Swift/Objective-C for iOS or Java/Kotlin for Android.</p>
                <p><strong>Cross-Platform:</strong> Use frameworks like React Native or Flutter to build for both platforms simultaneously.</p>
                
                <h3>Step 3: Design Your User Interface</h3>
                <p>Create wireframes and mockups to visualize your app's flow. Focus on intuitive navigation and consistent design patterns.</p>
                
                <h3>Step 4: Set Up Your Development Environment</h3>
                <p>Install necessary tools like Android Studio, Xcode, or your chosen cross-platform framework. Set up version control with Git.</p>
                
                <h3>Step 5: Build and Test</h3>
                <p>Start with a minimum viable product (MVP) and iterate based on user feedback. Test on real devices and different screen sizes.</p>
                
                <h3>Step 6: Deploy to App Stores</h3>
                <p>Prepare your app for submission by following platform guidelines, creating compelling store listings, and implementing proper testing.</p>
                
                <p>Remember, building a successful app is an iterative process. Start simple, gather feedback, and continuously improve your app based on user needs.</p>
            `,
            author: "James Wilson",
            date: "January 8, 2024",
            readTime: "10 min read",
            category: "Mobile Development",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
            tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"]
        }
    ];

    const categories = ["All", "Web Development", "AI & Machine Learning", "Design", "Mobile Development"];

    const openModal = (post) => {
        setSelectedPost(post);
    };

    const closeModal = () => {
        setSelectedPost(null);
    };

    return (
        <div className="min-h-screen  dark:bg-gray-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Our Blog
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Insights, tutorials, and industry trends to help you stay ahead in your learning journey.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Categories Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    category === "All"
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Post */}
                <div className="mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        Featured
                                    </span>
                                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                                        {blogPosts[0].category}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    {blogPosts[0].title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {blogPosts[0].excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span>{blogPosts[0].author}</span>
                                        <span>•</span>
                                        <span>{blogPosts[0].date}</span>
                                        <span>•</span>
                                        <span>{blogPosts[0].readTime}</span>
                                    </div>
                                    <button 
                                        onClick={() => openModal(blogPosts[0])}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(1).map((post) => (
                        <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        <div>{post.author}</div>
                                        <div>{post.date} • {post.readTime}</div>
                                    </div>
                                    <button 
                                        onClick={() => openModal(post)}
                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                                    >
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                    <p className="mb-6 opacity-90">
                        Subscribe to our newsletter and never miss our latest blog posts and course updates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedPost && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {selectedPost.category}
                                </span>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {selectedPost.author} • {selectedPost.date} • {selectedPost.readTime}
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                {selectedPost.title}
                            </h1>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedPost.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div 
                                className="prose prose-lg dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;