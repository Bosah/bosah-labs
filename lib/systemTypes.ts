export type SystemLine = string; // e.g. "SYSTEM_LINE: [AI_FUSION_ENGINE] | ..."
export type EventLine = string; // e.g. "EVENT_LINE: 00:11 | ..."
export type ResponseLine = SystemLine | EventLine | string;

export type NodeState = {
  id: string;
  status: 'online' | 'offline' | 'degraded' | 'unknown';
  lastSeen?: string;
  metrics?: Record<string, number>;
};

export type DomainState = {
  domain: string;
  consistency: 'verified' | 'pending' | 'conflict';
  snapshotRef?: string;
  nodes?: NodeState[];
};

export type SystemModule = {
  name: string;
  layer: 'core' | 'intelligence' | 'execution' | 'control' | 'runtime';
  status: 'active' | 'inactive';
  path: string;
  executionOrder?: number;
  importance?: 'HIGH' | 'MEDIUM' | 'LOW';
};

export default {};
