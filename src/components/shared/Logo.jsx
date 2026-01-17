"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Logo = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-3 font-semibold tracking-wide"
        >
            {/* Logo Icon */}
            <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-extrabold">
                    CH
                </span>
            </div>
            
            {/* Brand Name */}
            <Link href="/">
                <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
                    CourseHub
                </span>
            </Link>
        </motion.div>
    );
};

export default Logo;
