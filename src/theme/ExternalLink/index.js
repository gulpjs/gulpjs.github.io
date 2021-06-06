import React from 'react';

function ExternalLink({ className, href, title, children }) {
  return (
    <a className={className} href={href} title={title} target="_blank" rel="noopener noreferrer nofollow">
      {children}
    </a>
  );
}

export default ExternalLink;
