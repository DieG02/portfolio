import React from "react";

function HtmlIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '30px'}
      height={props.height || '30px'}
      version="1.1"
      viewBox="0 0 30 30"
      xmlSpace="preserve"
    >
      <path
        fill={props.color || "#f06529"}
        d="M2.072 0l2.399 26.963L15.234 30l10.837-3.037L28.472 0h-26.4zm21.187 8.795H10.622l.281 3.393h12.074l-.937 10.201-6.73 1.855v.02h-.075l-6.787-1.875-.413-5.213h3.281l.244 2.625 3.675.994 3.692-.994.414-4.275H7.866L6.984 5.514H23.56l-.301 3.281z"
      ></path>
    </svg>
  );
}

export default HtmlIcon;