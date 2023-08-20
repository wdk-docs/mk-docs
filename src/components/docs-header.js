import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import DocsTitle from "./docs-title";

const DocsHeader = ({ title, coverImage, date, author }) => {
  return (
    <>
      <DocsTitle>{title}</DocsTitle>
      {author?.name ? (
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      ) : (
        <></>
      )}
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author?.name ? <Avatar name={author.name} picture={author.picture} /> : <></>}
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default DocsHeader;
