import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col h-full px-[5vw]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
export default Wrapper;
