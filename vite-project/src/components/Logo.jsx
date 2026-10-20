function Logo({ size = 40, className = "", showText = false }) {
  return (
    <div
      className={`logo-marca ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        userSelect: "none",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo Lista de Tarefas"
        style={{
          flexShrink: 0,
          display: "block",
          filter: "drop-shadow(0 4px 10px rgba(37, 99, 235, 0.2))",
        }}
      >
        <defs>
          <linearGradient
            id="logoBgGrad"
            x1="64"
            y1="32"
            x2="448"
            y2="480"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7f9d72" />
            <stop offset="45%" stopColor="#5b7b52" />
            <stop offset="100%" stopColor="#46633f" />
          </linearGradient>

          <linearGradient
            id="logoGlassGrad"
            x1="256"
            y1="32"
            x2="256"
            y2="280"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <filter
            id="logoCardShadow"
            x="60"
            y="50"
            width="392"
            height="420"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="18"
              floodColor="#0F172A"
              floodOpacity="0.25"
            />
          </filter>

          <filter
            id="logoBadgeShadow"
            x="280"
            y="280"
            width="180"
            height="180"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="#064E3B"
              floodOpacity="0.35"
            />
          </filter>

          <linearGradient
            id="logoBadgeGrad"
            x1="325"
            y1="325"
            x2="420"
            y2="420"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#c98a4b" />
            <stop offset="100%" stopColor="#a8693a" />
          </linearGradient>

          <linearGradient
            id="logoClipGrad"
            x1="196"
            y1="74"
            x2="316"
            y2="106"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
        </defs>

        <rect
          x="32"
          y="32"
          width="448"
          height="448"
          rx="40"
          fill="url(#logoBgGrad)"
        />

        <rect
          x="32"
          y="32"
          width="448"
          height="448"
          rx="40"
          stroke="url(#logoGlassGrad)"
          strokeWidth="4"
          fill="none"
        />

        <path
          d="M 32 140 C 32 80 80 32 140 32 L 372 32 C 432 32 480 80 480 140 C 480 185 380 220 256 220 C 132 220 32 185 32 140 Z"
          fill="url(#logoGlassGrad)"
          opacity="0.6"
        />

        <g filter="url(#logoCardShadow)">
          <rect x="112" y="92" width="288" height="328" rx="32" fill="#FFFFFF" />

          <rect
            x="196"
            y="74"
            width="120"
            height="36"
            rx="18"
            fill="url(#logoClipGrad)"
          />
          <rect x="232" y="84" width="48" height="16" rx="8" fill="#E2E8F0" />

          <rect
            x="144"
            y="148"
            width="36"
            height="36"
            rx="10"
            fill="#e6ecdd"
          />
          <path
            d="M 153 166 L 160 173 L 171 159"
            stroke="#5b7b52"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="196" y="157" width="168" height="18" rx="9" fill="#1E293B" />

          <rect
            x="144"
            y="212"
            width="36"
            height="36"
            rx="10"
            fill="#e6ecdd"
          />
          <path
            d="M 153 230 L 160 237 L 171 223"
            stroke="#5b7b52"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="196" y="221" width="132" height="18" rx="9" fill="#475569" />

          <rect
            x="144"
            y="276"
            width="36"
            height="36"
            rx="10"
            fill="#F8FAFC"
            stroke="#CBD5E1"
            strokeWidth="3"
          />
          <rect x="196" y="285" width="150" height="18" rx="9" fill="#94A3B8" />

          <rect
            x="144"
            y="340"
            width="36"
            height="36"
            rx="10"
            fill="#F8FAFC"
            stroke="#E2E8F0"
            strokeWidth="2.5"
          />
          <rect x="196" y="349" width="96" height="18" rx="9" fill="#CBD5E1" />
        </g>

        <g filter="url(#logoBadgeShadow)">
          <circle
            cx="372"
            cy="372"
            r="54"
            fill="url(#logoBadgeGrad)"
            stroke="#FFFFFF"
            strokeWidth="6"
          />
          <path
            d="M 352 372 L 366 386 L 394 358"
            stroke="#FFFFFF"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      {showText && (
        <span
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "#2f3e2c",
            letterSpacing: "-0.02em",
          }}
        >
          Lista de Tarefas
        </span>
      )}
    </div>
  );
}

export default Logo;
