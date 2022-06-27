import React from 'react';

export default function IconLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener">
      <span>
        { children }
      </span>
    </a>
  );
}