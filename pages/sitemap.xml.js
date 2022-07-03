import * as fs from "fs";
import { projects } from "../constants/projectData";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "sitemap.xml.js",
        "404.js",
        "_app.js",
        "_document.js",
        "project",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.replace(".js", "")}`;
    });

  const dynamicPaths = projects.map((project) => {
    return `${BASE_URL}/project/${project.slug}`;
  });

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          if (url !== BASE_URL + "/index") {
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
