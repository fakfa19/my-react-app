import React from "react";

export default function SectionBar(props) {
  return (
    <div className="Section-bar">
      <p>{props?.name ?? 'Section name'}</p>
    </div>
  );
}
