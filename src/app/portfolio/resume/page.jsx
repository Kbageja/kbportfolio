"use client"
import React, { useState } from 'react';
import { Download, Maximize2, Minimize2, FileText } from 'lucide-react';

export default function ResumePage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Replace with your Google Drive file ID
  // Extract the file ID from your Google Drive link
  // Example: https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view
  // The file ID is: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
  const googleDriveFileId = "1o5N6UuCwggraioPg64xe3I8FHNHafyZo";

  // Google Drive embed URL for viewing
  const resumeViewUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;
  
  // Google Drive direct download URL
  const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeDownloadUrl;
    link.download = 'Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-4 sm:p-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-gradient-to-r from-green-500 to-green-400">
              <FileText className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text text-transparent">
              Resume
            </h1>
          </div>
        </div>

        {/* Resume Viewer Container */}
        <div className={`bg-neutral-900/80 backdrop-blur-sm rounded-2xl border border-neutral-800 shadow-2xl transition-all duration-300 ${
          isFullscreen ? 'fixed inset-4 z-50' : 'relative'
        }`}>
          {/* Viewer Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Professional Resume</h3>
              <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Live Preview
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadResume}
                className="group flex items-center gap-2 px-4 py-2 bg-green-400 hover:bg-green-300 text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
                title="Download Resume"
              >
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Download</span>
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 text-neutral-400 hover:text-green-400 hover:bg-neutral-800 rounded-lg transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* PDF Viewer */}
          <div className={`${isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[100vh]'} p-4`}>
            <iframe
              src={resumeViewUrl}
              className="w-full h-full rounded-lg bg-white shadow-inner"
              title="Resume PDF Viewer"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
          
          {/* Loading State Fallback */}
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/50 rounded-2xl backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="loading-overlay">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-neutral-600 border-t-green-400 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-neutral-400">Loading Resume...</p>
            </div>
          </div>
        </div>



        {/* Instructions */}
        <div className="mt-6 p-4 bg-neutral-900/30 rounded-xl border border-neutral-800">
          <p className="text-neutral-400 text-sm text-center">
            <span className="text-green-400 font-medium">Tip:</span> Use the fullscreen button for better viewing experience or click download for offline access.
          </p>
        </div>
      </div>
    </div>
  );
}