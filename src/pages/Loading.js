import Navbar from "../components/navbar";

const Loading = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex h-full flex-col">
        <Navbar />
        <div className="mx-6 text-base md:mx-[10vw]">Loading...</div>
      </div>
    </div>
  );
};
export default Loading;
