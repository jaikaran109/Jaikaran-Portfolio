<script setup lang="ts">
  useSeoMeta({
    title: 'Jai Karan Gupta - GIS Engineer & Co-Founder',
    description:
      'MERN Developer, OpenSource Contributor, Vibe Coder & Problem Solver. GIS Engineer & Co-Founder building geospatial infrastructure. Specializing in MapLibre, Planetiler, PMTiles, and Vue.js. Open source cartographer.',
    ogTitle: 'Jai Karan Gupta - GIS Engineer & Co-Founder',
    ogDescription:
      'MERN Developer, OpenSource Contributor, Vibe Coder & Problem Solver. GIS Engineer & Co-Founder building geospatial infrastructure. Specializing in MapLibre, Planetiler, PMTiles, and Vue.js.',
    ogUrl: 'https://jaikaran109.github.io',
    ogImage:
      'https://jaikaran109.github.io/og/index.png?title=Jai%20Karan%20Gupta&description=MERN%20Developer%2C%20OpenSource%20Contributor%2C%20Vibe%20Coder%20%26%20Problem%20Solver.',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: 'summary_large_image',
    twitterImage:
      'https://jaikaran109.github.io/og/index.png?title=Jai%20Karan%20Gupta&description=MERN%20Developer%2C%20OpenSource%20Contributor%2C%20Vibe%20Coder%20%26%20Problem%20Solver.',
  });

  const teasers = [
    {
      title: 'About',
      description:
        'Co-Founder building the geospatial infrastructure of the future.',
      href: '/about',
      icon: 'lucide:user',
    },
    {
      title: 'Projects',
      description:
        'From tile servers to map SDKs: tools powering millions of map views.',
      href: '/projects',
      icon: 'lucide:folder-open',
    },
    {
      title: 'Open Source',
      description: '50+ packages, 2000+ stars, and counting.',
      href: '/open-source',
      icon: 'lucide:heart',
    },
  ];
</script>

<template>
  <main class="dark bg-background">
    <HeroSection />

    <TechnicalSkillsSection />

    <!-- Section Teasers -->
    <section class="relative py-24">
      <div class="mx-auto max-w-5xl px-6">
        <div class="grid gap-6 sm:grid-cols-2">
          <NuxtLink
            v-for="teaser in teasers"
            :key="teaser.href"
            :to="teaser.href"
            class="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:bg-accent/50"
          >
            <div class="mb-4 flex items-center gap-3">
              <div
                class="flex size-10 items-center justify-center rounded-xl bg-primary/10"
              >
                <Icon :name="teaser.icon" class="size-5 text-primary" />
              </div>
              <h2 class="text-xl font-semibold text-foreground">
                {{ teaser.title }}
              </h2>
            </div>
            <p class="mb-4 text-sm text-muted-foreground">
              {{ teaser.description }}
            </p>
            <span
              class="inline-flex items-center gap-1 text-sm text-primary transition-transform group-hover:translate-x-1"
            >
              Explore
              <Icon name="lucide:arrow-right" class="size-4" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
