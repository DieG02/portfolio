import React from "react";

function MaterialIcon({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width && width}
      height={height && height}
      viewBox="0 0 48 48"
    >
      <path fill="#29b6f6" d="M1 5L7 9 7 29 1 25z"></path>
      <path fill="#0288d1" d="M47 20L41 24 41 37 47 33z"></path>
      <path fill="#0288d1" d="M47 6L41 10 41 17 47 13z"></path>
      <path fill="#0288d1" d="M35 5L29 9 29 29 35 25z"></path>
      <path fill="#29b6f6" d="M1 12L18 23 18 16 1 5z"></path>
      <path fill="#0288d1" d="M35 12L18 23 18 16 35 5z"></path>
      <path fill="#0288d1" d="M35 26L18 37 18 30 35 19z"></path>
      <path fill="#0288d1" d="M47 34L30 45 30 38 47 27z"></path>
      <path fill="#29b6f6" d="M30 37.765L18 30 18 37 30 44.765z"></path>
    </svg>
  );
}

export default MaterialIcon;
