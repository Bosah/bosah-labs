'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine } from '../lib/systemFormatter';

const orchestrationMap = [
  formatSystemLine('[AI_CORE]', 'ANALYZE', 'DECISION', 'DEPLOYMENT_LAYER'),
  formatSystemLine('[SECURITY]', 'VERIFY', 'CLEAR', 'SYSTEM_INTEGRATION_LAYER'),
  formatSystemLine('[MESH]', 'ROUTE', 'OPTIMIZED', 'REGIONAL_NODE'),
  formatSystemLine('[DEPLOYMENTS]', 'PROPAGATE', 'CONFIRM', 'TRUSTLAYER'),
  formatSystemLine('[INTEGRATION_LAYER]', 'FUSE', 'SYNTHESIS', 'GLOBAL_STATE_ENGINE')
];

export function SystemOrchestrationVisualizer() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040816] text-cyan-100 font-mono">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-6 text-[0.9rem] leading-[1.45]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-2 text-cyan-100/85">
          {orchestrationMap.map((line) => (
            <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
              {line}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
