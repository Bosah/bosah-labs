'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

const stateSnapshot = [
  formatSystemLine('[INFRASTRUCTURE]', 'STABLE', '98.7%', 'MULTI-NODE GRID'),
  formatSystemLine('[SECURITY]', 'HARDENED', 'ZERO_ACTIVE_THREATS', 'SOVEREIGN DEFENSE'),
  formatSystemLine('[AI_ORCHESTRATION]', 'ACTIVE', 'CROSS_LAYER_AWARENESS', 'SYSTEM BRAIN'),
  formatSystemLine('[DEPLOYMENTS]', 'SYNCHRONIZED', 'REAL_TIME', 'NATIONAL ROLL-OUT'),
  formatSystemLine('[DATA_SOVEREIGNTY]', 'ENFORCED', 'COMPLIANT', 'AFRICA TRUST ZONE'),
  formatSystemLine('[SYSTEM_INTEGRITY]', 'VERIFIED', 'CONSISTENT', 'LIVE STATE')
];

const stateDiffStream = [
  formatEventLine('00:06', 'INFRASTRUCTURE → SYSTEM_CONTROL_PLANE', 'INFRASTRUCTURE_HEALTH_REFRESHED'),
  formatEventLine('00:09', 'SECURITY_COMMAND_LAYER → SYSTEM_INTEGRATION_LAYER', 'SECURITY_POSTURE_UPDATED'),
  formatEventLine('00:12', 'AI_ORCHESTRATION_CORE → GLOBAL_STATE_ENGINE', 'DECISION_STATE_RECORDED'),
  formatEventLine('00:15', 'DEPLOYMENT_INTELLIGENCE_LAYER → GLOBAL_STATE_ENGINE', 'ROLLOUT_STATE_SYNCED')
];

const memoryValidation = 'STATE_VALIDATION | CONSISTENT | NO_CONFLICTS_DETECTED';

export function GlobalStateEngine() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040816] text-cyan-100 font-mono">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-6 text-[0.9rem] leading-[1.45]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
          <motion.div variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90 uppercase tracking-[0.24em] text-[0.78rem]">
            GLOBAL STATE ENGINE
            <br />
            MODE: SYNCHRONIZED
            <br />
            STATUS: LIVE
            <br />
            CONSISTENCY: VERIFIED
          </motion.div>

          <div className="space-y-2 text-cyan-100/85">
            {stateSnapshot.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-2 text-cyan-100/85">
            {stateDiffStream.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
                {line}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="whitespace-pre-wrap text-cyan-200/75 tracking-[0.08em]">
            {memoryValidation}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
