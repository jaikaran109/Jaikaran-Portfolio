<script setup lang="ts">
  import { useFetch } from 'nuxt/app';

  const github = await useFetch('/api/github');

  const stats = [
    {
      label: 'GitHub Stars',
      count: github.value?.pinned.reduce((sum, r) => sum + r.stars, 0) ?? 0,
      icon: 'lucide:star',
    },
    {
      label: 'Open Source Packages',
      count: github.value?.repos.length ?? 0,
      icon: 'lucide:package',
    },
    { label: 'npm Downloads', count: 0, icon: 'lucide:download' },
    {
      label: 'Contributions',
      count:
        github.value?.pinned.length > 0
          ? (github.value.pinned[0]?.stars ?? 0)
          : 0,
      icon: 'lucide:git-commit-horizontal',
    },
  ];
</script>

<template>
  <section id="open-source" class="relative overflow-hidden pt-40 pb-16">
    <!-- Aurora Background -->
    <div class="pointer-events-none absolute inset-0 opacity-20">
      <ClientOnly>
        <Aurora
          :color-stops="['#7877c6', '#40ffaa', '#4079ff']"
          :amplitude="0.8"
          :blend="0.6"
          :speed="0.6"
        />
      </ClientOnly>
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <FadeContent :duration="0.8" blur>
        <GradientText
          text="Open Source"
          :colors="['#40ffaa', '#7877c6', '#4079ff', '#40ffaa']"
          :speed="6"
          class="mb-4 text-sm font-semibold uppercase tracking-widest"
        />
      </FadeContent>

      <SplitText
        text="I Love Open Source"
        by="words"
        :delay="80"
        :duration="0.5"
        class="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-5xl"
      />

      <!-- Stats -->
      <div class="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        <FadeContent
          v-for="(stat, index) in stats"
          :key="stat.label"
          :delay="index * 0.15"
          :duration="0.8"
          blur
        >
          <div
            class="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center"
          >
            <BorderBeam
              :size="120"
              :duration="12"
              :delay="index * 2"
              color-from="#7877c6"
              color-to="#40ffaa"
            />
            <Icon
              :name="stat.icon"
              class="mx-auto mb-3 size-6 text-muted-foreground"
            />
            <CountUp
              :to="stat.count"
              :duration="2.5"
              separator=","
              class="text-3xl font-bold text-foreground"
            />
            <p class="mt-1 text-xs text-muted-foreground">
              {{ stat.label }}
            </p>
          </div>
        </FadeContent>
      </div>

      <!-- Featured Projects -->
      <div class="mb-12">
        <h3
          class="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Featured Projects
        </h3>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
          <a
            href="https://github.com/jaikaran109/51_Web_Projects"
            target="_blank"
            rel="noopener noreferrer"
            class="group rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-all"
          >
            <div
              class="h-32 flex items-center justify-center border-2 border-dashed border-border text-muted-foreground"
            >
              <div>51 Web Projects</div>
            </div>
            <h4 class="mt-2 text-sm font-medium">51_Web_Projects</h4>
            <p class="mt-1 text-xs text-muted-foreground">
              Collection of 51 web projects
            </p>
          </a>
          <a
            href="https://github.com/jaikaran109?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="group rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-all"
          >
            <div
              class="h-32 flex items-center justify-center border-2 border-dashed border-border text-muted-foreground"
            >
              <div>All Repos</div>
            </div>
            <h4 class="mt-2 text-sm font-medium">GitHub Repos</h4>
            <p class="mt-1 text-xs text-muted-foreground">
              View all repositories
            </p>
          </a>
          <a
            href="https://github.com/jaikaran109?tab=stars"
            target="_blank"
            rel="noopener noreferrer"
            class="group rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-all"
          >
            <div
              class="h-32 flex items-center justify-center border-2 border-dashed border-border text-muted-foreground"
            >
              <div>★ Stars</div>
            </div>
            <h4 class="mt-2 text-sm font-medium">Starred Repos</h4>
            <p class="mt-1 text-xs text-muted-foreground">
              Your starred projects
            </p>
          </a>
        </div>
      </div>

      <!-- GitHub Calendar -->
      <FadeContent :duration="1" :delay="0.4" blur>
        <div
          class="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
        >
          <BorderBeam
            :size="200"
            :duration="15"
            color-from="#7877c6"
            color-to="#40ffaa"
          />
          <h3
            class="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Contribution Activity
          </h3>
          <GithubCalendar
            username="jaikaran109"
            variant="city-lights"
            shape="rounded"
            :glow-intensity="0.4"
            color-schema="green"
          />
        </div>
      </FadeContent>
    </div>
  </section>
</template>
