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
          {/* Gradiente de Fundo */}
          <linearGradient
            id="logoBgGrad"
            x1="64"
            y1="32"
            x2="448"
            y2="480"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="45%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Destaque de Vidro Superior */}
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

          {/* Sombra da Prancheta */}
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

          {/* Sombra do Selo Verde */}
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

          {/* Gradiente do Selo */}
          <linearGradient
            id="logoBadgeGrad"
            x1="325"
            y1="325"
            x2="420"
            y2="420"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Gradiente do Grampo */}
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

        {/* Fundo Squircle */}
        <rect
          x="32"
          y="32"
          width="448"
          height="448"
          rx="108"
          fill="url(#logoBgGrad)"
        />

        {/* Borda Sutil com Brilho */}
        <rect
          x="32"
          y="32"
          width="448"
          height="448"
          rx="108"
          stroke="url(#logoGlassGrad)"
          strokeWidth="4"
          fill="none"
        />

        {/* Reflexo Superior Efeito Vidro */}
        <path
          d="M 32 140 C 32 80 80 32 140 32 L 372 32 C 432 32 480 80 480 140 C 480 185 380 220 256 220 C 132 220 32 185 32 140 Z"
          fill="url(#logoGlassGrad)"
          opacity="0.6"
        />

        {/* Prancheta com Tarefas */}
        <g filter="url(#logoCardShadow)">
          <rect x="112" y="92" width="288" height="328" rx="32" fill="#FFFFFF" />

          {/* Grampo da Prancheta */}
          <rect
            x="196"
            y="74"
            width="120"
            height="36"
            rx="18"
            fill="url(#logoClipGrad)"
          />
          <rect x="232" y="84" width="48" height="16" rx="8" fill="#E2E8F0" />

          {/* Tarefa 1 Concluída */}
          <rect
            x="144"
            y="148"
            width="36"
            height="36"
            rx="10"
            fill="#EEF2FF"
          />
          <path
            d="M 153 166 L 160 173 L 171 159"
            stroke="#2563EB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="196" y="157" width="168" height="18" rx="9" fill="#1E293B" />

          {/* Tarefa 2 Concluída */}
          <rect
            x="144"
            y="212"
            width="36"
            height="36"
            rx="10"
            fill="#EEF2FF"
          />
          <path
            d="M 153 230 L 160 237 L 171 223"
            stroke="#2563EB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="196" y="221" width="132" height="18" rx="9" fill="#475569" />

          {/* Tarefa 3 Pendente */}
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

          {/* Linha 4 Prévia */}
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

        {/* Selo Flutuante de Sucesso / Conclusão */}
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
            color: "#172554",
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
