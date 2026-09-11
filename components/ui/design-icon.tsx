const paths: Record<string, string> = {
  web_window: "M3 4h18v16H3zM3 9h18M7 6.5h.01M10 6.5h.01M7 13h4M7 16h8",
  expand_more: "m6 9 6 6 6-6",
  arrow_forward: "M4 12h16m-6-6 6 6-6 6",
  arrow_back: "M20 12H4m6-6-6 6 6 6",
  north_east: "M5 19 19 5M5 5h14v14",
  check: "m5 12 4 4L19 6",
  check_circle: "m7 12 3 3 7-7M21 12a9 9 0 1 1-5-8",
  check_circle_outline: "m7 12 3 3 7-7M21 12a9 9 0 1 1-5-8",
  mail: "M3 5h18v14H3z m0 0 9 7 9-7",
  schedule: "M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  person: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21v-2a8 8 0 0 1 16 0v2",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16",
  terminal: "M3 4h18v16H3z m3 4 4 4-4 4m7 0h5",
  hub: "M9 10 5 5m10 5 4-5m-7 9v6M8 10h8v5H8zM2 2h5v5H2zM17 2h5v5h-5zM9 19h6v4H9z",
  inventory_2: "M3 3h18v5H3z m2 5v13h14V8m-10 4h6",
  database: "M4 6c0-5 16-5 16 0s-16 5-16 0v12c0 5 16 5 16 0V6M4 12c0 5 16 5 16 0",
  repeat: "m17 2 4 4-4 4M3 10V6h18M7 22l-4-4 4-4m14 0v4H3",
  sync: "m17 2 4 4-4 4M3 10V6h18M7 22l-4-4 4-4m14 0v4H3",
  security: "m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6zm-5 10 3 3 7-7",
  lock: "M5 10h14v12H5zM8 10V6a4 4 0 0 1 8 0v4",
  cloud: "M6 19a5 5 0 1 1 0-10 7 7 0 0 1 13-1 5 5 0 0 1-1 11z",
  monitoring: "M3 3v18h18M6 15l5-5 4 3 6-8",
  analytics: "M3 3v18h18M7 17v-5m5 5V7m5 10V3",
};

export function DesignIcon({ name, className = "" }: { name: string; className?: string }) {
  const path =
    paths[name] ??
    (name.includes("arrow")
      ? paths.arrow_forward
      : name.includes("check")
        ? paths.check_circle
        : name.includes("cloud")
          ? paths.cloud
          : name.includes("security")
            ? paths.security
            : "M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z");
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`design-icon ${className}`}
    >
      <path d={path} />
    </svg>
  );
}
