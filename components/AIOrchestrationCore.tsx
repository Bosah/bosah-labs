'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

const signalInputs = [
  formatEventLine('12s', 'MISSION_INTELLIGENCE → ORCHESTRATION_CORE', 'INFRASTRUCTURE_FAILURE_PATTERN_DETECTED'),
  formatEventLine('34s', 'SECURITY_LAYER → CORE', 'THREAT_VECTOR_ANALYSIS_UPDATED'),
  formatEventLine('58s', 'DEPLOYMENT_LAYER → CORE', 'NEW_NODE_ACTIVATED'),
  formatEventLine('81s', 'MESH_LAYER → CORE', 'RELATIONSHIP_ANOMALY_CORRELATED')
];

const correlationMatrix = [
  formatSystemLine('[CORRELATION_ENGINE]', 'PATTERN_ANALYSIS', 'ACTIVE', 'CROSS_LAYER_FUSION'),
  formatSystemLine('[RISK_ENGINE]', 'THREAT_SCORING', 'REAL_TIME', 'ADAPTIVE'),
  formatSystemLine('[DEPLOYMENT_LOGIC]', 'SYSTEM_ROUTING', 'OPTIMIZED', 'GOVERNMENT_SCALE'),
  formatSystemLine('[STRATEGIC_LAYER]', 'DECISION_SYNTHESIS', 'ACTIVE', 'NATIONAL_INFRASTRUCTURE_MODE')
];

const insights = [
  formatSystemLine('[INSIGHT]', 'TRUSTLAYER_DEPENDENCY_CRITICAL', 'HIGH_PRIORITY', 'IDENTITY_IS_CORE_INFRASTRUCTURE'),
  formatSystemLine('[INSIGHT]', 'SCHOLARTRACK_DATA_FRAGMENTATION_RISK', 'MEDIUM_PRIORITY', 'EDUCATION_SYSTEM_INTEGRATION_REQUIRED'),
  formatSystemLine('[INSIGHT]', 'RAPIDPLATE_TRANSACTION_LATENCY_OPTIMIZATION', 'LOW_PRIORITY', 'FINANCIAL_ROLLING_WINDOW_ACTIVE')
];

const decisionOutputs = [
  formatEventLine('2m', 'CORE → DEPLOYMENT_LAYER', 'SCALE_TRUSTLAYER_NODES_IN_WEST_AFRICA'),
  formatEventLine('4m', 'CORE → SECURITY_LAYER', 'INCREASE_ENCRYPTION_AUDIT_FREQUENCY'),
  formatEventLine('6m', 'CORE → MESH_LAYER', 'OPTIMIZE_NODE_LATENCY_ROUTING')
];

export function AIOrchestrationCore() {
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
              {formatSystemLine('[AI_ORCHESTRATION_CORE]', 'SYSTEM INTELLIGENCE ENGINE', 'ACTIVE', 'CROSS-LAYER AWARENESS ENABLED')}
            </div>
          </motion.div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {signalInputs.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {correlationMatrix.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {insights.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {decisionOutputs.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-sm leading-7 text-cyan-200/75 tracking-[0.08em]">
            SYSTEM_STATEMENT: “The AI Orchestration Core continuously interprets all BOSAH LABS system layers to generate real-time sovereign infrastructure intelligence and decision routing.”
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
