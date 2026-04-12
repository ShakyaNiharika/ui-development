"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    text: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bgColor: "bg-[#F06E62]",
    imgSrc: "/task1_card1.png",
    imgAlt: "Clarity",
    imageLeft: true,
  },
  {
    id: 2,
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    text: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    bgColor: "bg-[#5FA8AF]",
    imgSrc: "/task1_card2.png",
    imgAlt: "Learn by doing",
    imageLeft: false,
  },
  {
    id: 3,
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    text: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    bgColor: "bg-[#7A6FBB]",
    imgSrc: "/task1_card3.png",
    imgAlt: "Mentorship",
    imageLeft: true,
  },
  {
    id: 4,
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    text: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    bgColor: "bg-[#AA8D6F]",
    imgSrc: "/task-1-img.png",
    imgAlt: "Achieve",
    imageLeft: false,
  },
];

export default function TaskOneCard() {
  return (
    <div className="w-full max-w-[1400px] py-16 px-6 md:px-12 mx-auto overflow-hidden">



      <div className="text-left mb-14 ml-4">
        <p className="text-gray-500 text-lg md:text-xl font-medium mb-1 capitalize">
          Your SkillShikshya journey
        </p>
        <h2 className="text-4xl md:text-[36px] font-extrabold text-[#0D9488] tracking-tight leading-tight">
          Step In. Skill Up. Stand Out.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative rounded-[40px] md:rounded-[56px] shadow-xl flex items-center min-h-[340px] md:min-h-[400px] ${card.bgColor} ${card.imageLeft
              ? "pl-[160px] md:pl-[200px] lg:pl-[260px] pr-8 md:pr-14"
              : "pr-[160px] md:pr-[200px] lg:pr-[260px] pl-8 md:pl-14"
              } py-10 md:py-14 transition-all duration-300 hover:shadow-2xl`}
          >

            <div className={`absolute bottom-0 w-[260px] h-[340px] md:w-[380px] md:h-[480px] pointer-events-none z-10 ${card.imageLeft ? "-left-12 md:-left-24" : "-right-12 md:-right-24"
              }`}>
              <Image
                src={card.imgSrc}
                alt={card.imgAlt}
                fill
                className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
                priority={card.id <= 4}
              />
            </div>

            {/* Text container */}
            <div className={`flex flex-col gap-2 md:gap-4 text-white w-full ${card.imageLeft ? "text-right items-end" : "text-left items-start"}`}>
              <h3 className="text-2xl md:text-[40px] font-extrabold leading-tight tracking-tight">
                {card.title}
              </h3>
              <p className="text-white/95 font-bold text-lg md:text-2xl tracking-wide">
                {card.subtitle}
              </p>
              <p className="text-white/85 text-xs md:text-base lg:text-[17px] leading-relaxed max-w-[500px]">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}