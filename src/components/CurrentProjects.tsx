import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, X } from 'lucide-react';

type Item = {
  image: string;
};

export function CurrentProjects() {
  const items: Item[] = [
    { image: '/images/jam1.jpg' },
    { image: '/images/cur1.jpg' },
  ];

  const [selected, setSelected] = useState<Item | null>(null);
  const [zoom, setZoom] = useState(1);

  // ESC + zoom shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === '+' && selected) setZoom((z) => Math.min(2, z + 0.1));
      if (e.key === '-' && selected) setZoom((z) => Math.max(0.5, z - 0.1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    if (!selected) setZoom(1);
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
    <section id="current-projects" className="py-20 px-6 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto w-full">

        <div className="mb-12">
          <h2 className="mb-3">Current Ongoing Projects</h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, index) => (
            <button
              key={index}
              onClick={() => setSelected(it)}
              className="group bg-white rounded-lg overflow-hidden border border-[#d4c7b5] hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#e8dfd0]">
                <ImageWithFallback
                  src={it.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
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

          {/* Modal */}
          <div className="relative z-10 max-w-4xl w-full">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-[#e6dccb]">

              {/* Header (No title) */}
              <div className="flex items-center justify-end p-4 border-b border-[#f0e9de]">

                <button
                  onClick={() => handleDownload(selected.image)}
                  className="px-3 py-1 rounded-md bg-[#c9a96e] text-white text-sm hover:brightness-95"
                >
                  Download
                </button>

                <a
                  href={selected.image}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 px-3 py-1 rounded-md border border-[#e6dccb] text-sm hover:bg-[#f3efe8]"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelected(null)}
                  className="ml-2 p-2 rounded-md hover:bg-[#f3efe8]"
                >
                  <X className="w-5 h-5 text-[#6b5d50]" />
                </button>
              </div>

              {/* Image View */}
              <div className="bg-[#f7f2ea] p-4 flex items-center justify-center">
                <div className="max-h-[75vh] w-full overflow-hidden flex items-center justify-center">
                  <div
                    style={{ transform: `scale(${zoom})`, transition: 'transform 160ms ease' }}
                    className="w-full flex items-center justify-center"
                  >
                    <ImageWithFallback
                      src={selected.image}
                      alt=""
                      className="object-contain max-h-[70vh] w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Zoom Controls */}
              <div className="p-4 flex justify-center gap-4 border-t border-[#f0e9de]">
                <button
                  onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}
                  className="px-4 py-2 bg-[#f1ebe2] rounded-md hover:bg-[#e7dfd3]"
                >
                  −
                </button>

                <button
                  onClick={() => setZoom((z) => Math.min(2, z + 0.1))}
                  className="px-4 py-2 bg-[#f1ebe2] rounded-md hover:bg-[#e7dfd3]"
                >
                  +
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
