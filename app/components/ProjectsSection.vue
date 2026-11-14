<script setup lang="ts">
  import type { GitHubResponse, GitHubRepo } from '~/types/github';

  const EMPTY_REPOS: GitHubRepo[] = [];

  // Build-time list, embedded in the prerendered payload.
  const { data: prerendered, status } = await useFetch<GitHubResponse>(
    '/api/github',
    {
      key: 'github-repos',
    },
  );

  // Fresh list after hydration. A separate key, so a failed GitHub call
  // (the API returns 502) leaves the prerendered list on screen instead of
  // replacing it with an empty one.
  const { data: live } = useFetch<GitHubResponse>('/api/github', {
    key: 'github-repos-live',
    server: false,
  });

  const data = computed(() => live.value ?? prerendered.value);

  const repos = computed(() => data.value?.repos ?? EMPTY_REPOS);
  const visibleRepos = computed(() => repos.value.slice(0, 12));

  function formatStars(count: number): string {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  }

  function formatUpdated(updatedAt: string): string {
    const days = Math.max(
      0,
      Math.floor((Date.now() - new Date(updatedAt).getTime()) / 86_400_000),
    );

    if (days === 0) return 'today';
    if (days === 1) return '1d ago';
    if (days < 365) return `${days}d ago`;
    return `${Math.floor(days / 365)}y ago`;
  }

  // YOUR SPECIFIC PROJECTS
  const highlightedProjects = [
    {
      name: '51_Web_Projects',
      description: 'Collection of 51 web projects',
      url: 'https://github.com/jaikaran109/51_Web_Projects',
      stars: 0,
      forks: 0,
      language: 'HTML',
    },
    {
      name: 'SolarSense-An-AI-Powered-Smart-Solar-Planning-and-Feasibility-Platform',
      description: 'AI-powered solar planning platform',
      url: 'https://github.com/jaikaran109/SolarSense-An-AI-Powered-Smart-Solar-Planning-and-Feasibility-Platform',
      stars: 0,
      forks: 0,
      language: 'Python',
    },
    {
      name: 'Project-Drishti',
      description: 'AI for healthcare applications',
      url: 'https://github.com/jaikaran109/Project-Drishti',
      stars: 0,
      forks: 0,
      language: 'Python',
    },
    {
      name: 'DSA',
      description: 'Data Structures & Algorithms implementations',
      url: 'https://github.com/jaikaran109/DSA',
      stars: 0,
      forks: 0,
      language: 'C++',
    },
    {
      name: 'Kaizen',
      description: 'Continuous improvement tools',
      url: 'https://github.com/jaikaran109/Kaizen',
      stars: 0,
      forks: 0,
      language: 'JavaScript',
    },
    {
      name: 'Machine-Learning',
      description: 'Machine Learning projects',
      url: 'https://github.com/jaikaran109/Machine-Learning',
      stars: 0,
      forks: 0,
      language: 'Python',
    },
  ];
</script>

<template>
  <section id="projects" class="relative py-32">
    <div class="mx-auto max-w-6xl px-6">
      <FadeContent :duration="0.8" blur>
        <GradientText
          text="Projects"
          :colors="['#7877c6', '#40ffaa', '#4079ff', '#7877c6']"
          :speed="6"
          class="mb-4 text-sm font-semibold uppercase tracking-widest"
        />
      </FadeContent>

      <div class="mb-12">
        <h2
          class="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl"
        >
          Featured Works
        </h2>
        <p class="mt-4 max-w-2xl text-base text-muted-foreground">
          A showcase of applications, AI/ML tools, competitive programming
          implementations, and web projects.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="project in highlightedProjects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-accent/40"
        >
          <div>
            <div class="mb-4 flex items-center justify-between">
              <span
                class="inline-flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary"
              >
                <Icon name="lucide:folder-git-2" class="size-5" />
              </span>
              <Icon
                name="lucide:arrow-up-right"
                class="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              />
            </div>

            <h3
              class="font-display text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors"
            >
              {{ project.name }}
            </h3>

            <p class="mt-2 text-sm text-muted-foreground line-clamp-3">
              {{ project.description }}
            </p>
          </div>

          <div
            class="mt-6 flex items-center justify-between pt-4 border-t border-border/50 text-xs text-muted-foreground"
          >
            <span class="inline-flex items-center gap-1.5 font-medium">
              <span class="size-2.5 rounded-full bg-primary/70" />
              {{ project.language }}
            </span>
            <span class="inline-flex items-center gap-1">
              <Icon name="lucide:github" class="size-3.5" />
              Source
            </span>
          </div>
        </a>
      </div>

      <section
        class="mt-16 overflow-hidden rounded-2xl border border-border bg-card"
      >
        <div class="border-b border-border px-6 py-5">
          <p
            class="text-sm font-semibold uppercase tracking-widest text-foreground"
          >
            All Repositories
          </p>
          <p class="mt-1 text-sm text-muted-foreground">
            A live view of my latest open-source work.
          </p>
        </div>

        <div v-if="visibleRepos.length" class="overflow-x-auto">
          <div class="min-w-[48rem] divide-y divide-border">
            <a
              v-for="repo in visibleRepos"
              :key="repo.url"
              :href="repo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="grid grid-cols-[16rem_minmax(0,1fr)_4rem_7rem_5rem] items-center gap-4 text-sm transition-colors hover:bg-accent/60"
            >
              <span
                class="flex h-full items-center gap-3 border-r border-border px-6 py-4 font-medium text-foreground"
              >
                <span
                  class="size-2 shrink-0 rounded-full"
                  :style="{
                    backgroundColor: repo.languageColor ?? 'var(--muted)',
                  }"
                />
                <span class="truncate">{{ repo.name }}</span>
              </span>
              <p class="truncate py-4 text-muted-foreground">
                  {{ repo.description ?? 'Open-source repository' }}
                </p>
              <span
                class="inline-flex items-center gap-1 py-4 text-muted-foreground"
              >
                <Icon name="lucide:star" class="size-3.5" />
                {{ formatStars(repo.stars) }}
              </span>
              <span class="truncate py-4 text-muted-foreground">
                {{ repo.language ?? '—' }}
              </span>
              <time class="py-4 text-muted-foreground" :datetime="repo.updatedAt">
                {{ formatUpdated(repo.updatedAt) }}
              </time>
              </a>
            </div>
        </div>

        <div
          v-else
          class="px-6 py-12 text-center text-sm text-muted-foreground"
        >
          {{
            status === 'pending'
              ? 'Loading repositories…'
              : 'Repositories are temporarily unavailable.'
          }}
        </div>
      </section>
    </div>
  </section>
</template>
