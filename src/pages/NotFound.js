const NotFound = () => {
  return (
    <div className="relative flex items-top justify-center min-h-screen dark:bg-gray-900 bg-gray-100 sm:items-center sm:pt-0">
      <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
          <div className="px-4 text-lg dark:text-gray-dark text-gray-500 border-r border-gray-500 tracking-wider">
            404
          </div>
          <div className="ml-4 text-lg dark:text-gray-dark text-gray-500 uppercase tracking-wider">
            Not Found
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
