interface ErrorProps {
  title: string;
  message?: string;
}

export const Error = ({ title, message }: ErrorProps) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};
