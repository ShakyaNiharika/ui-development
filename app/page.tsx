import React from "react";
import TaskOneCard from "./components/TaskOneCard";
import TaskTwoCarousel from "./components/TaskTwoCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 gap-20">
      <header className="text-center px-4 max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          SkillShikshya Frontend Task
        </h1>
        <p className="text-lg text-gray-600">
          Replicating Figma designs accurately with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </header>

      <main className="w-full flex flex-col items-center gap-24 px-4 pb-20">
        <section className="w-full">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-8 self-center bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100">
              Task 1
            </h2>
            <TaskOneCard />
          </div>
        </section>

        <div className="w-full h-px bg-gray-200"></div>

        <section className="w-full flex justify-center">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-8 self-center bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100">
              Task 2
            </h2>
            <TaskTwoCarousel />
          </div>
        </section>
      </main>
    </div>
  );
}
