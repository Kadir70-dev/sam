import { useEffect, useState } from 'react';
import { DownloadCloud } from 'lucide-react';

export function Navigation() {
  const pdfPath = '/Portflio.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop() || 'Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#d4c7b5]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl text-[#2c2419] hover:text-[#8b7355] transition-colors"
              aria-label="Go to top"
            >
              <span className="font-serif">SS</span>
            </button>

            {/* ONLY DOWNLOAD BUTTON */}
            <button
              onClick={handleDownload}
              title="View Results"
              aria-label="Download Portfolio (download PDF)"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-gradient-to-r from-[#bfa85f] to-[#c9a96e] text-white text-sm hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#bfa85f] shadow-sm transition"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
                <DownloadCloud className="w-4 h-4 text-white" />
              </span>

              <span className="font-medium text-sm tracking-wide">View Results</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
