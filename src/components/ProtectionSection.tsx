import React from "react";
import ImageGallery from "react-image-gallery";
import "../styles/ProtectionSection.css";

const ProtectionSection = () => {
  const features = [
    {
      title: 'Reducción de costes',
      description: 'Prendas de alta durabilidad que reducen significativamente los costes a largo plazo.'
    },
    {
      title: 'Reducción de residuos',
      description: 'Contribuye a la sostenibilidad reduciendo los residuos plásticos gracias a su larga vida útil.'
    },
    {
      title: 'Alta resistencia',
      description: 'Fabricadas con Pure Ester-Based Polyurethane para una resistencia y durabilidad superior.'
    },
    {
      title: 'Fácil limpieza',
      description: 'De una sola pieza y permiten lavadora y secadora, simplificando su mantenimiento.'
    },
  ];

  // Array de imágenes para la galería (sin descripciones)
  const images = [
    {
      original: "/images/topdog-carrito.jpg",
      thumbnail: "/images/topdog-carrito.jpg",
    },
    {
      original: "/images/topdog-bata.png",
      thumbnail: "/images/topdog-bata.png",
    },
    {
      original: "/images/topdog-bata-AZUL-TLB.png",
      thumbnail: "/images/topdog-bata-AZUL-TLB.png",
    },
  ];

  return (
    <section id="protección" className="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-gray-50 py-16 md:py-24">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-cyan-400 opacity-5"></div>
        <div className="absolute -bottom-64 -left-64 h-[600px] w-[600px] rounded-full bg-cyan-500 opacity-5"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 space-y-6 md:order-1">
            <div data-aos="fade-right" className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800">
              PROTECCIÓN
            </div>
            <h2 data-aos="fade-right" data-aos-delay="100" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Protección Toinca TopDog
            </h2>
            <p data-aos="fade-right" data-aos-delay="150" className="text-gray-600">
              Somos Distribuidor Oficial para España y Portugal de la gama de productos Top Dog.
              Las prendas están pensadas para las industrias y ambientes más exigentes.
              Made in Canada.
            </p>

            <div data-aos="fade-right" data-aos-delay="200">
              <h3 className="mb-3 text-xl font-bold text-gray-900">OBJETIVOS:</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="rounded-lg bg-white p-4 shadow-md">
                    <h4 className="mb-2 font-bold text-cyan-700">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-right" data-aos-delay="250" className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
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
              <a
                href="/documents/catalogo-toinca-topdog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
              >
                <svg
                  className="mr-2 h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                Descargar catálogo
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className="order-1 md:order-2">
            <div className="relative mx-auto max-w-lg">
              {/* Bandera de Canadá como elemento decorativo */}
              <div className="absolute -right-4 -top-4 z-10 rounded bg-white p-1 shadow-lg">
                <div className="flex items-center space-x-2 px-2 py-1">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/32px-Flag_of_Canada.svg.png"
                    alt="Bandera de Canadá"
                    className="h-6 w-auto"
                  />
                  <span className="text-xs font-medium">Made in Canada</span>
                </div>
              </div>

              {/* Galería */}
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

              {/* Badge flotante con características */}
              <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-4 shadow-lg">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Ligeros y resistentes</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Reutilizable. Impermeable</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Aptos para contacto con alimentos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-action para visitar el sitio web dedicado */}
        <div data-aos="fade-up" className="mx-auto mt-16 max-w-4xl rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 p-8 text-center shadow-lg">
          <h3 className="mb-3 text-2xl font-bold text-white">¿Quiere conocer más sobre nuestras prendas protectoras?</h3>
          <p className="mb-6 text-cyan-100">
            Visite nuestro sitio web dedicado a Top Dog para descubrir toda la línea de productos y sus beneficios.
          </p>
          <a
            href="http://toincatopdog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-cyan-600 shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
          >
            Visitar sitio web
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection; 