"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const InstagramPopup = () => {
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        const t = setTimeout(() => setOpen(true), 8000);
        return () => clearTimeout(t);
    }, []);
    if (!open) return null;
    return (
        <div className="fixed bottom-24 right-2 sm:right-5 z-50">
            <div className="bg-white rounded-xl shadow-2xl border border-[#E67E22] p-3 sm:p-4 w-72 sm:w-80 relative">
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    ×
                </button>
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-xl sm:text-2xl">📸</span>
                    <div>
                        <div className="font-bold text-[#800000] text-sm sm:text-base">
                            Follow us on Instagram
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                            Check our Insta page for latest pooja updates
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <a
                        href="https://instagram.com/adityanarayan3081"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded-lg border border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white transition-colors text-sm sm:text-base"
                    >
                        Open Instagram
                    </a>
                    <a
                        href={`https://wa.me/8668552465?text=${encodeURIComponent(
                            "Namaste 🙏 Please share your Instagram page link. I came from your website popup."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 text-sm sm:text-base"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Scroll to hash logic
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            } else {
                setTimeout(() => {
                    const lateEl = document.getElementById(id);
                    lateEl && lateEl.scrollIntoView({ behavior: "smooth" });
                }, 300);
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    return (
        <LanguageProvider>
            <div
                style={{
                    fontFamily: "'Inter', 'Lato', sans-serif",
                    backgroundColor: "#FFF7E6",
                    backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(192, 161, 107, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(230, 126, 34, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(192, 161, 107, 0.02) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23E67E22' fill-opacity='0.25'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover, cover, cover, 60px 60px",
                }}
            >
                <Header />
                <main className="pt-20 min-h-screen">{children}</main>
                <FloatingWhatsApp phoneNumber="8668552465" label="Book Now" />
                <InstagramPopup />
                <Footer />
            </div>
        </LanguageProvider>
    );
}
