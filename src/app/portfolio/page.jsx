import React from 'react';
import { MapPin, Clock, Linkedin, Send, Instagram , Trophy, Star, Award, Target, Zap, Crown } from 'lucide-react';

export default function Portfolio() {
  const achievements = [
    { text: "Won Hackathon at IIT Delhi" },
    { text: "Mentored Hackathon at Microsoft" },
    { text: "Organised India's Biggest Offline Hackthon" },
  ];

  const icons = [Trophy, Star, Award, Target, Zap, Crown];

  return (
    <div className="min-h-screen z-50 text-white p-4 sm:p-6 lg:p-8 font-poppins">


      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex-1">
            <p className="text-gray-400 mb-4">Hey there!</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              I'm Kinshuk, a Software Developer<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>crafting intuitive, scalable, and<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>pixel-perfect digital experiences.
            </h1>
            <div className="flex items-center text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-xs sm:text-sm">Available for Freelancing · New Delhi, IND </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-3">
          {/* Experience Section */}
          <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 font-poppins">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg sm:text-xl font-semibold">Experience</h2>
                <span className="text-sm text-gray-400">02 Years</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0   transition-ease duration-30"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm sm:text-base">LifeLinkr Pvt Ltd.</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Backend Developer • Intern</p>
                    <span className="text-xs text-gray-500">Jul 2024 - Nov 2024</span>
                  </div>
                </div>
                
                <div className="flex items-start group ">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0 "></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm sm:text-base">Clumoss</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Full Stack Developer • Intern</p>
                    <span className="text-xs text-gray-500">Jun 2024 - Jul 2024</span>
                  </div>
                </div>
                
                <div className="flex items-start ">
                  <div className="w-2 h-2 bg-gray-600  rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm sm:text-base">ECELL MSIT</h3>
                    <p className="text-xs sm:text-sm text-gray-400">FrontEnd Developer • Member</p>
                    <span className="text-xs text-gray-500">2023-24</span>
                  </div>
                </div>
              </div>
            </div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Work Projects</h3>
               <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm sm:text-base">IVF Clinic Software</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Patient Config , Billing , Embrology and Pathology Modules</p>
                   
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm sm:text-base">Shoe Ecommerce for Client</h3>
                    
                  </div>
                </div>

              </div>


          </div>

          {/* Skills & Essential Stacks Column */}
          <div className='flex flex-col gap-3'>
            {/* Skills Section */}
            <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 font-poppins">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Skills & Expertise</h2>
              
              <div className="flex flex-wrap gap-2 ">
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">ReactJs</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">NextJs</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">Typescript</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">NodeJs</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">ExpressJs</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">PostgreSQL</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">AWS</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">MongoDB</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">Prisma</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">Docker</div>
                <div className="bg-green-500 text-black px-3 py-2 rounded-3xl text-xs sm:text-sm text-center hover:border hover:border-white">TailwindCSS</div>
              </div>
            </div>
            
            {/* Essential Stacks Section */}
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
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center  transition-all duration-300">
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

          {/* Connect Section */}
          <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 font-poppins">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Connect</h2>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">LinkedIn</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0">✕</div>
                <span className="text-xs sm:text-sm">Previously Twitter</span>
              </div>
              
              <div className="flex items-center">
                <Send className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Telegram</span>
              </div>
              
              <div className="flex items-center">
                <Instagram className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Instagram</span>
              </div>
            </div>

            <div className="mt-8 sm:my-8 bg-gray-900 p-3 sm:p-4 rounded-lg">
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
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                A Comprehensive Collection of Useful Tools to Support and 
                Optimize My Workflow
              </p>
              
              <div className="flex flex-wrap gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-transparent border border-white hover:border-green-400 rounded"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-transparent border border-white hover:border-green-400 rounded"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-transparent border border-white hover:border-green-400 rounded"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-transparent border border-white hover:border-green-400 rounded"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-transparent border border-white hover:border-green-400 rounded"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-transparent border border-white hover:border-green-400 rounded"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}