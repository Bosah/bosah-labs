'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatEventLine, formatSystemLine } from '../lib/systemFormatter';

const eventStream = [
  formatEventLine('2026-06-04T12:30:12Z', 'MISSION_INTELLIGENCE → AI_ORCHESTRATION_CORE', 'FAILURE_PATTERN_CORRELATED'),
  formatEventLine('2026-06-04T12:30:24Z', 'MESH_LAYER → DEPLOYMENT_LAYER', 'NODE_TOPOLOGY_UPDATE_RECEIVED'),
  formatEventLine('2026-06-04T12:30:36Z', 'DEPLOYMENT_LAYER → SECURITY_LAYER', 'ROLL-OUT_CONFIRMATION_RECEIVED'),
  formatEventLine('2026-06-04T12:30:48Z', 'SECURITY_LAYER → AI_ORCHESTRATION_CORE', 'THREAT_VECTOR_ALERT_SYNCED'),
  formatEventLine('2026-06-04T12:31:00Z', 'AI_ORCHESTRATION_CORE → SYSTEM_INTERFACE', 'DECISION_ROUTING_COMPLETE')
];

const systemState = [
  formatSystemLine('[SYSTEM_HEALTH]', 'STABLE', 'ALL LAYERS OPERATIONAL', 'NO CRITICAL FAILURES'),
  formatSystemLine('[INTELLIGENCE_FLOW]', 'ACTIVE', 'CROSS_LAYER_SIGNAL_PROCESSING', 'NORMAL'),
  formatSystemLine('[DEPLOYMENT_SYNC]', 'REAL_TIME', 'NATIONAL_SYSTEMS_UPDATED', 'CONSISTENT'),
  formatSystemLine('[SECURITY_POSTURE]', 'HARDENED', 'ZERO_ACTIVE_THREATS', 'PROTECTED')
];

const aiGlobalSummary = [
  formatSystemLine('[AI_SUMMARY]', 'INFRASTRUCTURE_OPTIMIZATION_OPPORTUNITIES_DETECTED', 'MEDIUM_PRIORITY'),
  formatSystemLine('[AI_SUMMARY]', 'TRUSTLAYER_CRITICAL_DEPENDENCY_CONFIRMED', 'HIGH_PRIORITY'),
  formatSystemLine('[AI_SUMMARY]', 'SYSTEM_SCALING_READY_FOR_NEW_REGIONS', 'STRATEGIC_OPPORTUNITY')
];

export function SystemIntegrationLayer() {
  return (
    <div className="relative bg-[#040816] text-cyan-100 font-mono overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          <motion.div variants={fadeInUp} className="space-y-2">
            <div className="text-[0.68rem] uppercase tracking-[0.35em] text-cyan-300/80">
              {formatSystemLine('[UNIFIED_SYSTEM_INTERFACE]', 'BOSAH LABS OPERATING SYSTEM', 'ACTIVE', 'FULL STACK INTEGRATION ENABLED')}
            </div>
          </motion.div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {eventStream.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {systemState.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {aiGlobalSummary.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-sm leading-7 text-cyan-200/75 tracking-[0.08em]">
            SYSTEM_STATEMENT: “All BOSAH LABS subsystems operate as a unified sovereign infrastructure intelligence network with real-time synchronization across all operational domains.”
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
