const TechnicalService = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="h-10 w-10 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      title: 'Servicio Técnico Maquinaria Industria Alimentaria',
      description: 'Reparamos con eficiencia y rapidez sus máquinas y estamos especializados en Embasadoras de Vacío, Balanzas/Básculas y Autoclaves para Conservas.',
      image: '/images/FOTO 2 BRAHER.jpg',
    },
    {
      id: 2,
      icon: (
        <svg className="h-10 w-10 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Servicio Técnico Equipos de Laboratorio',
      description: 'Reparación efectiva de equipos y aparatos de laboratorio. Especialistas en Autoclaves y Estufas.',
      image: 'https://ext.same-assets.com/2935114617/3466541389.png',
    },
    {
      id: 3,
      icon: (
        <svg className="h-10 w-10 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Servicios de mantenimiento preventivo',
      description: 'Nos anticipamos a las averías con nuestro concienzudo servicio de mantenimiento preventivo.',
      image: 'https://ext.same-assets.com/2935114617/1592512145.jpeg',
    },
    {
      id: 4,
      icon: (
        <svg className="h-10 w-10 text-[#de3542]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Tramitación de calibraciones',
      description: 'Tramitamos con rapidez calibraciones de dispositivos y aparatos, con laboratorios acreditados para ello.',
      image: 'https://ext.same-assets.com/2935114617/2023561713.jpeg',
    },
  ];

  return (
    <section id="servicio-técnico" className="bg-gradient-to-b from-gray-100 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div data-aos="fade-up" className="inline-flex rounded-full bg-[#fde5e7] px-3 py-1 text-sm font-semibold text-[#de3542]">
            SERVICIO TÉCNICO
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Servicio Técnico con Garantía
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="mt-4 text-lg text-gray-600">
            Disponemos de taller propio en nuestras instalaciones y si es necesario, desplazamos a nuestros técnicos.
            Contáctanos para un servicio técnico confiable y profesional.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fde5e7]">
                    {service.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#de3542] shadow-md transition-transform duration-300 group-hover:rotate-45">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="flex-1 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl bg-[#de3542] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div data-aos="fade-right" className="text-white">
              <h3 className="text-xl font-bold md:text-2xl">¿Necesita ayuda técnica?</h3>
              <p className="mt-4">
                Consulte cuál es el problema, le contestamos rápidamente si estamos capacitados para solucionarlo y
                nuestra disponibilidad. Cumplimos con los compromisos y no hacemos perder el tiempo.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-red-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Técnicos especializados</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-red-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Respuesta rápida</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-red-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Garantía en reparaciones</span>
                </li>
              </ul>
            </div>
            <div data-aos="fade-left" className="flex flex-col justify-center">
              <a
                href="#contacto"
                className="rounded-lg bg-white px-6 py-3 text-center font-medium text-[#de3542] shadow-md transition-colors hover:bg-gray-100"
              >
                Solicitar asistencia técnica
              </a>
              <p className="mt-4 text-center text-sm text-red-100">
                Nos pondremos en contacto con usted a la mayor brevedad posible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalService;