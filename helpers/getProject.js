import { marked } from "marked";
import { readFile } from "fs/promises";
import matter from "gray-matter";

export const getProject = async (slug) => {
  const source = await readFile(`projects/${slug}.md`, "utf8");
  const { content } = matter(source);
  const html = marked(content);
  return {
    // title: data.title,
    body: html,
  };
};
