import PoojaCard from "@/components/PoojaCard";
import { poojaServicesData } from "@/data/poojaServices";

/**
 * Popular Poojas section displaying selected popular pooja services
 */
const PopularPoojasSection = ({ onBookPoojaClick }: { onBookPoojaClick?: (title?: string, plan?: string, price?: number) => void }) => {
  // Get 12 random poojas from the data
  const getRandomPoojas = (data: any[], count: number) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomPoojas = getRandomPoojas(poojaServicesData, 12);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Most Popular Poojas
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Book experienced and verified Pandits for all your spiritual needs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-stretch">
          {randomPoojas.map((pooja) => (
            <PoojaCard
              key={pooja.id}
              pooja={pooja}
              onBookClick={onBookPoojaClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPoojasSection;
