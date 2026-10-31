const baseProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const MailIcon = (props) => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const LockIcon = (props) => (
  <svg {...baseProps} {...props}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    <path d="M12 14.5v2.5" />
  </svg>
);

export const EyeIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const EyeOffIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M3 3l18 18" />
    <path d="M10.6 5.1A10.6 10.6 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.3 4.2" />
    <path d="M6.7 6.7C3.9 8.5 2 12 2 12s3.6 7 10 7a9.8 9.8 0 0 0 4.3-1" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg {...baseProps} strokeWidth={3} {...props}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const LogoMarkIcon = (props) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" {...props}>
    <defs>
      <linearGradient id="logoGradient" x1="6" y1="40" x2="38" y2="4">
        <stop offset="0" stopColor="#7b3dff" />
        <stop offset="0.5" stopColor="#1a6bff" />
        <stop offset="1" stopColor="#12c6e8" />
      </linearGradient>
    </defs>
    <path
      d="M22 3c1.4 0 2.6.8 3.2 2l13.4 29.2c.9 2-.5 4.3-2.7 4.3h-5.1c-1.2 0-2.3-.7-2.8-1.8L22 26.8l-5.2 9.9c-.5 1.1-1.6 1.8-2.8 1.8H8.1c-2.2 0-3.6-2.3-2.7-4.3L18.8 5c.6-1.2 1.8-2 3.2-2Z"
      fill="url(#logoGradient)"
    />
  </svg>
);