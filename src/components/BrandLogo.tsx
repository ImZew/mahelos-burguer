import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-red-600 blur-sm opacity-60 animate-pulse" />
      
      {/* Outer seal */}
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full relative drop-shadow-xl select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="carbonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2c1407" />
            <stop offset="60%" stopColor="#140b06" />
            <stop offset="100%" stopColor="#080504" />
          </radialGradient>
          <linearGradient id="fireRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="goldText" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>

        {/* Outer fiery dashed border */}
        <circle cx="80" cy="80" r="76" fill="none" stroke="url(#fireRing)" strokeWidth="3.5" strokeDasharray="5,2" />

        {/* Main Background Circle */}
        <circle cx="80" cy="80" r="72" fill="url(#carbonGlow)" stroke="#f59e0b" strokeWidth="2.5" />

        {/* Subtle Charcoal Texture lines */}
        <path d="M25 80 Q 80 50 135 80" stroke="#ef4444" strokeWidth="0.8" opacity="0.3" fill="none" />
        <path d="M25 90 Q 80 120 135 90" stroke="#f59e0b" strokeWidth="0.8" opacity="0.3" fill="none" />

        {/* Mascot / Chef Hat & Cow silhouette */}
        <g transform="translate(48, 25)">
          {/* Chef Hat */}
          <path
            d="M 12 32 C 8 20, 20 10, 32 10 C 44 10, 56 20, 52 32 Z"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
          <path
            d="M 16 32 C 16 28, 48 28, 48 32 L 44 36 L 20 36 Z"
            fill="#e5e7eb"
            stroke="#1a1a1a"
            strokeWidth="1.5"
          />
          {/* Red flame band on hat */}
          <rect x="22" y="32" width="20" height="3" fill="#ef4444" rx="1" />
          
          {/* Chef Face & Horns */}
          <ellipse cx="32" cy="48" rx="18" ry="14" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
          {/* Horns */}
          <path d="M 16 44 C 8 36, 12 28, 18 36" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
          <path d="M 48 44 C 56 36, 52 28, 46 36" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
          {/* Snout */}
          <ellipse cx="32" cy="54" rx="11" ry="7" fill="#fca5a5" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="28" cy="53" r="1.5" fill="#881337" />
          <circle cx="36" cy="53" r="1.5" fill="#881337" />
          {/* Eyes smiling */}
          <path d="M 24 45 Q 27 41 30 45" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 34 45 Q 37 41 40 45" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Thumbs up badge */}
          <g transform="translate(42, 46)">
            <circle cx="6" cy="6" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
            <text x="6" y="9" fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="bold">👍</text>
          </g>
        </g>

        {/* Banner with MAHELO'S */}
        <rect x="18" y="94" width="124" height="26" rx="6" fill="#b91c1c" stroke="#f59e0b" strokeWidth="1.5" />
        <text
          x="80"
          y="112"
          textAnchor="middle"
          fill="url(#goldText)"
          fontSize="17"
          fontWeight="900"
          letterSpacing="1"
          style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
        >
          MAHELO'S
        </text>

        {/* Lower Banner: ★ BURGUER ★ AL CARBÓN */}
        <text
          x="80"
          y="130"
          textAnchor="middle"
          fill="#fef08a"
          fontSize="9.5"
          fontWeight="bold"
          letterSpacing="1.2"
        >
          ★ BURGUER ★
        </text>
        <text
          x="80"
          y="143"
          textAnchor="middle"
          fill="#f87171"
          fontSize="8"
          fontWeight="800"
          letterSpacing="2"
        >
          AL CARBÓN
        </text>
      </svg>
    </div>
  );
};
