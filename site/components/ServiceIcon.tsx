import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  search: (
    <>
      <circle cx={11} cy={11} r={7} />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  chat: (
    <path d="M4.5 5.25h15a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H9l-4.5 3.75V15.75h-.75A.75.75 0 0 1 3 15V6a.75.75 0 0 1 .75-.75Z" />
  ),
  presentation: (
    <>
      <path d="M3 4.5h18M4.5 4.5v11.25a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75V4.5" />
      <path d="M9.75 19.5 12 16.5l2.25 3" />
    </>
  ),
  handshake: (
    <>
      <path d="M9 12.75 11 14.75 15.25 9.5" />
      <path d="M3.5 12a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0Z" />
    </>
  ),
  chart: (
    <>
      <path d="M4.5 19.5V4.5" />
      <path d="M4.5 19.5h15" />
      <path d="M8 19.5v-6M12.5 19.5v-9M17 19.5v-4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10.5v3a1.5 1.5 0 0 0 1.5 1.5H6l1 4.5h2l-.75-4.5H10l8 3.75v-12L10 10.5H4.5A1.5 1.5 0 0 0 3 12Z" />
      <path d="M10 10.5v6" />
    </>
  ),
  funnel: <path d="M3.75 4.5h16.5l-6 8.25v6l-4.5 2.25v-8.25Z" />,
  target: (
    <>
      <circle cx={12} cy={12} r={8.25} />
      <circle cx={12} cy={12} r={4} />
      <circle cx={12} cy={12} r={0.75} fill="currentColor" />
    </>
  ),
  bolt: <path d="M12.75 3 4.5 13.5h6l-1.5 7.5 8.25-10.5h-6Z" />,
};

export default function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
