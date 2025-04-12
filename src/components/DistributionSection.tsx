import React from "react";
import ImageGallery from "react-image-gallery";
import "../styles/DistributionSection.css";

const DistributionSection = () => {
  const distributions = [
    {
      title: "Detectables Retreeva",
      description: "Líder mundial en bolígrafos y marcadores detectables.",
      catalog: "/documents/FLYER Retreeva parte trasera.pdf",
    },
    {
      title: "Utensilios de limpieza Vikan",
      description: "También distribuimos productos Vikan, líder en su categoría a nivel mundial.",
      catalog: "/documents/Catálogo Vikan_compressed.pdf",
    },
  ];

  const images = [
    {
      original: "/images/retreeva-toinca-full.png",
      thumbnail: "/images/retreeva-toinca-full.png",
    },
    {
      original: "/images/retreeva-toinca-cepillos.png",
      thumbnail: "/images/retreeva-toinca-cepillos.png",
    },
  ];

  return (
    <section id="distribucion" className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white py-16 md:py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Columna izquierda */}
          <div className="order-2 space-y-6 md:order-2">
            <div data-aos="fade-left" className="inline-flex rounded-full bg-[#fde5e7] px-3 py-1 text-sm font-semibold text-[#de3542]">
              MÁS PROTECCIÓN
            </div>
            <h2 data-aos="fade-left" data-aos-delay="100" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Distribuimos las Mejores Marcas
            </h2>
            <p data-aos="fade-left" data-aos-delay="150" className="text-gray-600">
              En Toinca nos enorgullece ser distribuidores oficiales de marcas líderes en el mercado, ofreciendo productos de alta calidad para las industrias más exigentes.
            </p>

            <div data-aos="fade-left" data-aos-delay="200">
              <h3 className="mb-3 text-xl font-bold text-gray-900">NUESTRAS DISTRIBUCIONES:</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {distributions.map((dist, index) => (
                  <div key={index} className="rounded-lg bg-white p-4 shadow-md">
                    <h4 className="mb-2 font-bold text-[#de3542]">{dist.title}</h4>
                    <p className="text-sm text-gray-600">{dist.description}</p>
                    <a
                      href={dist.catalog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-[#de3542] underline hover:text-red-800"
                    >
                      Descargar catálogo
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="250" className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg bg-[#de3542] px-5 py-3 text-base font-medium text-white shadow-md transition-colors hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-[#de3542] focus:ring-offset-2"
              >
                Solicitar información
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div data-aos="fade-right" className="order-1 md:order-1">
            <div className="relative mx-auto max-w-lg">
              <div className="overflow-hidden rounded-xl bg-white p-2 shadow-xl">
                <div className="overflow-hidden rounded-lg">
                  <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showNav={false}
                    showBullets={true}
                    autoPlay={true}
                    slideInterval={5000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;