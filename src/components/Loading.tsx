export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative flex flex-col items-center">
        <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        <p className="mt-3 text-gray-700 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
};
