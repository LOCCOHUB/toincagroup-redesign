import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#">
              <img
                src="/images/logo-toinca-principal.png"
                alt="Toinca Group Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Navegación de escritorio */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'Industria Alimentaria', 'Control/Seguridad', 'Protección', 'Servicio Técnico', 'Contacto'].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-').replace('/', '-')}`}
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Botón del menú móvil */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú principal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 rounded-lg bg-white p-4 shadow-lg">
            <ul className="space-y-4">
              {['Home', 'Industria Alimentaria', 'Control/Seguridad', 'Protección', 'Servicio Técnico', 'Contacto'].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-').replace('/', '-')}`}
                      className="block py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;