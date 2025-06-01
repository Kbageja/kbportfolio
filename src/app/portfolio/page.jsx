"use client"
import React from 'react';
import {
   Linkedin, Send, Instagram, Github,
  Trophy, Star, Award, Target, Zap, Crown
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Portfolio() {
  const achievements = [
    { text: "Won Hackathon at IIT Delhi" },
    { text: "Mentored Hackathon at Microsoft" },
    { text: "Organised India's Biggest Offline Hackthon" },
  ];

  const icons = [Trophy, Star, Award, Target, Zap, Crown];

  const skills = [
    "ReactJs", "NextJs", "Typescript", "NodeJs", "ExpressJs",
    "PostgreSQL", "AWS", "MongoDB", "Prisma", "Docker", "TailwindCSS"
  ];

  const experience = [
    {
      company: "LifeLinkr Pvt Ltd.",
      role: "Backend Developer • Intern",
      duration: "Jul 2024 - Nov 2024",
      active: true,
    },
    {
      company: "Clumoss",
      role: "Full Stack Developer • Intern",
      duration: "Jun 2024 - Jul 2024",
      active: false,
    },
    {
      company: "ECELL MSIT",
      role: "FrontEnd Developer • Member",
      duration: "2023-24",
      active: false,
    },
  ];

  const workProjects = [
    {
      title: "IVF Clinic Software",
      description: "Patient Config , Billing , Embrology and Pathology Modules",
      active: true,
    },
    {
      title: "Shoe Ecommerce for Client",
      description: "",
      active: false,
    },
  ];

  return (
    <div className="min-h-screen z-50 text-white p-4 sm:p-6 lg:p-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex-1">
            <p className="text-gray-400 mb-4">Hey there!</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              I'm Kinshuk, a Software Developer ,
              <br className="hidden sm:block" />
              <TypeAnimation
                sequence={[
                  ' crafting intuitive experiences.',
                  2000,
                  ' building scalable systems.',
                  2000,
                  ' creating pixel-perfect UI.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-green-200"
                repeat={Infinity}
              />
            </h1>
            <div className="flex items-center text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-xs sm:text-sm">Available for Freelancing · New Delhi, IND</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-3">
          {/* Experience */}
          <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 font-poppins">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg sm:text-xl font-semibold">Experience</h2>
                <span className="text-sm text-gray-400">02 Years</span>
              </div>

              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${exp.active ? 'bg-green-400' : 'bg-gray-600'}`}></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm sm:text-base">{exp.company}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{exp.role}</p>
                      <span className="text-xs text-gray-500">{exp.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Work Projects</h3>
            <div className="space-y-4">
              {workProjects.map((proj, idx) => (
                <div key={idx} className="flex items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${proj.active ? 'bg-green-400' : 'bg-gray-600'}`}></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm sm:text-base">{proj.title}</h3>
                    {proj.description && (
                      <p className="text-xs sm:text-sm text-gray-400">{proj.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Achievements */}
          <div className='flex flex-col gap-3'>
            {/* Skills */}
            <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 font-poppins">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <div key={idx} className="bg-green-500 text-black font-medium px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className='bg-neutral-900 rounded-xl p-4 pb-10 sm:p-6 sm:pb-10 font-poppins'>
              <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white">Extra Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const IconComponent = icons[index % icons.length];
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-3 p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-neutral-700/30 hover:border-neutral-600/50"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center transition-all duration-300">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-neutral-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                          {achievement.text}
                        </p>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Connect */}
<div className="bg-neutral-900 rounded-xl p-4 sm:p-6 font-poppins">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Connect</h2>
            
            <div className="space-y-3 sm:space-y-4"> 
              <a href="https://www.linkedin.com/in/kinshuk-bageja-993800255/" target='_blank' className="flex items-center">
                <Linkedin className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">LinkedIn</span>
              </a>
              
              <a href='https://x.com/KBageja' target='_blank' className="flex items-center">
                <div className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0">✕</div>
                <span className="text-xs sm:text-sm">Previously Twitter</span>
              </a>
              
              <a href="https://www.github.com/kbageja" target='_blank' className="flex items-center">
                <Github className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Github</span>
              </a>
              
              <a href="https://www.instagram.com/kinshukbageja/" target='_blank' className="flex items-center">
                <Instagram className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Instagram</span>
              </a>
            </div>

            <div className="mt-8 sm:my-8 bg-gray-900 p-5 mb-5 sm:p-5 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-xs sm:text-sm text-gray-300">🤝 Let's Work Together!</span>
              </div>
              <div className="text-xs text-gray-400 break-all">
                Send Email → kinshukbageja@gmail.com
              </div>
              <div className="text-xs text-gray-400 break-all">
                Contact Calling  →  9810819833
              </div>
               <div className="text-xs text-gray-400 break-all">
                Contact Whatsapp  →  7011845401
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Essential Stacks</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-6">
                A Comprehensive Collection of Useful Tools to Support and 
                Optimize My Workflow
              </p>
              
              <div className="flex flex-wrap gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-transparent">
                  <img src='/vscode.svg'/>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-10 ">
                   <img src='/figma3.svg' className='object-cover h-6 sm:h-8 pl-1' />
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 ">
                   <img src='/Vite.svg' className='text-white h-10 pb-2'/>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 ">
                  <img src='/Git.svg' className='text-white h-10 pb-2'/>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-10 ">
                  <img src='/Docker.svg' className='text-white '/>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-10 ">
                <img src='/Electron.svg' className='text-white  '/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
