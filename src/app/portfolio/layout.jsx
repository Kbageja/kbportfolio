"use client";
import React, { useState } from 'react';
import { User, FileText, Briefcase, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: '', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'say-hello', label: 'Say Hello', icon: Mail }
  ];

  function handleNav(itemid) {
    setActiveSection(itemid);
    router.push(`/portfolio/${itemid}`);
  }

  function handleSayHello() {
    setActiveSection('say-hello');
    // Add your say hello logic here
  }

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Main Content */}
      <main className="pb-32 pt-16 px-6">
        {children}
      </main>

                          <div className="fixed top-4 right-4 z-50">
                      <iframe 
                        style={{ borderRadius: '12px' }} 
                        src="https://open.spotify.com/embed/playlist/2JFOKkBTmthAls78hlHBir?utm_source=generator" 
                        width="100%" 
                        height="5%" 
                        frameBorder="0" 
                        allowFullScreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                      />
                    </div>

      {/* Fixed Bottom Navbar */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-sm md:w-[24%]">
        <div className="bg-neutral-900 backdrop-blur-sm rounded-full px-2 py-2">
          <div className="flex items-center justify-around gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === navItems.length - 1;
              const isActive = activeSection === item.id;

              if (isLast) {
                return (
                  <div key={item.id} className="flex items-center gap-4">

                    {/* Vertical line */}
                    <div className="w-px h-10 bg-gray-400" />

                    {/* Say Hello button */}
                    <button
                      onClick={handleSayHello}
                      className="flex items-center gap-2 px-3 py-3 bg-gradient-to-r from-amber-500 to-red-500 hover:from-orange-400 hover:to-red-600 text-white rounded-full transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span className="font-poppins">Say Hello!👋</span>
                    </button>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{
                    boxShadow: 'inset 0 4px 6px -4px rgba(255, 255, 255, 0.3)', // subtle white top inset shadow
                  }}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}