import type { SystemModule } from './systemTypes';

export const systemRegistry: SystemModule[] = [
  {
    name: 'HeroCommandCenter',
    layer: 'intelligence',
    status: 'active',
    path: 'components/HeroCommandCenter.tsx',
    executionOrder: 1,
    importance: 'HIGH'
  },
  {
    name: 'MissionIntelligenceSection',
    layer: 'intelligence',
    status: 'active',
    path: 'components/MissionIntelligenceSection.tsx',
    executionOrder: 2,
    importance: 'HIGH'
  },
  {
    name: 'ProductSystemMesh',
    layer: 'core',
    status: 'active',
    path: 'components/ProductSystemMesh.tsx',
    executionOrder: 3,
    importance: 'MEDIUM'
  },
  {
    name: 'DeploymentIntelligenceLayer',
    layer: 'execution',
    status: 'active',
    path: 'components/DeploymentIntelligenceLayer.tsx',
    executionOrder: 4,
    importance: 'HIGH'
  },
  {
    name: 'SecurityCommandLayer',
    layer: 'control',
    status: 'active',
    path: 'components/SecurityCommandLayer.tsx',
    executionOrder: 5,
    importance: 'HIGH'
  },
  {
    name: 'AIOrchestrationCore',
    layer: 'core',
    status: 'active',
    path: 'components/AIOrchestrationCore.tsx',
    executionOrder: 6,
    importance: 'HIGH'
  },
  {
    name: 'SystemIntegrationLayer',
    layer: 'core',
    status: 'active',
    path: 'components/SystemIntegrationLayer.tsx',
    executionOrder: 7,
    importance: 'MEDIUM'
  },
  {
    name: 'SystemControlPlane',
    layer: 'control',
    status: 'active',
    path: 'components/SystemControlPlane.tsx',
    executionOrder: 8,
    importance: 'HIGH'
  },
  {
    name: 'GlobalStateEngine',
    layer: 'runtime',
    status: 'active',
    path: 'components/GlobalStateEngine.tsx',
    executionOrder: 9,
    importance: 'HIGH'
  },
  {
    name: 'SystemEventBus',
    layer: 'runtime',
    status: 'active',
    path: 'components/SystemEventBus.tsx',
    executionOrder: 10,
    importance: 'MEDIUM'
  },
  {
    name: 'LiveOSRuntimeCore',
    layer: 'runtime',
    status: 'active',
    path: 'components/LiveOSRuntimeCore.tsx',
    executionOrder: 11,
    importance: 'HIGH'
  }
];
