export const visualizationFamilies = {
  statistical: ['bar', 'line', 'area', 'scatter', 'bubble', 'histogram', 'heatmap', 'box-plot', 'violin', 'parallel-coordinates', 'radar'],
  threeDimensional: ['3d-scatter', '3d-bubble', 'surface', 'terrain', 'voxel', 'density-cloud', 'volumetric-heatmap'],
  relationship: ['force-graph', 'sankey', 'dag', 'chord', 'knowledge-graph', 'dependency-graph'],
  hierarchy: ['treemap', 'sunburst', 'circle-packing', 'icicle', 'organization-chart'],
  temporal: ['timeline', 'motion-trails', 'race-chart', 'calendar-heatmap', 'forecast', 'time-cube'],
  spatial: ['globe', 'terrain', 'hex-grid', 'building-layer', 'flight-paths'],
  ai: ['embedding-space', 'latent-space', 'topic-clusters', 'attention-view', 'confidence-cloud', 'semantic-neighborhood'],
  engineering: ['service-graph', 'trace-view', 'git-graph', 'architecture-view']
} as const;

export const primitives = ['point', 'line', 'surface', 'volume', 'mesh', 'particle', 'ribbon', 'label', 'edge', 'cluster'] as const;
export const encodings = ['position', 'color', 'size', 'shape', 'opacity', 'motion', 'glow', 'rotation', 'texture'] as const;
export const interactions = ['hover', 'zoom', 'orbit', 'filter', 'split', 'compare', 'timeline', 'story', 'bookmark'] as const;

export type VisualizationFamily = keyof typeof visualizationFamilies;
export type VisualizationKind = (typeof visualizationFamilies)[VisualizationFamily][number];
export type Primitive = (typeof primitives)[number];
export type Encoding = (typeof encodings)[number];
export type Interaction = (typeof interactions)[number];

export interface SceneSpec {
  data: Record<string, unknown>[];
  dimensions: Partial<Record<'x' | 'y' | 'z' | 'time', string>>;
  encodings?: Partial<Record<'color' | 'size' | 'shape' | 'opacity', string>>;
  interactions?: Interaction[];
  primitives?: Primitive[];
}

export interface VisualizationCatalog {
  families: typeof visualizationFamilies;
  primitives: typeof primitives;
  encodings: typeof encodings;
  interactions: typeof interactions;
}

export const visualizationCatalog: VisualizationCatalog = {
  families: visualizationFamilies,
  primitives,
  encodings,
  interactions
};

export function listVisualizationKinds(family?: VisualizationFamily): VisualizationKind[] {
  const families = family ? [visualizationFamilies[family]] : Object.values(visualizationFamilies);
  return families.flat() as VisualizationKind[];
}
