'use client';

import { useEffect, useState } from 'react';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

export function SystemTelemetryOverlay() {
  const [heartbeat, setHeartbeat] = useState(100);
  const [latencyMs, setLatencyMs] = useState(12);
  const [health, setHealth] = useState('GREEN');

  useEffect(() => {
    const t = setInterval(() => {
      setHeartbeat((h) => Math.max(0, h + (Math.random() > 0.97 ? -5 : 0)));
      setLatencyMs((l) => Math.max(1, Math.round(l + (Math.random() - 0.5) * 6)));
      const r = Math.random();
      setHealth(r > 0.02 ? 'GREEN' : r > 0.01 ? 'YELLOW' : 'RED');
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const lines = [
    formatSystemLine('TELEMETRY_OVERLAY', 'ACTIVE', 'LIVE DEBUG MODE'),
    formatSystemLine('ACTIVE_COMPONENTS', '11', 'HERO → RUNTIME'),
    formatSystemLine('HEARTBEAT', `${heartbeat}`),
    formatSystemLine('LATENCY_MS', `${latencyMs}`),
    formatSystemLine('SYSTEM_HEALTH_STATUS', health),
    formatSystemLine('MEMORY_SNAPSHOT', 'GLOBAL_STATE_ENGINE', '~487MB USED'),
    formatEventLine('00:02', 'SYSTEM_TELEMETRY', 'STREAM_INIT', 'VERIFIED'),
    formatEventLine('00:08', 'SYSTEM_TELEMETRY', 'HEALTH_POLL', 'VALID'),
    formatEventLine('00:14', 'SYSTEM_TELEMETRY', 'STATE_PULL', 'GLOBAL_STATE_ENGINE')
  ];

  return (
    <div className="relative min-h-screen bg-[#040816] text-cyan-100 font-mono">
      <div className="mx-auto max-w-7xl px-6 py-6 text-[0.88rem] leading-[1.5]">
        {lines.map((line) => (
          <div key={line} className="whitespace-pre-wrap text-cyan-200/90 text-[0.92rem] tracking-[0.04em]">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
