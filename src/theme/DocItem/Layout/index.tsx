import React from "react";
import Head from "@docusaurus/Head";
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
  const doc: any = useDoc();
  const metadata = doc.metadata;
  const frontMatter = doc.frontMatter || metadata?.frontMatter || {};
  const jsonLdBlocks = Array.isArray(frontMatter.jsonld) ? frontMatter.jsonld : [];

  return (
    <div className="row algoway-doc-layout">
      <div className="col">
        <Head>
          {jsonLdBlocks.map((item: string, index: number) => (
            <script
              key={index}
              type="application/ld+json"
            >
              {item}
            </script>
          ))}
        </Head>

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
