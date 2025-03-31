import { useState, useEffect } from 'react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Backdrop gradient con animación */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-white opacity-70"></div>

      {/* Formas decorativas animadas */}
      <div
        className={`absolute top-40 left-10 h-64 w-64 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-20 blur-3xl transition-all duration-1000 ease-in-out ${
          scrolled ? 'translate-x-10 translate-y-10' : ''
        }`}
      ></div>
      <div
        className={`absolute bottom-20 right-10 h-64 w-64 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 opacity-10 blur-3xl transition-all duration-1000 ease-in-out ${
          scrolled ? '-translate-x-10 -translate-y-10' : ''
        }`}
      ></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div data-aos="fade-right" className="space-y-8">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
              Desde 1986 con la Industria Alimentaria
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-gray-900 md:text-5xl lg:text-6xl">
              Suministros <span className="text-blue-600">Integrales</span> para la Industria Alimentaria
            </h1>
            <p className="max-w-xl text-lg text-gray-600">
              Medición y Pesaje - Dispositivos de Control - Equipos y Material de Laboratorio - Protección Food Use - SAT.
              Útiles de limpieza VIKAN. Detectables RETREEVA GLOBAL. Con la mejor relación calidad-precio.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Solicitar información
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Descubrir servicios
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative mx-auto aspect-video max-w-full rounded-2xl bg-white p-2 shadow-2xl md:ml-auto"
          >
            {/* Usaría la imagen de la planta industrial de Toinca */}
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              <img
                src="/images/hero-toinca-industria.jpg"
                alt="Industria alimentaria y fabricación"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">CALIDAD GARANTIZADA</p>
                  <p className="text-sm font-bold text-gray-900">Más de 35 años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Logos de marcas que confían en Toinca */}
<div data-aos="fade-up" className="mt-16 w-full max-w-5xl mx-auto space-y-4">
  <p className="text-center text-sm font-medium uppercase text-gray-500">Primeras marcas que confían en nosotros</p>
  <div className="flex overflow-hidden">
    <div className="flex animate-scroll gap-12 grayscale opacity-70 items-center">
      {/* Logos originales */}
      <div className="w-auto">
        <img src="/images/logo-arcos.png" alt="Arcos" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-braher.png" alt="Braher" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-fibosa.png" alt="Fibosa" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-selecta.png" alt="Retreeva" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-pujolas.png" alt="Arcos" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-dinko.png" alt="Braher" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-maicnar.png" alt="Fibosa" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-martinez-gascon.png" alt="Retreeva" className="h-12 w-auto object-contain" />
      </div>
      {/* Duplicamos los logos para el efecto infinito */}
      <div className="w-auto">
        <img src="/images/logo-pce.png" alt="Arcos" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-monza.png" alt="Braher" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-lotinox.png" alt="Fibosa" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-coc.png" alt="Retreeva" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-ilpra.png" alt="Arcos" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-braher.png" alt="Braher" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-fibosa.png" alt="Fibosa" className="h-12 w-auto object-contain" />
      </div>
      <div className="w-auto">
        <img src="/images/logo-Retreeva.png" alt="Retreeva" className="h-12 w-auto object-contain" />
      </div>
    </div>
  </div>
</div>
</div>
</section>
  );
};

export default Hero;
