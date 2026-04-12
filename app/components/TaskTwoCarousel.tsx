"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, PenTool, LayoutTemplate } from "lucide-react";
import Image from "next/image";

export default function TaskTwoCarousel() {
  return (
    <div className="w-full max-w-[1400px] mx-auto py-20 px-4 md:px-16 flex flex-col items-start font-sans">

      <div className="mb-12">
        <p className="text-gray-500 font-semibold tracking-wider uppercase text-sm mb-3">
          Explore our classes and master trending skills!
        </p>
        <h2 className="text-4xl md:text-[36px] font-extrabold text-[#171717] leading-tight mb-6">
          Dive Into <span className="text-[#2D9F8E]">What&apos;s Hot Right Now!</span>
        </h2>
      </div>


      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8">


        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="lg:col-span-3 bg-[#F87171] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl min-h-[400px]"
        >

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-12 p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
          >
            <Code2 className="w-10 h-10 text-blue-100" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 right-1/2 p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
          >
            <LayoutTemplate className="w-10 h-10 text-green-100" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-1/3 p-3 bg-white/20 rounded-xl backdrop-blur-sm"
          >
            <PenTool className="w-8 h-8 text-orange-100" />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col items-start z-10 text-white">
            <h3 className="text-[100px] md:text-[140px] font-black leading-none mb-2">23+</h3>
            <p className="text-3xl md:text-5xl font-bold tracking-tight mb-8">All Courses</p>
            <button className="flex items-center gap-2 bg-white text-[#F87171] px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg group">
              View all Courses
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>


          <div className="relative w-full md:w-[45%] h-[300px] md:h-full z-10 self-end">
            <Image
              src="/task-2-img.png"
              alt="Course illustration"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>


        <div className="lg:col-span-1 flex flex-col md:flex-row lg:flex-col gap-8">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-[#FEE2E2] rounded-[40px] p-8 flex items-center justify-between relative overflow-hidden shadow-lg min-h-[220px]"
          >
            <div className="flex flex-col items-start h-full justify-between">
              <span className="[writing-mode:vertical-lr] rotate-180 text-[#F87171] font-black uppercase tracking-widest text-lg">
                Upcoming Courses
              </span>
              <span className="text-5xl font-black text-[#F87171] mt-auto">05+</span>
            </div>
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-40 h-40 bg-[#FCDADA] rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-[#FEE2E2] rounded-[40px] p-8 flex items-center justify-between relative overflow-hidden shadow-lg min-h-[220px]"
          >
            <div className="flex flex-col items-start h-full justify-between">
              <span className="[writing-mode:vertical-lr] rotate-180 text-[#F87171] font-black uppercase tracking-widest text-lg">
                Ongoing Courses
              </span>
              <span className="text-5xl font-black text-[#F87171] mt-auto">10+</span>
            </div>
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-40 h-40 bg-[#FCDADA] rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
