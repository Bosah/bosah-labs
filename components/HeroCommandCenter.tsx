'use client';

import { motion } from 'framer-motion';
import { BackgroundGrid } from './BackgroundGrid';
import { fadeInUp, staggerContainer } from '../motion/variants';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

const stateLines = [
  formatSystemLine('INFRASTRUCTURE_HEALTH', 'STABLE', '99.99%'),
  formatSystemLine('ACTIVE_NODES', '24 ONLINE', 'NOMINAL'),
  formatSystemLine('SECURITY_LAYER', 'HARDENED', 'ENCRYPTED', 'ACTIVE'),
  formatSystemLine('REGIONAL_MESH', 'WEST+EAST_AFRICA', 'CONNECTED'),
  formatSystemLine('DATA_SOVEREIGNTY', 'ENFORCED', 'COMPLIANT')
];

const eventStream = [
  formatEventLine('14s', 'NG-LAG-01 → Deployment synchronized', 'Nigeria Gov Node'),
  formatEventLine('2m', 'SYSTEM → TrustLayer compliance engine updated'),
  formatEventLine('7m', 'KE-NAI-03 → ScholarTrack cluster activated'),
  formatEventLine('19m', 'SYSTEM → Security audit cycle completed'),
  formatEventLine('41m', 'GH-ACC-02 → RapidPlate payment gateway node stabilized')
];

export function HeroCommandCenter() {
  return (
    <div className="relative min-h-[100dvh] bg-[#040816] overflow-hidden text-white font-mono">
      <BackgroundGrid />

      {/* Global status line */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-black/80 border-b border-white/10 py-2.5 text-xs tracking-widest">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 text-emerald-400">
            ● LIVE | BOSAH LABS INFRASTRUCTURE COMMAND
          </div>
          <div className="text-slate-500">AFRICA MULTI-NODE GRID • REAL-TIME SYNC</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 relative z-10">
        
        {/* Low Density - System Identity */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="text-[11px] text-slate-500 tracking-[0.08em]">PRIMARY_COMMAND_NODE</div>
          
          <div className="text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-none mt-3">
            BOSAH LABS
          </div>
          
          <div className="text-2xl text-slate-400 mt-4">
            Digital Infrastructure Command System
          </div>
          
          <div className="max-w-md text-slate-400 mt-8 text-[17px] leading-relaxed">
            Managing resilient digital systems across government, enterprise, 
            and critical infrastructure networks in Africa.
          </div>

          <div className="mt-12 text-sm text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer inline-flex items-center gap-2">
            INITIATE_BRIEFING →
          </div>
        </motion.div>

        {/* Medium Density - System State Lines */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20 space-y-2.5 text-sm text-slate-300"
        >
          {stateLines.map((line, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              {line}
            </motion.div>
          ))}
        </motion.div>

        {/* High Density - Continuous Event Stream */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-1.5 text-sm"
        >
          {eventStream.map((event, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-slate-400 hover:text-slate-200 transition-colors py-0.5"
            >
              {event}
            </motion.div>
          ))}
        </motion.div>

        {/* Command Triggers */}
        <div className="mt-20 text-xs uppercase tracking-widest flex flex-wrap gap-x-8 gap-y-2 text-slate-500">
          <span className="hover:text-slate-300 cursor-pointer transition-colors">EXPLORE_MISSION</span>
          <span className="hover:text-slate-300 cursor-pointer transition-colors">VIEW_FULL_SYSTEMS</span>
          <span className="hover:text-slate-300 cursor-pointer transition-colors">REQUEST_BRIEFING</span>
          <span className="hover:text-slate-300 cursor-pointer transition-colors">ACCESS_ARCHIVES</span>
        </div>

      </div>
    </div>
  );
}
