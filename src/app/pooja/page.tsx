import PoojaServicesPage from "../../components/PoojaContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "8668552465 | Book Pandit for All Pujas in Pune | Vedic Pooja",
    description: "8668552465 - Book experienced Pandits for all Vedic Pujas in Pune. 100% Authentic rituals like Griha Pravesh, Vastu Shanti & more. Includes Samagri & Muhurat. Certified Pandits for all Hindu rituals.",
    alternates: {
        canonical: "https://www.vedic-pooja.com/pooja",
    },
};

export default function PoojaPage() {
    return <PoojaServicesPage />;
}
