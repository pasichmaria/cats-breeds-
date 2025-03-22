export function CatFilters({
  filter,
  setFilter,
  origins,
}: {
  origins: string[];
  filter: { origin: string; indoor: number | 'all' };
  setFilter: (filter: { origin: string; indoor: number | 'all' }) => void;
}) {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <label>Origin</label>
      <select
        name="Origin"
        value={filter.origin}
        onChange={(e) => setFilter({ ...filter, origin: e.target.value })}
      >
        <option value="all">All</option>
        {origins.map((origin) => (
          <option key={origin} value={origin}>
            {origin}
          </option>
        ))}
      </select>

      <label>Indoor Preference</label>
      <select
        name="Indoor preference"
        value={filter.indoor}
        onChange={(e) =>
          setFilter({
            ...filter,
            indoor: isNaN(parseInt(e.target.value)) ? 'all' : parseInt(e.target.value),
          })
        }
      >
        <option value="all">All</option>
        <option value={0}>Outdoor</option>
        <option value={1}>Indoor</option>
      </select>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setFilter({ origin: 'all', indoor: 'all' })}
      >
        Reset Filters
      </button>
    </div>
  );
}
