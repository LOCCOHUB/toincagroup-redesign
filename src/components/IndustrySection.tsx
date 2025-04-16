const IndustrySection = () => {
  const features = [
    {
      title: 'Maquinaria y Equipamiento',
      description:
        'Suministramos todo el equipamiento y la maquinaria para las industrias alimentarias: mataderos, fabricantes de jamones y embutidos, salas de despiece, procesadoras y fabricantes de productos alimentarios.',
      icon: (
        <svg className="h-6 w-6 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Instalaciones',
      description:
        'Nos preocupamos de ajustar el factor calidad/precio con los mejores materiales. Nos aseguramos de que cada proyecto esté adaptado a sus necesidades.',
      icon: (
        <svg className="h-6 w-6 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
        </svg>
      ),
    },
    {
      title: 'Equipamiento de Acero Inoxidable',
      description:
        'Todo en acero inoxidable: sumideros, canalinas, mesas, taquillas, armarios desinfectadores, lavamanos. Fabricación a medida según sus necesidades.',
      icon: (
        <svg className="h-6 w-6 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Consumibles y EPIs',
      description:
        'Amplia gama de consumibles, repuestos, fungibles, cuchillería, contenedores, y todo lo necesario para el día a día. Certificados para uso alimentario.',
      icon: (
        <svg className="h-6 w-6 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4" />
        </svg>
      ),
    },
  ];

  const images = [
    'fibosa-maquinaria-toinca.png',
    'FOTO 2 BRAHER.jpg',
    'FOTO 4 AK RAMON.png',
    'FOTO 5 MEDOC.jpg',
  ];

  return (
    <section id="industria-alimentaria" className="relative bg-white py-16 md:py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-[#de3542]">
            INDUSTRIA ALIMENTARIA
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Suministros para la Industria Alimentaria
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experiencia para asesorar en proyectos de instalaciones, mejoras y cambios que necesiten sus industrias y negocios.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* SLIDER & TEXTO */}
        <div className="mt-16 grid items-center gap-8 md:grid-cols-2">
          {/* SLIDER automático tipo loop */}
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-md">
            <div className="flex animate-scroll-x gap-4 w-max">
              {[...images, ...images].map((img, i) => (
                <img
                  key={i}
                  src={`/images/${img}`}
                  alt={`Carrusel ${i}`}
                  className="h-64 w-full max-w-[480px] rounded-lg object-cover"
                />
              ))}
            </div>
          </div>

          {/* TEXTO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Experiencia y calidad garantizada</h3>
            <p className="text-gray-600">
              Desde 1986 aumentando y fidelizando clientes. Más de 2000 clientes avalan nuestra trayectoria.
              Optimizamos sus necesidades: nos consideramos sus colaboradores y por eso siempre ofrecemos la solución más adecuada.
            </p>
            <ul className="space-y-3">
              {[
                'Maquinaria de las mejores marcas del mercado',
                'Equipamiento para su industria y su personal',
                'Instalaciones y fabricaciones inox. a medida',
                'Consumibles, EPI´s… certificados para uso alimentario',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#de3542]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="#contacto"
                className="inline-flex items-center font-medium text-[#de3542] hover:text-red-800"
              >
                Solicitar información
                <svg
                  className="ml-1 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animación Tailwind */}
      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default IndustrySection;