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
    <section id="home" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Lado izquierdo: texto */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="inline-block rounded-full bg-[#fde5e7] px-4 py-1 text-sm font-medium text-[#de3542]">
              Desde 1986 con la Industria Alimentaria
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-gray-900 md:text-5xl lg:text-6xl">
              Suministros <span className="text-[#de3542]">Integrales</span> para la Industria Alimentaria
            </h1>
            <p className="text-xl text-gray-800">
              Equipamiento – Maquinaria – Instalaciones – Útiles y Herramientas – Consumibles – Vestuario – Calzado
            </p>
            <p className="max-w-xl text-lg text-gray-600">
              Medición y Pesaje - Dispositivos de Control - Equipos y Material de Laboratorio - Protección Food Use - SAT.
              Útiles de limpieza VIKAN. Detectables RETREEVA GLOBAL.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg bg-[#de3542] px-6 py-3 text-base font-medium text-white shadow-lg transition-colors hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-[#de3542] focus:ring-offset-2"
              >
                Solicitar información
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-lg border border-[#de3542] bg-white px-6 py-3 text-base font-medium text-[#de3542] shadow-sm transition-colors hover:bg-[#fde5e7] focus:outline-none focus:ring-2 focus:ring-[#de3542] focus:ring-offset-2"
              >
                Descubrir servicios
              </a>
            </div>
          </div>

          {/* Lado derecho: imagen */}
          <div
            data-aos="fade-left"
            className="relative mx-auto aspect-video max-w-full rounded-2xl bg-white p-2 shadow-2xl md:ml-auto"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
              <img
                src="/images/hero-toinca-industria.jpg"
                alt="Industria alimentaria y fabricación"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fde5e7]">
                  <svg
                    className="h-6 w-6 text-[#de3542]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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

        {/* Carrusel de marcas */}
        <div data-aos="fade-up" className="mt-16 w-full max-w-5xl mx-auto space-y-4 overflow-hidden">
          <p className="text-center text-sm font-medium uppercase text-gray-500">
            Primeras marcas que confían en nosotros
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-12 items-center whitespace-nowrap">
              {[
                "logo-arcos.png",
                "logo-braher.png",
                "logo-fibosa.png",
                "logo-selecta.png",
                "logo-pujolas.png",
                "logo-dinko.png",
                "logo-maicnar.png",
                "logo-martinez-gascon.png",
                "logo-pce.png",
                "logo-monza.png",
                "logo-lotinox.png",
                "logo-coc.png",
                "logo-ilpra.png",
                "logo-braher.png",
                "logo-fibosa.png",
                "logo-Retreeva.png"
              ].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-auto">
                  <img
                    src={`/images/${logo}`}
                    alt={logo.replace("logo-", "").replace(".png", "")}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;