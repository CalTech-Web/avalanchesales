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
  dollar: (
    <>
      <circle cx={12} cy={12} r={8.25} />
      <path d="M12 6.75v10.5" />
      <path d="M14.75 9a2.5 2.5 0 0 0-2.5-1.75h-.5a2.25 2.25 0 0 0 0 4.5h.5a2.25 2.25 0 0 1 0 4.5h-.5A2.5 2.5 0 0 1 9.25 14.5" />
    </>
  ),
  badge: (
    <>
      <circle cx={12} cy={9.75} r={5.25} />
      <path d="M9 14.25 7.5 21l4.5-2.25L16.5 21l-1.5-6.75" />
    </>
  ),
  trending: (
    <>
      <path d="m3.75 15.75 5.5-5.5 3.5 3.5 7.5-7.5" />
      <path d="M15.75 6h4.5v4.5" />
    </>
  ),
  check: <path d="M4.5 12.75 10 18.25 19.5 6.5" />,
  home: (
    <>
      <path d="M3.5 11.5 12 4.5l8.5 7" />
      <path d="M5.5 10v9.5h13V10" />
      <path d="M10 19.5v-5h4v5" />
    </>
  ),
  sun: (
    <>
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5.5 6v5c0 4 2.75 7 6.5 8.5C15.75 18 18.5 15 18.5 11V6Z" />
      <path d="M9.25 12 11 13.75 15 9.5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M6 20h12" />
      <path d="M6 6.5h12" />
      <path d="M6 6.5 3.5 12h5ZM18 6.5 15.5 12h5Z" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.35-7-9.5A3.5 3.5 0 0 1 12 7.5 3.5 3.5 0 0 1 19 10.5C19 15.65 12 20 12 20Z" />
  ),
  wrench: (
    <path d="M15.5 4.5a4 4 0 0 0-4.7 5.3L4.5 16.4a1.8 1.8 0 0 0 2.5 2.5l6.6-6.3a4 4 0 0 0 5.3-4.7l-2.4 2.4-2.3-.6-.6-2.3Z" />
  ),
  car: (
    <>
      <path d="M4 15v-2.5l1.6-4A2 2 0 0 1 7.5 7h9a2 2 0 0 1 1.9 1.5l1.6 4V15" />
      <path d="M3.5 15h17v2.5h-2V15M6 17.5V15" />
      <circle cx={7.5} cy={15} r={1.25} fill="currentColor" />
      <circle cx={16.5} cy={15} r={1.25} fill="currentColor" />
    </>
  ),
  hardhat: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M9.5 8.5V6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.5" />
      <path d="M3 16h18v1.5H3Z" />
    </>
  ),
  briefcase: (
    <>
      <rect x={3.5} y={7.5} width={17} height={11} rx={1.5} />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
      <path d="M3.5 12h17" />
    </>
  ),
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
