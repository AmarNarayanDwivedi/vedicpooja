"use client";

import PoojaServicesPage from "../../../components/PoojaContent";
import { useParams } from "next/navigation";

export default function PoojaDetailSlugPage() {
    const params = useParams();
    const slug = params?.slug as string;

    return <PoojaServicesPage slug={slug} />;
}
