// import DocsPreview from "@/components/docs-preview";
// import { getAllDocs } from "@/lib/docs";
// import Link from "next/link";

// export default function DocsPage() {
//   const docses = getAllDocs(["title", "date", "excerpt", "coverImage", "slug"]);
//   const recentDocs = docses.slice(0, 2);
//   return (
//     <div className="container mx-auto px-5">
//       <main>
//         <div className="space-y-4">
//           <h1 className="text-center text-5xl">NextJS 13 Blog</h1>
//           <p className="text-center text-xl">Welcome to a dynamic markdown blog using NextJS 13.</p>
//         </div>

//         <div className="h-12"></div>

//         <div className="h-16"></div>

//         <p className="text-3xl mb-6">Recent Posts</p>
//         <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8">
//           {recentDocs.map((docs) => (
//             <div key={docs.title}>
//               <DocsPreview docs={docs} />
//             </div>
//           ))}
//         </div>
//         <div className="h-16"></div>
//         <Link href="/blog" className="text-3xl hover:text-gray-300 hover:underline">
//           Read More{" -> "}
//         </Link>
//       </main>
//     </div>
//   );
// }
export default function DocsListPage() {
  return <></>;
}
