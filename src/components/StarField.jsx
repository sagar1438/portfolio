const STAR_COUNT = 90;

const STARS = Array.from({ length: STAR_COUNT }, (_, i) => ({
  top: (i * 29 + (i % 7) * 11) % 100,
  left: (i * 47 + (i % 5) * 17) % 100,
  size: 1 + (i % 3),
  delay: (i % 14) * 0.35,
  duration: 3 + (i % 6),
}));

const SHOOTING_STARS = [
  { top: "6%", left: "75%", delay: "0s", duration: "4.5s" },
  { top: "15%", left: "35%", delay: "1.2s", duration: "5.5s" },
  { top: "4%", left: "15%", delay: "2.4s", duration: "5s" },
  { top: "28%", left: "88%", delay: "3.6s", duration: "6s" },
  { top: "45%", left: "10%", delay: "0.8s", duration: "5.5s" },
  { top: "60%", left: "65%", delay: "2s", duration: "5s" },
  { top: "75%", left: "25%", delay: "1.5s", duration: "5.8s" },
  { top: "85%", left: "80%", delay: "3s", duration: "4.8s" },
  { top: "38%", left: "50%", delay: "4.2s", duration: "5.2s" },
  { top: "12%", left: "55%", delay: "0.4s", duration: "6.2s" },
  { top: "68%", left: "8%", delay: "2.8s", duration: "5.3s" },
  { top: "92%", left: "45%", delay: "1s", duration: "4.6s" },
];

export default function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="twinkle-star absolute rounded-full bg-navy dark:bg-dark-navy"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: 0.35,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {SHOOTING_STARS.map((s, i) => (
        <span
          key={i}
          className="shooting-star absolute text-navy/70 dark:text-dark-navy/80"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      <style>{`
        .twinkle-star { animation: twinkle 4s ease-in-out infinite; }
        .shooting-star {
          width: 90px; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, transparent, currentColor 55%, transparent);
          opacity: 0;
        }
        @media (prefers-reduced-motion: no-preference) {
          .shooting-star { animation: shoot linear infinite; }
        }
        @keyframes twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.85; } }
        @keyframes shoot {
          0%   { transform: rotate(-35deg) translateX(0); opacity: 0; }
          5%   { opacity: 0.9; }
          16%  { opacity: 0.9; }
          32%  { opacity: 0; }
          100% { transform: rotate(-35deg) translateX(-220px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}