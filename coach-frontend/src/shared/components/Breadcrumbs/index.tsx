import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="tw-mb-6 tw-flex tw-flex-col tw-gap-3 tw-sm:tw-flex-row tw-sm:tw-items-center tw-sm:tw-justify-between">
      <h2 className="tw-text-title-md2 tw-font-semibold tw-text-black">
        {pageName}
      </h2>

      <nav>
        <ol className="tw-flex tw-items-center tw-gap-2">
          <li>
            <Link className="tw-font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="tw-font-medium tw-text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
