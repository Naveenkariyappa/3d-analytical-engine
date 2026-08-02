import type { SceneSpec } from './visualization-grammar.js';

export interface AtlasPluginContext {
  registerVisualization(name: string, spec: SceneSpec): void;
  registerRecommendation(name: string, predicate: (spec: SceneSpec) => boolean): void;
}

export interface AtlasPlugin {
  name: string;
  version: string;
  domains: string[];
  setup(context: AtlasPluginContext): void;
}

export function createPlugin(plugin: AtlasPlugin): AtlasPlugin {
  return plugin;
}
