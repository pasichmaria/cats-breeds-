export const Card = ({
  name,
  origin,
  description,
  adaptability,
  affectionLevel,
  lifeSpan,
}: {
  name: string;
  origin: string;
  description: string;
  adaptability: number;
  affectionLevel: number;
  lifeSpan: string;
}) => {
  return (
    <div className="p-6 bg-white border border-gray-200 shadow-lg rounded-xl ">
      <h2 className="text-2xl font-bold  text-black">{name}</h2>
      <p className="mt-2  text-black">{description}</p>
      <ul className="mt-4 space-y-2  text-black">
        <li className="flex items-center gap-2">
          <span className="font-semibold">🌍 Origin:</span> {origin}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">📊 Adaptability:</span> {adaptability}/5
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">❤️ Affection Level:</span> {affectionLevel}/5
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">⏳ Life Span:</span> {lifeSpan} years
        </li>
      </ul>
    </div>
  );
};
