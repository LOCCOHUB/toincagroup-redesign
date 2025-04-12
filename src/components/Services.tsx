const Services = () => {
  const serviceItems = [
    {
      icon: (
        <svg className="h-10 w-10 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Equipamiento y Maquinaria',
      description:
        'Todo el equipamiento y maquinaria para las industrias alimentarias.',
    },
    {
      icon: (
        <svg className="h-10 w-10 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Seguridad/Control',
      description:
        'Pesaje. Medición. Dispositivos de control. Equipos y material de laboratorio. Trabajamos con los mejores proveedores del sector.',
    },
    {
      icon: (
        <svg className="h-10 w-10 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Protección',
      description:
        'Prendas y cubres de protección para uso alimentario. Utensilios de limpieza Vikan. Boligrafos y Marcadores detectables Retreeva.',
    },
    {
      icon: (
        <svg className="h-10 w-10 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Servicio Técnico',
      description:
        'Servicio técnico con garantía. Disponemos de taller propio y técnicos especializados que se desplazan hasta sus instalaciones.',
    },
  ];

  return (
    <section id="servicios" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Nuestros Servicios
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-4 text-lg text-gray-600">
            Desde 1986 procurando soluciones integrales para la industria alimentaria. Especializados en la industria Cárnica.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group rounded-xl bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fde4e6] group-hover:bg-[#f8c7cb]">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 min-h-[120px]">{service.description}</p>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mx-auto mt-12 max-w-xl text-center">
          <div className="inline-flex rounded-md shadow-sm">
            <a
              href="#industria-alimentaria"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-[#de3542] shadow-sm ring-1 ring-[#de3542] transition-colors hover:bg-[#fde4e6] focus:outline-none focus:ring-2 focus:ring-[#de3542] focus:ring-offset-2"
            >
              Ver más servicios
              <svg
                className="ml-2 h-5 w-5"
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
    </section>
  );
};

export default Services;
