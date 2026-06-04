import { systemRegistry } from './systemRegistry';
import type { SystemModule } from './systemTypes';
import { formatEventLine } from './systemFormatter';

type HealthState = 'healthy' | 'degraded' | 'failed' | 'unknown';

const moduleHealth = new Map<string, HealthState>();

export function getBootOrder(): SystemModule[] {
  return [...systemRegistry].sort((a, b) => (a.executionOrder || 0) - (b.executionOrder || 0));
}

export function getDependencyGraph() {
  // Minimal graph: group by layer for now
  const graph: Record<string, string[]> = {};
  for (const mod of systemRegistry) {
    graph[mod.name] = systemRegistry
      .filter((m) => m.executionOrder! > (mod.executionOrder || 0))
      .map((m) => m.name);
  }
  return graph;
}

export function setModuleHealth(name: string, state: HealthState) {
  moduleHealth.set(name, state);
}

export function getModuleHealth(name: string): HealthState {
  return moduleHealth.get(name) || 'unknown';
}

export function startBootSequence(onStep?: (line: string) => void) {
  const ordered = getBootOrder();
  for (const mod of ordered) {
    setModuleHealth(mod.name, 'healthy');
    if (onStep) onStep(formatEventLine('BOOT', 'MODULE', mod.name, 'LOADED'));
  }
}

export function listModules(): SystemModule[] {
  return systemRegistry;
}
