"use client"
import { useRouter } from "next/navigation"

export default function landing() {
  const router = useRouter()
  
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
        {/* Shooting stars */}
{[...Array(100)].map((_, i) => (
  <div
    key={i}
    className="absolute"
    style={{
      top: `${Math.random() * 100}%`,
      right: `${Math.random() * 100}%`,
      animation: `shootingStar ${3 + Math.random() * 4}s linear infinite`,
      animationDelay: `${i * 0.01}s`,
    }}
  >
    {/* Tail effect only */}
    <div 
      className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-gray-300 to-transparent opacity-40"
      style={{
        transform: 'rotate(45deg) translateX(-100%)',
        transformOrigin: 'left center'
      }}
    />
  </div>
))}

      </div>
      {/* Spotlight background effects */}
      <div className="absolute inset-0">
       
        
        {/* Additional spotlights - top left and bottom right */}
        <div 
          className="absolute top-0 left-0 z-0 w-[500px] h-[600px] rounded-full blur-2xl translate-x-[-140px] translate-y-[-160px]"
          style={{
            background: 'radial-gradient(circle, rgba(0,136, 255, 0.2) 0%, rgba(17, 24, 39, 0.06) 50%, transparent 100%)'
          }}
        />
        <div 
          className="absolute bottom-0 z-0 right-0 w-[500px] h-[600px] rounded-full blur-2xl translate-x-[250px] translate-y-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(0,136, 255, 0.2) 0%, rgba(0,136, 255, 0.06) 50%, transparent 100%)'
          }}
        />
        
        {/* Subtle edge lighting */}
        <div 
          className="absolute top-0 left-0 w-full h-32"
          style={{
            background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.1) 0%, transparent 100%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: 'linear-gradient(to top, rgba(17, 24, 39, 0.1) 0%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:pb-24">
        <div className="text-center md:space-y-4">
          {/* Main title with silver glossy effect */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
            <span className="block font-poppins bg-gray-300 bg-clip-text pb-6 text-transparent filter drop-shadow-lg">
              Kinshuk Bageja
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl pb-4  italic bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
            presents
          </p>
          
          <p className="text-3xl md:text-6xl md:pb-5 font-fleur bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
            The Portfolio
          </p>
          
          {/* Call to action */}
        </div>
      </div>
      
      {/* Fixed bottom navigation */}
<nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
  <div className="mt-16">
    <button className="px-8 py-4 bg-transparent border border-white rounded-full text-white font-medium hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-200 hover:to-gray-300 hover:text-black hover:font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"  onClick={() => router.push("/portfolio")}>
      <span className="font-poppins">
        Explore My Universe
      </span>
    </button>
  </div>
</nav>
    </div>
  )
}