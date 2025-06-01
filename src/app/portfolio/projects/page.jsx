"use client"
import React, { useState } from 'react';
import { Calendar, Code, Filter, Search, Github, Globe } from 'lucide-react';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

  // Helper function to convert Google Drive share links to direct image URLs


  // Sample projects object - replace with your actual data
  const projects = [
    {
      title: "Zwigato E-Commerce Platform",
      desc: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Features include user authentication, product catalog, shopping cart, and order tracking.",
      techStack: "React.js, Node.js, Express.js, MongoDB, RazorPay",
      imageLink: "/zwigato.png",
      date: "2024-04-15",
      deployedLink: "https://zwigato-omega.vercel.app/",  
      githubRepo: "https://github.com/kbageja/zwigato"
    },
    {
      title: "AI Powered Health Dashboard",
      desc: "Real-time chat application powered by AI with natural language processing capabilities. Includes message encryption, file sharing, and smart response suggestions.",
      techStack: "Next.js, Gemini API, MongoDB, Typescript",
      imageLink: "/aihealth.png",
      date: "2025-03-22",
      deployedLink: "https://health-prototype.vercel.app/",
      githubRepo: "https://github.com/kbageja/health-prototype"
    },
    {
      title: "Nudgr - Task Management System",
      desc: "Collaborative project management tool with Kanban boards, team collaboration features, time tracking, and detailed analytics dashboard for productivity insights.",
      techStack: "Next.js, Express.js, PostgreSQL, Node.js, Supabase , Prisma , Nodemailer , Redis , Typescript , TailwindCSS , FramerMotion",
      imageLink: "/nudgr.png", // This will be converted
      date: "2025-04-10",
      deployedLink: "https://nudgr.vercel.app",
      githubRepo: "https://github.com/kbageja/Nudgr"
    },
    {
      title: "Weather Website",
      desc: "Interactive weather data visualization platform with historical analysis, forecasting models, and customizable alerts for multiple locations worldwide.",
      techStack: "HTML , CSS , Javascript",
      imageLink: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      date: "2023-04-08",
      deployedLink: "",
      githubRepo: "https://github.com/kbageja/weather-app"
    },
    {
      title: "Npm UI Package",
      desc: "Interactive weather data visualization platform with historical analysis, forecasting models, and customizable alerts for multiple locations worldwide.",
      techStack: "React.js , Material UI, TailwindCSS",
      imageLink: "/kverse.png",
      date: "2024-04-08",
      deployedLink: "",
      githubRepo: "https://github.com/kbageja/Kverse2"
    },
    {
      title: "Bulk Emailer",
      desc: "Interactive weather data visualization platform with historical analysis, forecasting models, and customizable alerts for multiple locations worldwide.",
      techStack: "React.js , MongoDB , TailwindCSS , OpenAI Api, Node.js, NodeMailer , Express.js , ReactQuery",
      imageLink: "/bulkemailer.png",
      date: "2025-02-01",
      deployedLink: "",
      githubRepo: "https://github.com/kbageja/AI-Email-project"
    },
  ];

  // Sort projects by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get all unique technologies for filter
  const allTechnologies = [...new Set(
    projects.flatMap(project => 
      project.techStack.split(', ').map(tech => tech.trim())
    )
  )].sort();

  // Filter projects based on search and tech filter
  const filteredProjects = sortedProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTech = selectedTech === '' || project.techStack.includes(selectedTech);
    
    return matchesSearch && matchesTech;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-4 sm:p-8 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-400">
              <Code className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white bg-clip-text ">
              My Projects
            </h1>
          </div>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and development projects. Each project showcases different technologies and problem-solving approaches.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="pl-10 pr-8 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors appearance-none cursor-pointer min-w-[200px]"
            >
              <option value="">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Count */}
        <div className="mb-6">
          <p className="text-neutral-400 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-neutral-900/80 backdrop-blur-sm rounded-2xl border border-neutral-800 overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-100/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageLink}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // First fallback: try original URL
                    if (e.target.src !== project.imageLink) {
                      e.target.src = project.imageLink;
                    } else {
                      // Final fallback: default image
                      e.target.src = 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800&h=600&fit=crop';
                    }
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(project.date)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-xs font-medium text-neutral-300 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(', ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-neutral-800 text-white text-xs rounded-md border border-neutral-700 hover:bg-green-400 hover:text-black transition-colors cursor-pointer"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-neutral-800">
                  {project.deployedLink && (
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center border border-white justify-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-green-400 hover:text-black hover:border-0 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 group/btn"
                    >
                      <Globe className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-green-400 hover:border-0 border border-white text-white hover:text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Projects Found</h3>
            <p className="text-neutral-400">Try adjusting your search terms or filters.</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          <div className="bg-neutral-900/50 rounded-xl p-6 text-center border border-neutral-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{projects.length}</div>
            <div className="text-neutral-400 text-sm">Total Projects</div>
          </div>
          <div className="bg-neutral-900/50 rounded-xl p-6 text-center border border-neutral-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{allTechnologies.length}</div>
            <div className="text-neutral-400 text-sm">Technologies Used</div>
          </div>
          <div className="bg-neutral-900/50 rounded-xl p-6 text-center border border-neutral-800">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {new Date().getFullYear() - new Date(Math.min(...projects.map(p => new Date(p.date)))).getFullYear() + 1}
            </div>
            <div className="text-neutral-400 text-sm">Years Active</div>
          </div>
        </div>
      </div>
    </div>
  );
}