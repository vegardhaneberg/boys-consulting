interface CardGridProps {
  cards: CardData[];
}
export interface CardData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.url}
            className="w-64 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-labelledby={`card-title-${card.id}`}
          >
            <div className="w-64 h-64 overflow-hidden">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2
                className="text-xl font-semibold mb-2 truncate"
                style={{ color: "black" }}
              >
                {card.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{card.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
