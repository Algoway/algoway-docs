import React from "react";
import Head from "@docusaurus/Head";

type MigratedDocArticleProps = {
  jsonLdBlocks?: string[];
  children: React.ReactNode;
};

export default function MigratedDocArticle({
  jsonLdBlocks = [],
  children,
}: MigratedDocArticleProps): JSX.Element {
  return (
    <>
      <Head>
        {jsonLdBlocks.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}

        <style>{`
          .algoway-migrated-doc-card {
            margin-top: 1.5rem;
          }

          .algoway-migrated-doc-card .card-body {
            padding: 2rem !important;
          }

          .algoway-migrated-doc-content > h2:first-child {
            text-align: center;
            margin-top: 0.5rem;
            margin-bottom: 1.5rem;
          }

          .algoway-migrated-doc-content p {
            line-height: 1.7;
            margin-bottom: 1rem;
          }

          .algoway-migrated-doc-content img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: auto;
            margin: 1.5rem auto;
            border-radius: 6px;
          }

          .algoway-migrated-doc-content iframe {
            display: block;
            width: 100%;
            max-width: 100%;
            min-height: 420px;
            margin: 1.5rem auto;
            border: 0;
            border-radius: 6px;
          }

          .algoway-migrated-doc-content table {
            width: 100%;
            margin: 1.5rem 0;
            border-collapse: collapse;
          }

          .algoway-migrated-doc-content th,
          .algoway-migrated-doc-content td {
            border: 1px solid #e5e5e5;
            padding: 0.85rem;
            vertical-align: top;
          }

          .algoway-migrated-doc-content th {
            background: #f5f2ff;
            font-weight: 700;
          }

          .algoway-migrated-doc-content pre {
            margin: 1.25rem 0;
            padding: 1rem;
            overflow-x: auto;
            border-radius: 6px;
          }
        `}</style>
      </Head>

      <div className="card mt-4 algoway-migrated-doc-card">
        <div className="card-body p-4 algoway-migrated-doc-content">
          {children}
        </div>
      </div>
    </>
  );
}
