# Project Atlas Product Requirements Document

## Vision

Project Atlas is an open-source, GPU-accelerated, AI-native multidimensional visualization engine for exploring high-dimensional data in intuitive 2D, 3D, and future XR environments. Atlas emphasizes semantic data exploration over one-off chart components.

## Goals

- Declarative React-first API.
- GPU rendering for millions of data points.
- Renderer-agnostic analytics engine.
- Plugin architecture for domain extensions.
- AI-assisted exploration, automatic mappings, anomaly explanation, guided navigation, and story generation.

## Non-goals for v1

- Dashboard builder.
- ETL platform.
- Database.
- Reporting engine.

## Target users

Frontend engineers, data scientists, ML engineers, BI teams, research labs, observability platforms, GIS teams, and security teams.

## Architecture

```text
Application
→ Atlas React Components
→ Semantic Engine
→ Analytics Engine
→ Interaction Engine
→ Scene Graph
→ Renderer Adapter
→ React Three Fiber
→ Three.js
→ WebGL / WebGPU
```

The analytics engine remains renderer-agnostic so computation can power React Three Fiber, vanilla Three.js, and future WebGPU or XR adapters.

## Roadmap

1. **MVP:** React API, scene model, scatter and 3D scatter, camera controls, filtering, and GPU instancing.
2. **Phase 2:** Relationship graphs, time animation, hierarchies, heatmaps, and plugin API.
3. **Phase 3:** Semantic engine, AI explorer, automatic mapping, and story mode.
4. **Phase 4:** WebGPU, XR, collaborative sessions, and cloud rendering.

## Success metrics

GitHub stars, weekly downloads, external contributors, plugin ecosystem growth, and production deployments.
