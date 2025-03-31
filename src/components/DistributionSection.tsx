import React from "react";
import ImageGallery from "react-image-gallery";
import "../styles/DistributionSection.css";

const DistributionSection = () => {
  const distributions = [
    {
      title: "Detectables Retreeva",
      description: "Líder mundial en bolígrafos y marcadores detectables.",
    },
    {
      title: "Utensilos de limpieza Vikan",
      description: "También distribuimos productos Vikan, líder en su categoría a nivel mundial.",
    },
  ];

  // Array de imágenes para la galería
  const images = [
    {
      original: "/images/retreeva-toinca-full.png", // Cambia esto por la ruta de la imagen real
      thumbnail: "/images/retreeva-toinca-full.png",
    },
    {
      original: "/images/retreeva-toinca-cepillos.png", // Cambia esto por la ruta de la imagen real
      thumbnail: "/images/retreeva-toinca-cepillos.png",
    },
  ];

  return (
    <section id="distribucion" className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white py-16 md:py-24">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-blue-400 opacity-5"></div>
        <div className="absolute -bottom-64 -left-64 h-[600px] w-[600px] rounded-full bg-blue-500 opacity-5"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 space-y-6 md:order-2">
            <div data-aos="fade-left" className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
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
                    <h4 className="mb-2 font-bold text-blue-700">{dist.title}</h4>
                    <p className="text-sm text-gray-600">{dist.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="250" className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Solicitar información
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <div data-aos="fade-right" className="order-1 md:order-1">
            <div className="relative mx-auto max-w-lg">
              {/* Galería con dos imágenes */}
              <div className="overflow-hidden rounded-xl bg-white p-2 shadow-xl">
                <div className="overflow-hidden rounded-lg">
                  <ImageGallery
                    items={images}
                    showThumbnails={false} // Oculta las miniaturas
                    showPlayButton={false} // Oculta el botón de play
                    showFullscreenButton={false} // Oculta el botón de pantalla completa
                    showNav={false} // Oculta las flechas de navegación
                    showBullets={true} // Muestra los puntos/indicadores debajo de la galería
                    autoPlay={true} // Hace que la galería se reproduzca automáticamente
                    slideInterval={5000} // Cambia de imagen cada 5 segundos
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