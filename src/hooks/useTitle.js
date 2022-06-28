import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    if (document.title !== title) document.title = title;
  }, [title]);
};

export default typeof document !== "undefined" ? useTitle : (_title) => {};
