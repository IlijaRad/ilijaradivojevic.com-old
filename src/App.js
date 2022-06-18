import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/page-wrapper";
import ThemeProvider from "./context/ThemeContext";
import * as ROUTES from "./constants/routes";
import Loading from "./pages/Loading";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Project"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<PageWrapper />}>
              <Route path={ROUTES.HOME} element={<About />} />
              <Route path={ROUTES.PROJECT} element={<Project />} />
              <Route path={ROUTES.PROJECTS} element={<Projects />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
