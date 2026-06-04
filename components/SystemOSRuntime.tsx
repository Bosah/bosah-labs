'use client';

import React, { useEffect, useState } from 'react';
import { SystemBootSequence } from './SystemBootSequence';
import { HeroCommandCenter } from './HeroCommandCenter';
import { MissionIntelligenceSection } from './MissionIntelligenceSection';
import { ProductSystemMesh } from './ProductSystemMesh';
import { DeploymentIntelligenceLayer } from './DeploymentIntelligenceLayer';
import { SecurityCommandLayer } from './SecurityCommandLayer';
import { AIOrchestrationCore } from './AIOrchestrationCore';
import { SystemIntegrationLayer } from './SystemIntegrationLayer';
import { SystemControlPlane } from './SystemControlPlane';
import { GlobalStateEngine } from './GlobalStateEngine';
import { SystemEventBus } from './SystemEventBus';
import { LiveOSRuntimeCore } from './LiveOSRuntimeCore';
import { SystemTelemetryOverlay } from './SystemTelemetryOverlay';
import { startBootSequence } from '../lib/systemOrchestrator';

export function SystemOSRuntime() {
  const [bootLog, setBootLog] = useState<string[]>([]);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (!booted) {
      startBootSequence((line) => {
        setBootLog((s) => [...s, line]);
      });
      setBooted(true);
    }
  }, [booted]);

  return (
    <div className="min-h-screen bg-[#040816] text-cyan-100 font-mono">
      <div className="mx-auto max-w-7xl px-6 py-6 text-[0.88rem] leading-[1.5]">
        <SystemBootSequence />

        {bootLog.length > 0 && (
          <div className="mb-8 rounded-lg border border-cyan-500/20 bg-black/40 p-4 text-[0.85rem] text-cyan-100/85">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-cyan-300/80">
              BOOT LOG
            </div>
            <div className="space-y-1">
              {bootLog.map((line) => (
                <div key={line} className="whitespace-pre-wrap">
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6">
          <HeroCommandCenter />
          <MissionIntelligenceSection />
          <ProductSystemMesh />
          <DeploymentIntelligenceLayer />
          <SecurityCommandLayer />
          <AIOrchestrationCore />
          <SystemIntegrationLayer />
          <SystemControlPlane />
          <GlobalStateEngine />
          <SystemEventBus />
          <LiveOSRuntimeCore />
          <SystemTelemetryOverlay />
        </div>
      </div>
    </div>
  );
}
