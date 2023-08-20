import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

const DocsPreview = ({ docs }) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={docs.slug} title={docs.title} src={docs.coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/docs/${docs.slug}`} href="/posts/[docs.slug]" className="hover:underline">
          {docs.title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={docs.date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{docs.excerpt}</p>
      <Avatar name={docs.author && docs.author.name} picture={docs.author && docs.author.picture} />
    </div>
  );
};

export default DocsPreview;
