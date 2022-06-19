const setTitle = (title) => {
  if (document.title !== title) document.title = title;
};

export default typeof document !== "undefined" ? setTitle : (_title) => {};
