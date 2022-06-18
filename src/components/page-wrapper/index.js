import { Outlet } from "react-router-dom";
import PageTemplate from "../page-template";

const PageWrapper = () => (
  <PageTemplate>
    <Outlet />
  </PageTemplate>
);
export default PageWrapper;
