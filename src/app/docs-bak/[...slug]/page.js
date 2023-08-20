// import { useRouter } from "next/navigation";
// import ErrorPage from "next/error";
import Head from "next/head";
import dynamic from "next/dynamic";

import Container from "../../../components/container";
import DocsBody from "../../../components/docs-body";
import Header from "../../../components/header";
import DocsHeader from "../../../components/docs-header";
import Layout from "../../../components/layout";
import { getDocsBySlug, getAllDocs } from "../../../lib/docs";
import DocsTitle from "../../../components/docs-title";
import { CMS_NAME } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";

import { join } from "path";
// const postsDirectory = join(process.cwd(), "_docs");
const postsDirectory = "@/docs";
import DocsMdx from "@/docs/01-getting-started/01-installation.mdx";

export default async function Docs({ params, moreDocs, preview }) {
  console.warn({ params, moreDocs, preview });
  const realSlug = params.slug.join("/").replace(/\.mdx$/, "");
  let fullPath = join(postsDirectory, `${realSlug}`);
  fullPath += ".mdx";
  console.log(fullPath);
  // const DocsMdx = dynamic(() => import(fullPath));
  return <DocsMdx />;
  // return <div />;
  // const router = useRouter();
  // const docs = getDocsBySlug(params.slug, ["title", "author", "content"]);
  // docs.content = await markdownToHtml(docs.content || "");

  // return (
  //   <Layout preview={preview}>
  //     <Container>
  //       <Header />
  //       <>
  //         <article className="mb-32">
  //           <Head>
  //             <title>{docs.title}</title>
  //             {/* <meta property="og:image" content={docs.ogImage.url} /> */}
  //           </Head>
  //           <DocsHeader title={docs.title} coverImage={docs.coverImage} date={docs.date} author={docs.author} />
  //           <DocsBody content={docs.content} />
  //         </article>
  //       </>
  //     </Container>
  //   </Layout>
  // );
}

// export async function getStaticProps({ params }) {
//   const docs = getDocsBySlug(params.slug, ["title", "date", "slug", "author", "content", "ogImage", "coverImage"]);
//   const content = await markdownToHtml(docs.content || "");

//   return {
//     props: {
//       docs: {
//         ...docs,
//         content,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const docses = getAllDocs(["slug"]);

//   return {
//     paths: docses.map((docs) => {
//       return {
//         params: {
//           slug: docs.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
