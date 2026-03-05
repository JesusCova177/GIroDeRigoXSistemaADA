import * as React from "react";

export interface IdCardIconProps extends React.SVGProps<SVGSVGElement> {}

export const IdCardIcon: React.FC<IdCardIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Outer card */}
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
    {/* Top line (name) */}
    <line x1="9" y1="9" x2="18" y2="9" />
    {/* Second line */}
    <line x1="9" y1="13" x2="14" y2="13" />
    {/* Avatar circle */}
    <circle cx="7" cy="13" r="2" />
  </svg>
);
