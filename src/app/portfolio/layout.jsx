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
    
    // Set responsive size and position for Spotify embed
    const updateSpotifyLayout = () => {
      const isMobile = window.innerWidth < 768;
      const newSize = isMobile 
        ? { width: Math.min(320, window.innerWidth - 32), height: 152 }
        : { width: 352, height: 152 };
      
      setSpotifySize(newSize);
      
      // Set to top-right position
      setPosition({
        x: window.innerWidth - newSize.width - 16,
        y: 16
      });
    };

    updateSpotifyLayout();
    
    // Update on window resize
    window.addEventListener('resize', updateSpotifyLayout);
    return () => window.removeEventListener('resize', updateSpotifyLayout);
  }, [pathname]);

  // Mouse event handlers for dragging
  const handleMouseDown = (e) => {
    if (e.target.tagName === 'IFRAME') return; // Don't drag if clicking on iframe
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    e.preventDefault();
    e.stopPropagation();
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e) => {
    if (e.target.tagName === 'IFRAME') return;
    
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
    e.preventDefault();
    e.stopPropagation();
  };

  // Add global event listeners
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Keep within viewport bounds
      const maxX = window.innerWidth - spotifySize.width;
      const maxY = window.innerHeight - spotifySize.height;

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;

      const touch = e.touches[0];
      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;

      const maxX = window.innerWidth - spotifySize.width;
      const maxY = window.innerHeight - spotifySize.height;

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragStart, position, spotifySize]);

  function handleNav(itemid) {
    setActiveSection(itemid);
    router.push(`/portfolio/${itemid}`);
  }

  function handleSayHello() {
    alert("hello")
    
  }

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Main Content */}
      <main className="pb-32 pt-16 px-6">{children}</main>

      {/* Draggable Spotify Embed */}
      <div
        ref={spotifyRef}
        className={`fixed z-50 select-none -mx-3 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '352px',
          height: '152px',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Drag Handle Area */}
        <div className="absolute inset-0  rounded-2xl p-2  transition-shadow duration-200">
          {/* Visible drag handle */}
          <div className="absolute top-2 left-[45%] right-2 h-4 w-10 rounded-t-xl flex items-center justify-center">
            <div className="w-4 h-1 bg-white/40 rounded-full"></div>
          </div>
          
          <div className="mt-4">
            <iframe
              style={{ 
                borderRadius: "8px", 
                pointerEvents: isDragging ? 'none' : 'auto',
                width: '100%',
                height: '120px'
              }}
              src="https://open.spotify.com/embed/playlist/2JFOKkBTmthAls78hlHBir?utm_source=generator"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navbar */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-sm md:w-[24%]">
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