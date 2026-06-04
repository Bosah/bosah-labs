'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

const runtimeFeed = [
  formatSystemLine('[BOSAH_LABS_OPERATING_SYSTEM]', 'FULLY OPERATIONAL', 'LIVE_SIMULATION', 'SYSTEM BRAIN'),
  formatEventLine('00:02', 'SYSTEM_CONTROL_PLANE → GLOBAL_STATE_ENGINE', 'STATE_REFRESH_CYCLE'),
  formatSystemLine('[AI_ORCHESTRATION]', 'ACTIVE', 'DECISION_ROUTING', 'CROSS_LAYER'),
  formatEventLine('00:06', 'SYSTEM_EVENT_BUS → SYSTEM_ORCHESTRATION_VISUALIZER', 'SIGNAL_DELIVERY_CONFIRMED'),
  formatSystemLine('[SYSTEM_INTEGRATION]', 'SYNCHRONIZED', 'FULL_STACK', 'CONTINUOUS'),
  formatEventLine('00:10', 'GLOBAL_STATE_ENGINE → SYSTEM_CONTROL_PLANE', 'MEMORY_CONSISTENCY_VERIFIED')
];

const commandStrip = [
  'INIT FULL SYNC',
  'RUN DIAGNOSTIC SCAN',
  'DEPLOY SYSTEM PATCH',
  'ACTIVATE REGIONAL MESH'
];

export function LiveOSRuntimeCore() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040816] text-cyan-100 font-mono">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-6 text-[0.9rem] leading-[1.45]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
          <motion.div variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90 uppercase tracking-[0.24em] text-[0.78rem]">
            BOSAH LABS OPERATING SYSTEM
            <br />
            STATUS: FULLY OPERATIONAL
            <br />
            MODE: LIVE SIMULATION
          </motion.div>

          <div className="space-y-2 text-cyan-100/85">
            {runtimeFeed.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-2 text-cyan-100/85 uppercase tracking-[0.2em]">
            {commandStrip.map((cmd) => (
              <motion.div key={cmd} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-200/80">
                {cmd}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
