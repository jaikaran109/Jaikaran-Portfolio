const BASE_URL = 'https://jaikaran109.github.io';

export default defineEventHandler(async (event: H3Event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600');

  return `# Jai Karan Gupta

> GIS Engineer & Co-Founder building geospatial infrastructure — MapLibre, Planetiler, PMTiles, and Vue.js. Open-source cartographer shipping maps, tiling pipelines, and mapping tooling.

Jai Karan Gupta is a GIS engineer and co-founder at Invarya Technologies, where he builds maps.guru and geospatial tooling. He works across the modern web-mapping stack — MapLibre GL for rendering, Planetiler and PMTiles for vector-tile generation and delivery, and Vue.js on the frontend — and maintains open-source Vue mapping packages including v-maplibre and maplibre-gl-starfield.

## Pages

- [About](${BASE_URL}/about): Who Jai Karan is — a GIS engineer and co-founder focused on geospatial infrastructure, web cartography, and open-source mapping.
- [Projects](${BASE_URL}/projects): Selected work across web mapping, vector tiling, and geospatial platforms, including maps.guru.
- [Open Source](${BASE_URL}/open-source): Vue and MapLibre open-source packages Jai Karan maintains, such as v-maplibre and maplibre-gl-starfield.

## Optional

- [Full content index](${BASE_URL}/llms-full.txt): Plaintext of the most important pages for single-round-trip ingestion.
`;
});
