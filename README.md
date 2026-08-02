# Project Atlas

Project Atlas is a working-title, open-source, GPU-accelerated, AI-native multidimensional visualization engine. It is designed to help developers and analysts explore high-dimensional datasets across 2D, 3D, and future XR environments.

Atlas focuses on semantic data exploration rather than isolated chart types.

## Core modules

- **Semantic Engine:** infers column types, temporal dimensions, categorical fields, embeddings, and semantic graph metadata.
- **Analytics Engine:** houses renderer-agnostic analytical capabilities such as clustering, PCA, outlier detection, correlation, forecasting, and dimensional reduction.
- **Interaction Engine:** planned support for hover, select, multi-select, lasso, brush, compare, story mode, camera bookmarks, and drill-down.
- **Rendering Engine:** planned adapter architecture for React Three Fiber, vanilla Three.js, future WebGPU, and XR targets.
- **Plugin SDK:** extension points for domain plugins such as finance, cybersecurity, genomics, IoT, and manufacturing.

## Declarative API direction

```tsx
<Scene data={sales}>
  <Dimensions x="revenue" y="profit" z="growth" />
  <Color by="region" />
  <Size by="customers" />
  <Timeline by="month" />
  <Clusters />
  <HeatField />
</Scene>
```

## Development

```bash
npm install
npm run typecheck
npm run demo
```

See [docs/PRD.md](docs/PRD.md) for product requirements and roadmap, and [docs/VISUALIZATION_CATALOG.md](docs/VISUALIZATION_CATALOG.md) for the supported visualization families, primitives, encodings, and interactions.

## How to see what is represented in code

The runtime catalog lives in `src/visualization-grammar.ts`. It exports `visualizationFamilies`, `primitives`, `encodings`, and `interactions`, which mirror the documentation catalog and can be imported by applications, docs tooling, or tests.


## Visualize the catalog

Run `npm run demo` and open <http://localhost:4173/demo/> to view the static Atlas visualization preview. See [docs/HOW_TO_VISUALIZE.md](docs/HOW_TO_VISUALIZE.md) for details.
