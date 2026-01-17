"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiStar, 
  FiArrowLeft,
  FiArrowRight,
  FiUser,
  FiMessageCircle
} from "react-icons/fi";

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      company: "Google",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      testimonial: "CourseHub completely transformed my career! The hands-on projects and expert instructors helped me land my dream job at Google. The learning experience was incredible.",
      course: "Full Stack Web Development",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Microsoft",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      testimonial: "The AI and Machine Learning course exceeded my expectations. The practical approach and real-world projects gave me the confidence to transition into data science.",
      course: "AI & Machine Learning",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Apple",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      testimonial: "Amazing design course! The instructors are industry professionals who provide valuable insights. I learned modern design principles that I use daily at Apple.",
      course: "UI/UX Design Masterclass",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      id: 4,
      name: "David Kim",
      role: "DevOps Engineer",
      company: "Amazon",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      rating: 5,
      testimonial: "The DevOps course was comprehensive and practical. I gained hands-on experience with Docker, Kubernetes, and AWS that directly helped me in my current role.",
      course: "DevOps & Cloud Computing",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Cybersecurity Analyst",
      company: "Tesla",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      rating: 5,
      testimonial: "Excellent cybersecurity program! The ethical hacking modules were particularly engaging. The knowledge I gained helped me secure a position at Tesla.",
      course: "Cybersecurity Fundamentals",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Mobile Developer",
      company: "Spotify",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      testimonial: "The React Native course was outstanding! Building real apps during the course gave me the portfolio I needed to land my job at Spotify. Highly recommended!",
      course: "Mobile App Development",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 md:px-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our successful graduates who transformed their careers with CourseHub
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${testimonial.bgGradient} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm overflow-hidden flex flex-col h-full min-h-[320px]`}
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />

                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 opacity-20"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <FiMessageCircle className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                </motion.div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1 + index * 0.2,
                      }}
                    >
                      <FiStar className="w-5 h-5 text-yellow-500 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm italic relative z-10 flex-grow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  "{testimonial.testimonial}"
                </motion.p>

                {/* User Info */}
                <div className="flex items-center gap-4 relative z-10 mt-auto mb-8">
                  <motion.div
                    className={`w-12 h-12 rounded-full p-0.5 bg-gradient-to-br ${testimonial.gradient} flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                        <FiUser className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      </div>
                    )}
                  </motion.div>
                  
                  <div className="text-left flex-grow min-w-0">
                    <motion.h4
                      className="font-bold text-gray-900 dark:text-white text-sm truncate"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 font-medium truncate">
                      @ {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Course Badge */}
                <motion.div
                  className={`absolute bottom-3 left-3 right-3 px-2 py-1 bg-gradient-to-r ${testimonial.gradient} text-white text-xs rounded-lg font-medium opacity-90 text-center truncate`}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  {testimonial.course}
                </motion.div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
