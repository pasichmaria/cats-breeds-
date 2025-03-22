import { useMemo, useState } from 'react';

import { useGetCatsQuery } from '../services';

export function useCatStatistics() {
  const [filter, setFilter] = useState<{ origin: string; indoor: number | 'all' }>({
    origin: 'all',
    indoor: 'all',
  });

  const { data: cats = [], error, isLoading } = useGetCatsQuery();
  const origins = useMemo(() => [...new Set(cats.map((cat) => cat.origin))], [cats]);

  const filteredCats = useMemo(
    () =>
      cats.filter((cat) => {
        if (filter.origin !== 'all' && filter.origin !== cat.origin) {
          return false;
        }
        if (filter.indoor !== 'all' && filter.indoor !== cat.indoor) {
          return false;
        }
        return true;
      }),
    [cats, filter]
  );

  const adaptabilityData = useMemo(
    () => filteredCats.map((cat) => ({ name: cat.name, value: cat.adaptability })),
    [filteredCats]
  );

  const affectionData = useMemo(
    () => filteredCats.map((cat) => ({ name: cat.name, value: cat.affection_level })),
    [filteredCats]
  );

  const originData = useMemo(() => {
    const countMap = filteredCats.reduce(
      (acc, cat) => {
        const origin = cat.origin || 'Unknown';
        acc[origin] = (acc[origin] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
    return Object.entries(countMap).map(([name, value]) => ({ name, value }));
  }, [filteredCats]);

  const indoorData = useMemo(() => {
    const count = filteredCats.reduce(
      (acc, cat) => {
        if (cat.indoor) acc.indoor++;
        else acc.outdoor++;
        return acc;
      },
      { indoor: 0, outdoor: 0 }
    );
    return [
      { name: 'Indoor', value: count.indoor },
      { name: 'Outdoor', value: count.outdoor },
    ];
  }, [filteredCats]);

  const lifeSpanData = useMemo(
    () =>
      filteredCats.map((cat) => {
        const minSpan = +cat.life_span.split(' ')[0];
        const maxSpan = +cat.life_span.split(' - ')[1];
        return { name: cat.name, value: Math.floor(minSpan + maxSpan / 2) };
      }),
    [filteredCats]
  );

  return {
    adaptabilityData,
    filter,
    setFilter,
    affectionData,
    origins,
    originData,
    indoorData,
    lifeSpanData,
    error,
    isLoading,
    cats: filteredCats.map((cat) => ({
      name: cat.name,
      origin: cat.origin,
      description: cat.description,
      adaptability: cat.adaptability,
      affectionLevel: cat.affection_level,
      lifeSpan: cat.life_span,
    })),
  };
}
