export type SemanticType = 'numeric' | 'categorical' | 'temporal' | 'embedding' | 'boolean' | 'unknown';

export interface ColumnProfile {
  name: string;
  type: SemanticType;
  distinctCount: number;
  nullable: boolean;
}

export interface SemanticGraph {
  columns: ColumnProfile[];
  temporalDimensions: string[];
  categoricalDimensions: string[];
  embeddingDimensions: string[];
}

export function inferSemanticGraph(rows: Record<string, unknown>[]): SemanticGraph {
  const names = Array.from(new Set(rows.flatMap((row) => Object.keys(row))));
  const columns = names.map((name) => profileColumn(name, rows.map((row) => row[name])));

  return {
    columns,
    temporalDimensions: columns.filter((column) => column.type === 'temporal').map((column) => column.name),
    categoricalDimensions: columns.filter((column) => column.type === 'categorical').map((column) => column.name),
    embeddingDimensions: columns.filter((column) => column.type === 'embedding').map((column) => column.name)
  };
}

function profileColumn(name: string, values: unknown[]): ColumnProfile {
  const present = values.filter((value) => value !== null && value !== undefined);
  const distinctCount = new Set(present.map((value) => JSON.stringify(value))).size;

  return {
    name,
    type: inferType(present),
    distinctCount,
    nullable: present.length !== values.length
  };
}

function inferType(values: unknown[]): SemanticType {
  if (values.length === 0) return 'unknown';
  if (values.every((value) => typeof value === 'number' && Number.isFinite(value))) return 'numeric';
  if (values.every((value) => typeof value === 'boolean')) return 'boolean';
  if (values.every((value) => value instanceof Date || (typeof value === 'string' && !Number.isNaN(Date.parse(value))))) return 'temporal';
  if (values.every((value) => Array.isArray(value) && value.every((item) => typeof item === 'number'))) return 'embedding';
  if (values.every((value) => typeof value === 'string')) return 'categorical';
  return 'unknown';
}
