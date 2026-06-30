import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-orange text-white hover:bg-orange-dark",
    outline: "border-2 border-orange text-orange hover:bg-orange hover:text-white",
    white: "bg-white text-orange hover:bg-zinc-100",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
