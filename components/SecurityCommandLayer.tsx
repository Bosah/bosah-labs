'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

const threatMatrix = [
  formatSystemLine('[EXTERNAL_THREATS]', 'LOW / MEDIUM / HIGH', 'MONITORING', 'BORDER SURFACE ACTIVITY'),
  formatSystemLine('[IDENTITY_SECURITY]', 'HARDENED', 'ENCRYPTED', 'TRUSTLAYER ENFORCED'),
  formatSystemLine('[FINANCIAL_RAIL_SECURITY]', 'SECURE', 'VERIFIED', 'RAPIDPLATE PROTECTED'),
  formatSystemLine('[EDUCATION_SYSTEM_SECURITY]', 'CONTROLLED', 'AUDITED', 'SCHOLARTRACK VERIFIED'),
  formatSystemLine('[INFRASTRUCTURE_INTEGRITY]', 'STABLE', 'MONITORED', 'MULTI-NODE VALIDATED')
];

const securityEvents = [
  formatEventLine('2026-06-04T12:20:05Z', 'TRUSTLAYER → SCHOLARTRACK', 'INTRUSION ATTEMPT BLOCKED'),
  formatEventLine('2026-06-04T12:20:48Z', 'RAPIDPLATE → TRUSTLAYER', 'ENCRYPTION UPDATE DEPLOYED'),
  formatEventLine('2026-06-04T12:21:14Z', 'E-GOVERNANCE → ALL_NODES', 'COMPLIANCE CHECK PASSED'),
  formatEventLine('2026-06-04T12:21:37Z', 'EXTERNAL_THREATS → TRUSTLAYER', 'ANOMALY DETECTION ALERTED'),
  formatEventLine('2026-06-04T12:22:01Z', 'SCHOLARTRACK → RAPIDPLATE', 'NODE VERIFICATION CONFIRMED')
];

const integrityScores = [
  formatSystemLine('[INTEGRITY_SCORE]', '99.98%', 'VERIFIED', 'ZERO CRITICAL VULNERABILITIES'),
  formatSystemLine('[ENCRYPTION_COVERAGE]', '100%', 'ACTIVE', 'FULL TRUSTZONE'),
  formatSystemLine('[COMPLIANCE_STATUS]', 'COMPLIANT', 'ENFORCED', 'SOVEREIGN POLICY MANDATE'),
  formatSystemLine('[THREAT_EXPOSURE]', 'MINIMAL', 'CONTAINED', 'DYNAMIC ISOLATION')
];

export function SecurityCommandLayer() {
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
              {formatSystemLine('[SECURITY_COMMAND]', 'NATIONAL CYBER DEFENSE GRID', 'ACTIVE', 'SOVEREIGN PROTECTION ENABLED')}
            </div>
          </motion.div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {threatMatrix.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {securityEvents.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/85">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {integrityScores.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/85">
                {line}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-sm leading-7 text-cyan-200/75 tracking-[0.08em]">
            SYSTEM_STATEMENT: “All BOSAH LABS systems operate under continuous sovereign-grade encryption, monitored threat isolation, and enforced compliance intelligence.”
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
