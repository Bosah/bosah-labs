'use client';

import React from 'react';
import { formatSystemLine, formatEventLine } from '../lib/systemFormatter';

const bootLines = [
  formatSystemLine('BOOT_SEQUENCE_INIT', 'START', 'BOSAH LABS'),
  formatSystemLine('MODULE_LOAD', 'HERO_COMMAND_CENTER', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'MISSION_INTELLIGENCE_SECTION', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'PRODUCT_SYSTEM_MESH', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'DEPLOYMENT_INTELLIGENCE_LAYER', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'SECURITY_COMMAND_LAYER', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'AI_ORCHESTRATION_CORE', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'SYSTEM_INTEGRATION_LAYER', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'SYSTEM_CONTROL_PLANE', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'GLOBAL_STATE_ENGINE', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'SYSTEM_EVENT_BUS', 'PENDING'),
  formatSystemLine('MODULE_LOAD', 'LIVEOS_RUNTIME_CORE', 'PENDING')
];

const eventLines = [
  formatEventLine('00:00', 'BOOT', 'STARTED'),
  formatEventLine('00:02', 'LOADER', 'HERO_COMMAND_CENTER', 'LOADED'),
  formatEventLine('00:04', 'LOADER', 'MISSION_INTELLIGENCE_SECTION', 'LOADED'),
  formatEventLine('00:06', 'LOADER', 'PRODUCT_SYSTEM_MESH', 'LOADED'),
  formatEventLine('00:08', 'LOADER', 'DEPLOYMENT_INTELLIGENCE_LAYER', 'LOADED'),
  formatEventLine('00:10', 'LOADER', 'SECURITY_COMMAND_LAYER', 'LOADED'),
  formatEventLine('00:12', 'LOADER', 'AI_ORCHESTRATION_CORE', 'LOADED'),
  formatEventLine('00:14', 'LOADER', 'SYSTEM_CONTROL_PLANE', 'LOADED'),
  formatEventLine('00:16', 'VERIFIER', 'GLOBAL_STATE_ENGINE', 'VERIFIED'),
  formatEventLine('00:18', 'BUS', 'SYSTEM_EVENT_BUS', 'ACTIVATED'),
  formatEventLine('00:20', 'RUNTIME', 'LIVEOS_RUNTIME_CORE', 'LAUNCHED'),
  formatEventLine('00:22', 'BOOT', 'COMPLETE')
];

export function SystemBootSequence() {
  return (
    <div className="min-h-screen bg-[#040816] text-cyan-100 font-mono">
      <div className="mx-auto max-w-7xl px-6 py-6 text-[0.88rem] leading-[1.5]">
        {bootLines.map((l) => (
          <div key={l} className="whitespace-pre-wrap text-cyan-200/90">
            {l}
          </div>
        ))}

        {eventLines.map((e) => (
          <div key={e} className="whitespace-pre-wrap text-cyan-200/90">
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
