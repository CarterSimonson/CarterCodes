import React from "react";
import Education from "./Education";

export default function Experience() {
  return (
    <div className="margin-bottom-xl">
      <h2 className="section-header">Education</h2>

      <Education
        school="Western Governors University"
        title="Bachelor's in Computer Science, Expected January 2025"
      ></Education>
    </div>
  );
}
