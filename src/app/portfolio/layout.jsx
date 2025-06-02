"use client";
import React, { useEffect, useState, useRef } from "react";
import { User, FileText, Briefcase, Mail } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const [activeSection, setActiveSection] = useState("about");
  
  // Draggable state
  const [position, setPosition] = useState({ x: 0, y: 16 }); // Will be set to top-right in useEffect
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [spotifySize, setSpotifySize] = useState({ width: 352, height: 152 });
  const spotifyRef = useRef(null);

  const navItems = [
    { id: "", label: "About", icon: User },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "say-hello", label: "Say Hello", icon: Mail },
  ];

  // Sync activeSection with route path and set initial position
  useEffect(() => {
    const section = pathname === "/portfolio" ? "" : pathname?.split("/").pop();
    setActiveSection(section);
    
  }, [pathname]);

  function handleNav(itemid) {
    setActiveSection(itemid);
    router.push(`/portfolio/${itemid}`);
  }

  function handleSayHello() {
    alert("hello")
  }

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Spotify Embed - Static positioning */}
      <div className="absolute top-4 right-4 z-30 pointer-events-none">
        <div className="pointer-events-auto">
          <iframe
            className="bg-transparent opacity-30 sm:opacity-80 w-[320px] sm:w-[320px] h-[122px] sm:h-[182px]"
            style={{ 
              borderRadius: "8px"
            }}
            src="https://open.spotify.com/embed/playlist/2JFOKkBTmthAls78hlHBir?utm_source=generator"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>

      {/* Main Content - Higher z-index to ensure interactivity */}
      <main className="relative z-20 pb-32 pt-16 px-6">{children}</main>

      {/* Fixed Bottom Navbar - Highest z-index */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[88%] md:w-[24%]">
        <div className="bg-neutral-900 backdrop-blur-sm rounded-full px-2 py-2 shadow-[0_1px_2px_rgba(209,213,219,0.3)]">
          <div className="flex items-center justify-around gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === navItems.length - 1;
              const isActive = activeSection === item.id;

              if (isLast) {
                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-px h-10 bg-gray-400" />
                    <button
                      onClick={handleSayHello}
                      className="flex items-center gap-2 px-3 py-4  bg-gradient-to-r from-amber-500 to-red-500 hover:from-orange-400 hover:to-red-600 text-white rounded-full transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span className="font-poppins text-[8.5px] sm:text-sm">Say Hello!👋</span>
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
                      ? "bg-white/10 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  style={{
                    boxShadow: "inset 0 4px 6px -4px rgba(255, 255, 255, 0.3)",
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