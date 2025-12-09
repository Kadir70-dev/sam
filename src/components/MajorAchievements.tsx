import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, X } from 'lucide-react';

type Project = {
  title: string;
  image: string;
};

export function MajorAchievements() {
  const projects: Project[] = [
    {
      title: 'Purchase Invoice',
      image: '/images/bill1.jpg',
    },
    {
      title: 'Order Confirmation',
      image: '/images/bill2.jpg',
    },
    // {
    //   title: 'Denim Fabric Sourcing',
    //   image: '/images/pic1.jpg',
    // },
    // {
    //   title: 'Fabric Store Visit',
    //   image: '/images/pic2.jpg',
    // },
    // {
    //   title: 'Product Sample Showcase',
    //   image: '/images/pic4.jpg',
    // },
  ];

  const [selected, setSelected] = useState<Project | null>(null);

  // ESC close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
  }, [selected]);

  // Download
  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageUrl.split('/').pop() || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="freelancing" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <h2 className="mb-3">Major Achievements</h2>
          <div className="w-16 h-[2px] bg-[#c9a96e]" />
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelected(project)}
              className="group text-left bg-white rounded-lg overflow-hidden border border-[#d4c7b5] hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#e8dfd0]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* BASIC TITLE ONLY */}
              <div className="p-4">
                <h5 className="text-sm text-[#2c2419] font-medium">{project.title}</h5>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          {/* Modal Box */}
          <div className="relative z-10 max-w-3xl w-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-[#e6dccb]">

              {/* Header with Title */}
              <div className="flex items-center justify-between p-4 border-b border-[#f0e9de]">
                <h3 className="text-lg font-medium">{selected.title}</h3>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownload(selected.image)}
                    className="px-3 py-1 rounded-md bg-[#c9a96e] text-white text-sm hover:brightness-95"
                  >
                    Download
                  </button>

                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 rounded-md hover:bg-[#f3efe8]"
                  >
                    <X className="w-5 h-5 text-[#6b5d50]" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="bg-[#f7f2ea] p-4 flex items-center justify-center">
                <div className="max-h-[70vh] w-full overflow-hidden">
                  <ImageWithFallback
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
