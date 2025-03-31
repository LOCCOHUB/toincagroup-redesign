const IndustrySection = () => {
  const features = [
    {
      title: 'Maquinaria y Equipamiento',
      description: 'Suministramos toda la maquinaria para la industria alimentaria: mataderos, fabricantes de jamones y embutidos, salas de despiece, carnicerías y otras industrias alimentarias.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
    },
    {
      title: 'Instalaciones',
      description: 'Nos preocupamos de ajustar el factor calidad/precio con los mejores materiales. Nos aseguramos de que cada proyecto esté adaptado a sus necesidades.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
    },
    {
      title: 'Equipamiento de Acero Inoxidable',
      description: 'Todo en acero inoxidable: sumideros, canalinas, mesas, taquillas, armarios desinfectadores, lavamanos. Fabricación a medida según sus necesidades.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
      ),
    },
    {
      title: 'Consumibles y EPIs',
      description: 'Amplia gama de consumibles, repuestos, fungibles, cuchillería, contenedores, y todo lo necesario para el día a día. Certificados para uso alimentario.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="industria-alimentaria" className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-br from-blue-50 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-bl from-blue-50 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div data-aos="fade-up" className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
            INDUSTRIA ALIMENTARIA
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Suministros para la Industria Alimentaria
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="mt-4 text-lg text-gray-600">
            Experiencia para asesorar en proyectos de instalaciones, mejoras y cambios que necesiten sus industrias y negocios.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-xl bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div data-aos="fade-right" className="rounded-xl bg-white p-4 shadow-md">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/images/fibosa-maquinaria-toinca.png"
                  alt="Maquinaria industrial alimentaria"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div data-aos="fade-left" className="space-y-6">
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
                      className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href="#contacto"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                >
                  Solicitar información
                  <svg
                    className="ml-1 h-5 w-5"
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
          </div>
        </div>

        {/* Logos de marcas */}
<div className="mt-16 rounded-xl bg-white p-8 shadow-md">
  <p data-aos="fade-up" className="mb-6 text-center text-sm font-medium uppercase text-gray-500">
    Marcas con las que trabajamos
  </p>
  <div className="text-center text-gray-600">
    <p className="mx-auto max-w-4xl">
      Trabajamos con marcas líderes en la industria alimentaria, garantizando calidad y confianza para nuestros clientes.
    </p>
  </div>
</div>
</div>
</section>
);
};

export default IndustrySection;
