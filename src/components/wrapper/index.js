import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="flex min-h-screen justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex h-full w-full max-w-screen-2xl flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
export default Wrapper;
