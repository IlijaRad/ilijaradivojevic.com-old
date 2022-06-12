import Navbar from "../components/navbar";

const Loading = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="text-base mx-6 md:mx-[10vw]">Loading...</div>
      </div>
    </div>
  );
};
export default Loading;
