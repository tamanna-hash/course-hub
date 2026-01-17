"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Animated SVG Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.04" />
          </linearGradient>
          <radialGradient id="radial1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.02" />
          </radialGradient>
        </defs>

        {/* Dynamic Floating Circles */}
        <motion.circle
          cx="200"
          cy="150"
          r="50"
          fill="url(#grad1)"
          animate={{
            y: [-15, 20, -15],
            x: [-5, 8, -5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.circle
          cx="800"
          cy="200"
          r="35"
          fill="url(#grad2)"
          animate={{
            y: [15, -20, 15],
            x: [8, -6, 8],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.circle
          cx="1000"
          cy="400"
          r="60"
          fill="url(#radial1)"
          animate={{
            y: [-20, 25, -20],
            x: [10, -12, 10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.circle
          cx="150"
          cy="600"
          r="25"
          fill="url(#grad3)"
          animate={{
            y: [10, -15, 10],
            x: [-6, 9, -6],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Dynamic Rectangles with Rotation */}
        <motion.rect
          x="100"
          y="400"
          width="100"
          height="60"
          rx="15"
          fill="url(#grad2)"
          animate={{
            y: [8, -12, 8],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.rect
          x="900"
          y="600"
          width="80"
          height="50"
          rx="12"
          fill="url(#grad1)"
          animate={{
            y: [-10, 12, -10],
            rotate: [0, -8, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <motion.rect
          x="600"
          y="100"
          width="70"
          height="40"
          rx="10"
          fill="url(#grad3)"
          animate={{
            y: [5, -8, 5],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />

        {/* Animated Curved Lines */}
        <motion.path
          d="M0,300 Q300,250 600,300 T1200,300"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="15,10"
          animate={{
            strokeDashoffset: [0, -150],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M0,500 Q400,450 800,500 T1200,500"
          stroke="url(#grad2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="20,15"
          animate={{
            strokeDashoffset: [0, 200],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />

        {/* Pulsing Dots Pattern */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={120 + (i % 5) * 220}
            cy={80 + Math.floor(i / 5) * 220}
            r="3"
            fill="#0ea5e9"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Floating Triangles */}
        <motion.polygon
          points="300,50 320,80 280,80"
          fill="url(#grad2)"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.polygon
          points="700,650 720,680 680,680"
          fill="url(#grad3)"
          animate={{
            y: [0, 12, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Orbiting Elements */}
        <motion.g
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "600px 400px" }}
        >
          <circle cx="700" cy="400" r="8" fill="url(#grad1)" opacity="0.6" />
          <circle cx="500" cy="400" r="6" fill="url(#grad2)" opacity="0.5" />
        </motion.g>

        <motion.g
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "300px 200px" }}
        >
          <circle cx="380" cy="200" r="5" fill="url(#grad3)" opacity="0.4" />
          <circle cx="220" cy="200" r="7" fill="url(#radial1)" opacity="0.5" />
        </motion.g>
      </svg>
    </div>
  );
};

export default function Banner() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    let lenis;
    
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
    },
  };

  return (
    <section className="relative h-[70vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
      {/* Animated SVG Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <motion.div
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 md:px-20 py-20 h-full flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            <motion.span
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Learn New Skills,{" "}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent font-extrabold"
              animate={{
                backgroundSize: ["100% 100%", "150% 150%", "100% 100%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: "linear-gradient(45deg, #0284c7, #2563eb, #4338ca, #7c3aed)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 8s ease-in-out infinite",
              }}
            >
              Boost Your Career
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <p className="text-gray-700 dark:text-gray-200 mb-8 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            Join thousands of students on CourseHub and explore top-quality online courses in web development, AI, design, marketing, and more.
          </p>
          
          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                href="/courses"
                className="relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Browse Courses</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                href="/register"
                className="relative group px-8 py-4 border-2 border-sky-600 text-sky-700 dark:text-sky-300 dark:border-sky-400 rounded-xl font-semibold text-lg hover:bg-sky-600 hover:text-white dark:hover:bg-sky-500 transition-all duration-300 backdrop-blur-sm bg-white/20 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 border-2 border-sky-400 rounded-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-xl"
            variants={itemVariants}
          >
            {[
              { number: "10K+", label: "Students" },
              { number: "500+", label: "Courses" },
              { number: "50+", label: "Instructors" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotateY: 5,
                }}
                animate={{
                  boxShadow: [
                    "0 4px 6px rgba(0,0,0,0.1)",
                    "0 8px 15px rgba(0,0,0,0.15)",
                    "0 4px 6px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{ 
                  duration: 0.2,
                  boxShadow: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1 relative z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: "#0284c7",
                  }}
                  transition={{ 
                    delay: 0.5 + index * 0.1, 
                    duration: 0.5,
                    hover: { duration: 0.2 }
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 dark:text-gray-200 font-medium text-sm relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Moved to the right side */}
      <motion.div
        className="absolute bottom-8 right-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-sky-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
