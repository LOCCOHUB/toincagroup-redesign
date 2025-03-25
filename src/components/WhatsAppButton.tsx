const WhatsAppButton = () => {
    const phoneNumber = "+34657896604"; // Reemplaza con el número de WhatsApp de Toinca (con código de país, ej. +34612345678)
    const message = "Hola, quiero más información sobre Toinca Group.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.563 4.245 1.632 6.104L0 24l5.896-1.632A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.001c-1.959 0-3.854-.563-5.478-1.632l-.396-.24-3.498.97.975-3.498-.24-.396A9.956 9.956 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.987-6.987c-.324-.162-1.92-.948-2.22-1.056-.3-.108-.518-.162-.737.162-.218.324-.848 1.056-.948 1.272-.108.216-.216.243-.396.162-.18-.081-.78-.36-1.488-.972-.468-.405-.786-.9-.948-1.404-.162-.504.018-.486.126-.648.108-.162.216-.405.324-.648.108-.243.054-.486-.054-.648-.108-.162-.948-2.322-1.296-3.186-.324-.81-.648-.702-.948-.702-.3 0-.54 0-.738-.018-.198 0-.54.072-.822.378-.282.306-.282 1.134-.282 1.944 0 .81.582 1.62 1.296 2.43.714.81 2.43 2.754 5.886 3.834.81.27 1.44.216 1.944.108.54-.108 1.62-.648 1.854-1.296.234-.648.234-.972.162-1.134-.072-.162-.324-.216-.648-.378z" />
        </svg>
      </a>
    );
  };
  
  export default WhatsAppButton;