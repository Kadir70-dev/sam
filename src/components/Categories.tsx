import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, X } from 'lucide-react';

type Item = {
  image: string;
};

export function CategoriesWorking() {
  const items: Item[] = [
      { image: '/images/fab1.jpg' },
      { image: '/images/fab2.jpg' },
      { image: '/images/pant1.jpg' },
      { image: '/images/pic1.jpg' },     
    // { image: '/images/studio1.jpg' },
    { image: '/images/suit1.jpg' },
    { image: '/images/tshirt1.jpg' },
    { image: '/images/tshirt2.jpg' },
    { image: '/images/thshirt3.jpg' },
    { image: '/images/thshirt4.jpg' },
  ];

  const [selected, setSelected] = useState<Item | null>(null);
  const [zoom, setZoom] = useState(1);

  // ESC close + zoom shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === '+' && selected) setZoom((z) => Math.min(2, Number((z + 0.1).toFixed(2))));
      if (e.key === '-' && selected) setZoom((z) => Math.max(0.5, Number((z - 0.1).toFixed(2))));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    if (!selected) setZoom(1);
  }, [selected]);

  // Download helper
  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageUrl.split('/').pop() || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="categories-working" className="py-20 px-6 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="mb-3">Categories Working On Currently</h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, index) => (
            <button
              key={index}
              onClick={() => setSelected(it)}
              className="group bg-white rounded-lg overflow-hidden border border-[#d4c7b5] hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#e8dfd0]">
                <ImageWithFallback
                  src={it.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

          {/* Modal Box */}
          <div className="relative z-10 max-w-4xl w-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-[#e6dccb]">

              {/* Header (no title) */}
              <div className="flex items-center justify-end p-4 border-b border-[#f0e9de]">
                <div className="flex items-center gap-2">
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
                    className="px-3 py-1 rounded-md border border-[#e6dccb] text-sm hover:bg-[#f3efe8] flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 rounded-md hover:bg-[#f3efe8]"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-[#6b5d50]" />
                  </button>
                </div>
              </div>

              {/* Image Zoom View */}
              <div className="bg-[#f7f2ea] p-4 flex items-center justify-center">
                <div className="max-h-[75vh] w-full overflow-hidden flex items-center justify-center">
                  <div
                    style={{
                      transform: `scale(${zoom})`,
                      transition: 'transform 160ms ease',
                    }}
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

              {/* Zoom buttons */}
              <div className="p-4 flex justify-center gap-4 border-t border-[#f0e9de]">
                <button
                  onClick={() => setZoom((z) => Math.max(0.5, Number((z - 0.1).toFixed(2))))}
                  className="px-4 py-2 rounded-md bg-[#f1ebe2] hover:bg-[#e7dfd3]"
                >
                  −
                </button>

                <button
                  onClick={() => setZoom((z) => Math.min(2, Number((z + 0.1).toFixed(2))))}
                  className="px-4 py-2 rounded-md bg-[#f1ebe2] hover:bg-[#e7dfd3]"
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
