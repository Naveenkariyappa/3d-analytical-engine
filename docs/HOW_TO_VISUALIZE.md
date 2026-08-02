# How to visualize Project Atlas today

Project Atlas is still a scaffold, but you can already visualize the catalog and product direction with the included static preview.

## Run the local preview

From the repository root:

```bash
npm run demo
```

Then open <http://localhost:4173/demo/> in your browser.

## What the preview shows

- An animated multidimensional point-cloud concept for the future Atlas 3D scatter and embedding-space experiences.
- The planned architecture stack from application code down to WebGL/WebGPU.
- Cards for every planned React UI component, including Scene, Dimensions, Color, Size, Timeline, Clusters, HeatField, Camera, Filter, and PluginSlot.
- Cards for every visualization family from the PRD, each with a description.
- Cards for every visualization grammar primitive, encoding, and interaction, each with a description.

## Where the source lives

- `demo/index.html` contains the static visualization preview.
- `docs/VISUALIZATION_CATALOG.md` contains the human-readable catalog.
- `src/visualization-grammar.ts` contains the typed runtime catalog exported by the library.
