import Navbar from "../navbar";
import MainContainer from "../main-cotaniner";

const PageTemplate = ({ children }) => {
  return (
    <div className="flex min-h-screen justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex h-full w-full max-w-screen-2xl flex-col">
        <Navbar />
        <MainContainer>{children}</MainContainer>
      </div>
    </div>
  );
};
export default PageTemplate;
