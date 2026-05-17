import React from "react";
import {useDoc} from "@docusaurus/plugin-content-docs/client";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import ContentVisibility from "@theme/ContentVisibility";

type Props = {
  children: React.ReactNode;
};

export default function DocItemLayout({children}: Props) {
  const {metadata} = useDoc();

  return (
    <div className="row algoway-doc-layout">
      <div className="col">
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />

        <div className="algoway-doc-item-container">
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>

          <DocItemPaginator />
        </div>
      </div>
    </div>
  );
}
