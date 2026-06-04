'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatEventLine, formatSystemLine } from '../lib/systemFormatter';

const deploymentZones = [
  formatSystemLine('[TRUSTLAYER]', 'IDENTITY INFRASTRUCTURE', 'DEPLOYED', 'GOVERNMENT REGISTRY SYSTEMS'),
  formatSystemLine('[SCHOLARTRACK]', 'EDUCATION DIGITALIZATION', 'ACTIVE', 'UNIVERSITIES + POLYTECHNICS'),
  formatSystemLine('[RAPIDPLATE]', 'FINANCIAL RAILS', 'OPERATIONAL', 'PAYMENT INFRASTRUCTURE NETWORK'),
  formatSystemLine('[E-GOVERNANCE]', 'PUBLIC SERVICE AUTOMATION', 'INTEGRATION', 'MINISTRIES + AGENCIES')
];

const liveEvents = [
  formatEventLine('2026-06-04T12:10:12Z', 'TRUSTLAYER → E-GOVERNANCE', 'GOVERNMENT NODE ACTIVATION CONFIRMED'),
  formatEventLine('2026-06-04T12:11:03Z', 'SCHOLARTRACK → UNIVERSITIES', 'ENTERPRISE ONBOARDING COMPLETE'),
  formatEventLine('2026-06-04T12:11:47Z', 'RAPIDPLATE → PAYMENT NETWORK', 'ROLL-OUT CONFIRMATION RECEIVED'),
  formatEventLine('2026-06-04T12:12:25Z', 'E-GOVERNANCE → MINISTRIES', 'AUDIT VALIDATION COMPLETE'),
  formatEventLine('2026-06-04T12:13:09Z', 'TRUSTLAYER → RAPIDPLATE', 'INFRASTRUCTURE SCALING EVENT TRIGGERED')
];

const impactTraces = [
  formatSystemLine('[IMPACT_TRACE]', 'REDUCED FRAUD RATES', '38%', 'NATIONAL COMPLIANCE STABILITY'),
  formatSystemLine('[IMPACT_TRACE]', 'FASTER PROCESSING TIMES', '24%', 'GOVERNMENT SERVICE ACCELERATION'),
  formatSystemLine('[IMPACT_TRACE]', 'IMPROVED COMPLIANCE', '97%', 'ENTERPRISE TRUST ASSURANCE'),
  formatSystemLine('[IMPACT_TRACE]', 'AUTOMATION COVERAGE', '81%', 'INSTITUTIONAL OPERATIONAL RESILIENCE')
];

export function DeploymentIntelligenceLayer() {
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
              {formatSystemLine('[DEPLOYMENT_INTELLIGENCE]', 'NATIONAL SYSTEM ROLLOUTS', 'ACTIVE', 'GOVERNMENT + ENTERPRISE LAYER')}
            </div>
          </motion.div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {deploymentZones.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {liveEvents.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/85">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {impactTraces.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/85">
                {line}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-sm leading-7 text-cyan-200/75 tracking-[0.08em]">
            SYSTEM_STATEMENT: “Deployment layer confirms operational integration of BOSAH LABS infrastructure across national systems.”
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
