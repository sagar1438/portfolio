// A classic celestial-chart style mark: scattered "stars" connected by
// thin lines like an old astronomy atlas, with two faint guide rings.
// Stroke/fill use currentColor so it inherits the navy / dark-navy accent.
export default function GeometricMark({ className = "" }) {
  const nodes = [
    [120, 90], [165, 130], [140, 190], [190, 230], [175, 300],
    [230, 150], [270, 190], [260, 250], [310, 270], [330, 320],
    [90, 250], [350, 140],
  ];
  const lines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 5],
    [5, 6], [6, 7], [7, 8], [8, 9], [3, 10], [5, 11],
  ];

  return (
    <svg
      viewBox="0 0 440 440"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M20 20h18M20 20v18" />
        <path d="M420 20h-18M420 20v18" />
        <path d="M20 420h18M20 420v-18" />
        <path d="M420 420h-18M420 420v-18" />
      </g>

      <circle cx="220" cy="220" r="150" stroke="currentColor" strokeWidth="1" opacity="0.16" strokeDasharray="2 6" />
      <circle cx="220" cy="220" r="90" stroke="currentColor" strokeWidth="1" opacity="0.12" />

      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="currentColor" strokeWidth="1" opacity="0.4"
        />
      ))}

      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7" fill="currentColor" opacity="0.08" />
          <circle cx={x} cy={y} r={i % 3 === 0 ? 3.2 : 2.2} fill="currentColor" opacity="0.85" />
        </g>
      ))}
    </svg>
  );
}