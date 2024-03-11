import React from "react";

const Tracks = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-8 mx-auto mt-32 space-y-12">
      <div className="flex items-center space-x-4 mx-auto w-fit">
        <h2 className="font-black text-3xl w-fit bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Transferrable skills?</h2>
        <p className="text-xl font-medium">Knowledge that are not usually taught in classrooms.</p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-8 w-fit mx-auto">
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#FFEFEF]">
          <img src="tracks-first.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Business and Finance</p>
          <p className="font-medium text-davy-gray w-[19rem]">Essential financial literacy, budgeting, and entrepreneurial skills for personal and professional success.</p>
        </div>
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#EFFFF3]">
          <img src="tracks-second.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Personal Productivity</p>
          <p className="font-medium text-davy-gray w-[19rem]">Effective time management, goal-setting, and organizational skills to enhance productivity and achieve personal goals.</p>
        </div>
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#EFF6FF]">
          <img src="tracks-third.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Crafts and Creativity</p>
          <p className="font-medium text-davy-gray w-[19rem]">Exploring artistic expression, honing creative skills, and fostering innovation through various craft-based activities.</p>
        </div>
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#FBEFFF]">
          <img src="tracks-fourth.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Critical Thinking</p>
          <p className="font-medium text-davy-gray w-[19rem]">Analyze information, solve problems, and make informed decisions through logical reasoning and evidence-based judgment.</p>
        </div>
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#FEFFEF]">
          <img src="tracks-fifth.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Inter- and Intrapersonal</p>
          <p className="font-medium text-davy-gray w-[19rem]">Interpersonal communication, empathy, and self-awareness for effective social interactions and personal development.</p>
        </div>
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#FFEFF5]">
          <img src="tracks-sixth.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Health and Wellness</p>
          <p className="font-medium text-davy-gray w-[19rem]">Physical and mental well-being, embracing healthy lifestyles, and prioritizing self-care for overall wellness.</p>
        </div>
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#EFFFFE]">
          <img src="tracks-seventh.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Business and Finance</p>
          <p className="font-medium text-davy-gray w-[19rem]">Essential financial literacy, budgeting, and entrepreneurial skills for personal and professional success.</p>
        </div>
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#EFF0FF]">
          <img src="tracks-eight.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Business and Finance</p>
          <p className="font-medium text-davy-gray w-[19rem]">Essential financial literacy, budgeting, and entrepreneurial skills for personal and professional success.</p>
        </div>
        <div className="w-fit h-fit space-y-3 p-5 col-span-1 rounded-2xl border-[0.15rem] border-eerie-black bg-[#FFFAEF]">
          <img src="tracks-ninth.png" width="45" height="45" className="" />
          <p className="text-xl font-bold">Business and Finance</p>
          <p className="font-medium text-davy-gray w-[19rem]">Essential financial literacy, budgeting, and entrepreneurial skills for personal and professional success.</p>
        </div>
      </div>
    </div>
  )
}

export default Tracks;