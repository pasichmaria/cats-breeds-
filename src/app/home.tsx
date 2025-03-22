import {
  BarChartComponent,
  ChartCard,
  Error,
  Loading,
  PieChartComponent,
  CatFilters,
  Card
} from '../components';
import { useAuth, useCatStatistics } from '../core';

import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, navigate]);

  const {
    adaptabilityData,
    affectionData,
    origins,
    originData,
    indoorData,
    lifeSpanData,
    error,
    isLoading,
    setFilter,
    filter,
    cats,
  } = useCatStatistics();

  if (isLoading) return <Loading />;
  if (error) return <Error title="Error fetching data" message="Please try again later." />;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Cat Breeds Statistics</h1>
      <CatFilters origins={origins} filter={filter} setFilter={setFilter} />
      <div className="grid md:grid-cols-2 gap-8">
        <ChartCard title="Adaptability Distribution">
          <BarChartComponent data={adaptabilityData} color="#0088FE" />
        </ChartCard>
        <ChartCard title="Affection Levels">
          <BarChartComponent data={affectionData} color="#00C49F" />
        </ChartCard>
        <ChartCard title="Top Origins">
          <PieChartComponent data={originData} />
        </ChartCard>
        <ChartCard title="Indoor vs Outdoor Preference">
          <PieChartComponent data={indoorData} />
        </ChartCard>
      </div>
      <div className="grid xs:grid-cols-1 mt-10">
        <ChartCard title="Average life span">
          <BarChartComponent color={'#FFBB28'} data={lifeSpanData} />
        </ChartCard>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {cats.map((cat) => (
          <Card key={cat.name} {...cat} />
        ))}
      </div>
    </div>
  );
}
