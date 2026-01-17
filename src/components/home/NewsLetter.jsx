"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiSend,
  FiCheck,
  FiGift,
  FiTrendingUp,
  FiUsers,
  FiBell
} from "react-icons/fi";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
    }, 2000);
  };

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

  const benefits = [
    {
      icon: FiGift,
      title: "Exclusive Offers",
      description: "Get early access to new courses and special discounts"
    },
    {
      icon: FiTrendingUp,
      title: "Latest Updates",
      description: "Stay informed about new features and course releases"
    },
    {
      icon: FiUsers,
      title: "Community Access",
      description: "Join our exclusive community of learners and professionals"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
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
        
        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 right-20 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiMail className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-20 opacity-20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <FiBell className="w-12 h-12" />
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto px-6 md:px-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiMail className="w-5 h-5" />
            <span className="text-sm font-medium">Newsletter</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Stay{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              Updated
            </span>
            !
          </motion.h2>
          
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Get exclusive access to new courses and special offers delivered to your inbox.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div variants={itemVariants} className="max-w-md mx-auto">
          {!isSubscribed ? (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.div
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
                    animate={{ x: email ? -30 : 0, opacity: email ? 0 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiMail className="w-5 h-5" />
                  </motion.div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading || !email}
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-xl font-semibold hover:bg-white/90 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-gray-400/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FiMail className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
              
              <p className="text-white/70 text-xs mt-3 text-center">
                No spam, unsubscribe at any time.
              </p>
            </motion.form>
          ) : (
            <motion.div
              className="bg-green-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiCheck className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Welcome Aboard! 🎉</h3>
              <p className="text-white/90 text-sm">
                Thank you for subscribing! You'll receive our latest updates soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewsLetter;
