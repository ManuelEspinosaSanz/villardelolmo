import { cn } from "@/lib/utils"

interface ClubLogoProps {
  className?: string
  variant?: "default" | "white"
}

export function ClubLogo({ className, variant = "default" }: ClubLogoProps) {
  const primaryColor = variant === "white" ? "#ffffff" : "currentColor"
  const secondaryColor = variant === "white" ? "#2a4a2e" : "#ffffff"
  
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("text-primary", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield shape */}
      <path
        d="M50 2 L95 18 L95 52 C95 78 72 94 50 98 C28 94 5 78 5 52 L5 18 Z"
        fill={primaryColor}
      />
      {/* Inner shield */}
      <path
        d="M50 8 L89 22 L89 51 C89 74 68 88 50 92 C32 88 11 74 11 51 L11 22 Z"
        fill={secondaryColor}
      />
      {/* V letter stylized */}
      <path
        d="M30 28 L50 70 L70 28 L62 28 L50 58 L38 28 Z"
        fill={primaryColor}
      />
      {/* Horizontal accent line */}
      <rect x="25" y="74" width="50" height="4" fill={primaryColor} />
      {/* Ball accent */}
      <circle cx="50" cy="38" r="6" fill={primaryColor} />
      <circle cx="50" cy="38" r="3" fill={secondaryColor} />
    </svg>
  )
}
