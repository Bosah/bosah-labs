'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

const topologyLines = [
  formatSystemLine('[TRUSTLAYER]', 'IDENTITY + COMPLIANCE', 'ACTIVE', 'GOVERNMENT NODE'),
  formatSystemLine('[SCHOLARTRACK]', 'EDUCATION INTELLIGENCE', 'DEPLOYED', 'ACADEMIC NODE'),
  formatSystemLine('[RAPIDPLATE]', 'FINANCIAL INFRASTRUCTURE', 'OPERATIONAL', 'PAYMENT RAIL NODE')
];

const connectionLines = [
  formatEventLine('2026-06-04T12:03:28Z', 'TRUSTLAYER → SCHOLARTRACK', 'SYSTEM LINK ACTIVE'),
  formatEventLine('2026-06-04T12:03:32Z', 'TRUSTLAYER → RAPIDPLATE', 'SYSTEM LINK ACTIVE'),
  formatEventLine('2026-06-04T12:03:36Z', 'SCHOLARTRACK → RAPIDPLATE', 'SYSTEM LINK ACTIVE')
];

const signalStream = [
  formatEventLine('2026-06-04T12:03:38Z', 'DEPLOYMENT', 'SCHOLARTRACK NODE COMMITTED'),
  formatEventLine('2026-06-04T12:03:41Z', 'SYNC', 'TRUSTLAYER ↔ SCHOLARTRACK HASH ALIGNMENT'),
  formatEventLine('2026-06-04T12:03:45Z', 'VERIFICATION', 'RAPIDPLATE PAYMENT IDENTITY CONFIRMED'),
  formatEventLine('2026-06-04T12:03:49Z', 'SECURITY UPDATE', 'TRUSTLAYER POLICY REFRESH APPLIED'),
  formatEventLine('2026-06-04T12:03:53Z', 'NODE ACTIVATION', 'RAPIDPLATE SETTLEMENT ENGINE ONLINE')
];

export function ProductSystemMesh() {
  return (
    <div className="relative bg-[#040816] text-cyan-100 font-mono overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          <div className="space-y-2">
            <div className="text-[0.68rem] uppercase tracking-[0.35em] text-cyan-300/80">SYSTEM_TOPOLOGY_MESH</div>
            <div className="text-sm leading-7 text-cyan-100/70">
              Unified representation of deployed national infrastructure systems.
            </div>
          </div>

          <div className="space-y-4 text-sm leading-7 text-cyan-100/75">
            {topologyLines.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap text-cyan-100/90">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {connectionLines.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
                {line}
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-7 text-cyan-100/75">
            {signalStream.map((line) => (
              <motion.div key={line} variants={fadeInUp} className="whitespace-pre-wrap">
                {line}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-sm leading-7 text-cyan-200/75 tracking-[0.08em]">
            SYSTEM_STATEMENT: “All nodes operate as a unified sovereign infrastructure mesh across African digital systems.”
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
