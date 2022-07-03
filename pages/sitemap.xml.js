const fs = require("fs");
const path = require("path");

import { projects } from "../constants/projectData";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const env = process.env.NODE_ENV;
  const isProd = env === "production";
  const folderPath = isProd ? __dirname : "pages";
  const removeExtension = isProd ? ".html" : ".js";

  const ignoredPaths = isProd
    ? ["404.html", "500.html", "project"]
    : [
        "_app.js",
        "_document.js",
        "sitemap.xml.js",
        "404.js",
        "500.js",
        "project",
        "_error.js",
      ];
  const staticPaths = fs.readdirSync(folderPath);

  let staticPathsFiltered = staticPaths.filter((staticPage) => {
    return !ignoredPaths.includes(staticPage);
  });

  let staticPathsFilteredByExtension = staticPathsFiltered.filter(
    (staticPage) => staticPage.indexOf(removeExtension) !== -1
  );

  let staticPathsClean = staticPathsFilteredByExtension.map(
    (staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.replace(removeExtension, "")}`;
    }
  );

  staticPathsClean = staticPathsClean.map((staticPagePath) => {
    return `${staticPagePath.replace("index", "")}`;
  });

  console.log(staticPathsClean);

  const dynamicPaths = projects.map((project) => {
    return `${BASE_URL}/project/${project.slug}`;
  });

  const allPaths = [...staticPathsClean, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          if (url !== BASE_URL + "/") {
            return `<url>
                <loc>${url}</loc>
                <lastmod>2022-03-07</lastmod>
                <changefreq>weekly</changefreq>
              </url>`;
          } else {
            return `<url>
                <loc>${url}</loc>
                <lastmod>2022-03-07</lastmod>
                <changefreq>weekly</changefreq>
                <priority>1.0</priority>
              </url>`;
          }
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
