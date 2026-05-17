import React from "react";
import OriginalDocItemContent from "@theme-original/DocItem/Content";

type Props = {
  children: React.ReactNode;
};

export default function DocItemContentWrapper({children}: Props) {
  return (
    <div className="card mt-4 algoway-doc-card">
      <div className="card-body p-4 algoway-doc-card-body">
        <OriginalDocItemContent>{children}</OriginalDocItemContent>
      </div>
    </div>
  );
}
