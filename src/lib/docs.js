import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const postsDirectory = join(process.cwd(), "_docs");

export function getDocsSlugs() {
  const files = fs.readdirSync(postsDirectory);
  // const filesName = files.filter((file) => file.isFile()).map((file) => file.name);
  const filesName = files.filter((file) => file.split(".")[1] == "mdx");
  return filesName;
}

export function getDocsBySlug(params, fields = []) {
  try {
    console.warn({ params });
    const realSlug = params.join("/").replace(/\.mdx$/, "");
    let fullPath = join(postsDirectory, `${realSlug}`);

    if (fs.existsSync(fullPath)) {
      const stats = fs.lstatSync(fullPath);
      const isDirectory = stats.isDirectory();
      console.info({ isDirectory });
      if (isDirectory) fullPath += "/index.mdx";
      else notFound();
    } else {
      fullPath += ".mdx";
      if (!fs.existsSync(fullPath)) notFound();
    }
    console.warn({ fullPath });

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        items[field] = content;
      }

      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });
    return items;
  } catch (err) {
    console.error("[DOCS]:", err);
    notFound();
  }
}

export function getAllDocs(fields = []) {
  const slugs = getDocsSlugs();
  console.log({ slugs });
  const docses = slugs
    .map((slug) => getDocsBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return docses;
}
