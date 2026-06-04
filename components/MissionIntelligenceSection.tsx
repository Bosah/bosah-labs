'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine } from '../lib/systemFormatter';

const domainStream = [
  formatSystemLine('IDENTITY_SYSTEMS', 'FRAGMENTED_MANUAL', 'FRAUD_DUPLICATION_WEAK_TRUST', 'TRUSTLAYER'),
  formatSystemLine('EDUCATION_INFRASTRUCTURE', 'PAPER_BASED_NO_UNIFIED_RECORDS', 'TRANSCRIPT_DELAYS_CREDENTIAL_FRAUD', 'SCHOLARTRACK'),
  formatSystemLine('FINANCIAL_RAILS', 'DISCONNECTED_SETTLEMENT', 'LEAKAGE_RECONCILIATION_FAILURE', 'RAPIDPLATE'),
  formatSystemLine('PUBLIC_SERVICES', 'NON_DIGITAL_WORKFLOWS', 'DELAYS_CORRUPTION_LOW_TRANSPARENCY', 'AUTOMATION_LAYER'),
  formatSystemLine('SECURITY_COORDINATION', 'SILOED_MONITORING', 'SLOW_THREAT_RESPONSE_FRAGMENTED_INTELLIGENCE', 'THREAT_COMMAND')
];

const impactStream = [
  formatSystemLine('FRAUD', 'IDENTITY_DUPLICATION', 'NATIONAL_TRUST_FAILURE'),
  formatSystemLine('CREDENTIAL_FRAUD', 'TRANSCRIPT_VERIFICATION_DELAYS', 'EDUCATION_SYSTEM_INEFFICIENCY'),
  formatSystemLine('SETTLEMENT_LAG', 'FINANCIAL_LEAKAGE', 'RECONCILIATION_BREAKS'),
  formatSystemLine('SERVICE_DELAYS', 'CORRUPTION_SURFACES', 'CITIZEN_FRICTION'),
  formatSystemLine('THREAT_BLINDSPOTS', 'INTELLIGENCE_FRAGMENTATION', 'SLOW_RESPONSE_CYCLES')
];

const responseMapping = [
  formatSystemLine('TRUSTLAYER', 'SOVEREIGN_IDENTITY_COMPLIANCE_MESH'),
  formatSystemLine('SCHOLARTRACK', 'NATIONAL_ACADEMIC_INTELLIGENCE_SYSTEM'),
  formatSystemLine('RAPIDPLATE', 'REAL_TIME_FINANCIAL_ORCHESTRATION_RAILS'),
  formatSystemLine('AUTOMATION_LAYER', 'END_TO_END_PUBLIC_SERVICE_DIGITALIZATION'),
  formatSystemLine('THREAT_COMMAND', 'UNIFIED_SECURITY_INTELLIGENCE_PLATFORM')
];

export function MissionIntelligenceSection() {
  return (
    <div className="relative bg-[#040816] text-white overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Domain State Stream */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-1.5 text-sm font-mono text-slate-300"
        >
          {domainStream.map((line, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="hover:text-white transition-colors"
            >
              {line}
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Stream */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-16 space-y-1 text-sm font-mono text-slate-400"
        >
          {impactStream.map((line, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="hover:text-slate-200 transition-colors"
            >
              {line}
            </motion.div>
          ))}
        </motion.div>

        {/* Response Mapping Stream */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-16 space-y-1 text-sm font-mono text-emerald-400/90"
        >
          {responseMapping.map((line, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="hover:text-emerald-300 transition-colors"
            >
              {line}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
