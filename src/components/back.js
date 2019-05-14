import React from "react"

export default function({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      style={{ fill: fill || "var(--light)" }}
    >
      <path d="M5,12l6,9h7l-6-9l6-9h-7L5,12z M7.404,12l4.667-7h2.193l-4.667,7l4.667,7H12.07L7.404,12z" />
    </svg>
  )
}
