import React from 'react';

export default function FloatingWhatsApp({ phoneNumber = '918668552465', label = 'Book Now' }) {
  const params = new URLSearchParams({ text: 'Namaste 🙏 I want to book a pooja. Congratulations! You got 10% OFF 🎉' });
  const whatsappUrl = `https://wa.me/${phoneNumber}?${params.toString()}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
        aria-label={label}
        title={label}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.003 2.011.564 3.996 1.59 5.711l-1.023 3.75z" />
        </svg>
      </a>
    </div>
  );
}
