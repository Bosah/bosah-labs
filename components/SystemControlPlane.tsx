'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

const systemStateMatrix = [
  formatSystemLine('[INFRASTRUCTURE]', 'STABLE', '98.7%', 'MULTI-NODE GRID'),
  formatSystemLine('[SECURITY]', 'HARDENED', 'ZERO_ACTIVE_THREATS', 'SOVEREIGN DEFENSE'),
  formatSystemLine('[DEPLOYMENTS]', 'SYNCHRONIZED', 'REAL_TIME', 'NATIONAL ROLL-OUT'),
  formatSystemLine('[AI_ORCHESTRATION]', 'ACTIVE', 'CROSS_LAYER_AWARENESS', 'SYSTEM BRAIN'),
  formatSystemLine('[INTEGRATION_LAYER]', 'OPERATIONAL', 'FULL_STACK_FLOW', 'UNIFIED INTERFACE'),
  formatSystemLine('[DATA_SOVEREIGNTY]', 'ENFORCED', 'COMPLIANT', 'AFRICA TRUST ZONE')
];

const orchestrationSignalFlow = [
  formatEventLine('00:12', 'AI_ORCHESTRATION_CORE → DEPLOYMENT_INTELLIGENCE_LAYER', 'SCALE_TRUSTLAYER_NODES_INITIATED'),
  formatEventLine('00:18', 'DEPLOYMENT_INTELLIGENCE_LAYER → SECURITY_COMMAND_LAYER', 'PATCH_VALIDATION_STARTED'),
  formatEventLine('00:24', 'SECURITY_COMMAND_LAYER → PRODUCT_SYSTEM_MESH', 'NODE_INTEGRITY_SCAN_COMPLETE'),
  formatEventLine('00:30', 'HERO_COMMAND_CENTER → AI_ORCHESTRATION_CORE', 'COMMAND_INTENT_INGESTED'),
  formatEventLine('00:36', 'MISSION_INTELLIGENCE_SECTION → SYSTEM_INTEGRATION_LAYER', 'SIGNAL_CORRELATION_UPDATED'),
  formatEventLine('00:42', 'AI_ORCHESTRATION_CORE → SYSTEM_CONTROL_PLANE', 'EXECUTIVE_DECISION_QUEUED')
];

const controlActions = [
  'INIT FULL SYSTEM SCAN',
  'DEPLOY TRUSTLAYER PATCH',
  'EXECUTE SCHOLARTRACK SYNC',
  'ACTIVATE RAPIDPLATE ROUTING'
];

export function SystemControlPlane() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040816] text-cyan-100 font-mono">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-6 text-[0.9rem] leading-[1.45]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          <motion.div variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90 text-[0.78rem] uppercase tracking-[0.28em]">
            SYSTEM CONTROL PLANE
            <br />
            STATUS: OPERATIONAL
            <br />
            MODE: LIVE ORCHESTRATION
            <br />
            REGION: AFRICA MULTI-NODE GRID
          </motion.div>

          <div className="space-y-2 text-cyan-100/85">
            {systemStateMatrix.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-2 text-cyan-100/85">
            {orchestrationSignalFlow.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-2 text-cyan-100/85 uppercase tracking-[0.2em]">
            {controlActions.map((command) => (
              <motion.div key={command} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-200/80">
                {command}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
