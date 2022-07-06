import { readdir } from "fs/promises";

export const getSlugs = async () => {
  const extension = ".md";
  const files = await readdir("projects");
  return files
    .filter((file) => file.endsWith(extension))
    .map((file) => file.slice(0, -extension.length));
};
