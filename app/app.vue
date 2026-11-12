<script setup lang="ts">
  // Site-wide Open Graph defaults — every page inherits these; pages can still
  // override ogTitle/ogDescription/ogImage/ogUrl in their own useSeoMeta.
  useSeoMeta({
    ogType: 'website',
    ogSiteName: 'Jai Karan Gupta',
  });

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Jai Karan Gupta',
          url: 'https://jaikaran109.github.io',
          jobTitle: 'GIS Engineer & Co-Founder',
          description:
            'Co-Founder building geospatial infrastructure. Specializing in MapLibre, Planetiler, PMTiles, and Vue.js. Open source cartographer.',
          worksFor: {
            '@type': 'Organization',
            name: 'Invarya Technologies Private Limited',
            url: 'https://invarya.com',
          },
          knowsAbout: [
            'Geospatial Engineering',
            'MapLibre GL',
            'Planetiler',
            'PMTiles',
            'Vue.js',
            'Cartography',
            'Open Source',
          ],
          sameAs: ['https://github.com/jaikaran109'],
        }),
      },
    ],
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
