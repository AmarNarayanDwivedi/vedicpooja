import { useState } from "react";
import { useTranslation } from "@/context/LanguageContext.jsx";
import AnimatedSection from "@/components/shared/AnimatedSection.jsx";

/**
 * Booking section with form to request pooja booking via WhatsApp
 */
const BookingSection = ({ forwardedRef }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    poojaType: "Griha Pravesh",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "8668552465";
    const prefilledMessage = `Namaste 🙏, I want to book ${formData.poojaType} on ${formData.date}. My name is ${formData.name}, contact: ${formData.phone}. Message: ${formData.message}`;
    const encodedMessage = encodeURIComponent(prefilledMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section ref={forwardedRef} id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">
            {t.bookingTitle}
          </h2>
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="floating-label">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full p-3 border-2 border-gray-200 bg-white/80 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="text-[#800000] font-semibold"
                  >
                    {t.fullName}
                  </label>
                </div>
                <div className="floating-label">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full p-3 border-2 border-gray-200 bg-white/80 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300"
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="text-[#800000] font-semibold"
                  >
                    {t.phone}
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="poojaType"
                    className="block text-[#800000] font-semibold mb-2"
                  >
                    {t.poojaType}
                  </label>
                  <select
                    id="poojaType"
                    name="poojaType"
                    value={formData.poojaType}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300"
                  >
                    <option>Griha Pravesh</option>
                    <option>Shubh Vivah</option>
                    <option>Satyanarayan Pooja</option>
                    <option>Vastu Shanti Pooja</option>
                    <option>Astrology Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-[#800000] font-semibold mb-2"
                  >
                    {t.preferredDate}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[#800000] font-semibold mb-2"
                >
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-premium w-full py-4 bg-gradient-to-r from-[#E67E22] to-[#F4C430] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:from-[#c66919] hover:to-[#E67E22]"
              >
                {t.sendOnWhatsApp}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingSection;
