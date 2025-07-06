const Fallback = () => {
  return (
    <div className="min-h-screen bg-dark-1 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Snapgram</h1>
        <p className="text-light-3 mb-4">Loading...</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default Fallback; 