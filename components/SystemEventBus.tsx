'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatEventLine } from '../lib/systemFormatter';

const eventBusStream = [
  formatEventLine('00:05', 'AI_ORCHESTRATION_CORE → DEPLOYMENT_INTELLIGENCE_LAYER', 'DECISION_ROUTING_DISPATCHED'),
  formatEventLine('00:08', 'DEPLOYMENT_INTELLIGENCE_LAYER → SYSTEM_INTEGRATION_LAYER', 'ROLL_OUT_SYNCED'),
  formatEventLine('00:11', 'SECURITY_COMMAND_LAYER → GLOBAL_STATE_ENGINE', 'THREAT_POSTURE_UPDATED'),
  formatEventLine('00:14', 'SYSTEM_INTEGRATION_LAYER → AI_ORCHESTRATION_CORE', 'SIGNAL_CORRELATION_FEED'),
  formatEventLine('00:18', 'AI_ORCHESTRATION_CORE → SYSTEM_CONTROL_PLANE', 'EXECUTIVE_DECISION_EMITTED')
];

export function SystemEventBus() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040816] text-cyan-100 font-mono">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-6 text-[0.9rem] leading-[1.45]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-2 text-cyan-100/85">
          {eventBusStream.map((line) => (
            <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
              EVENT_LINE: {line}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
