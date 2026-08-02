export interface AnalyticsCapabilities {
  clustering: boolean;
  pca: boolean;
  umap: boolean;
  tsne: boolean;
  outlierDetection: boolean;
  correlation: boolean;
  forecasting: boolean;
  dimensionalReduction: boolean;
}

export const mvpAnalyticsCapabilities: AnalyticsCapabilities = {
  clustering: true,
  pca: true,
  umap: false,
  tsne: false,
  outlierDetection: true,
  correlation: true,
  forecasting: false,
  dimensionalReduction: true
};

export function pearsonCorrelation(x: number[], y: number[]): number {
  if (x.length !== y.length || x.length === 0) {
    throw new Error('Correlation vectors must be non-empty and have matching lengths.');
  }

  const xMean = mean(x);
  const yMean = mean(y);
  const numerator = x.reduce((sum, value, index) => sum + (value - xMean) * (y[index] - yMean), 0);
  const xVariance = x.reduce((sum, value) => sum + (value - xMean) ** 2, 0);
  const yVariance = y.reduce((sum, value) => sum + (value - yMean) ** 2, 0);
  const denominator = Math.sqrt(xVariance * yVariance);

  return denominator === 0 ? 0 : numerator / denominator;
}

function mean(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}
