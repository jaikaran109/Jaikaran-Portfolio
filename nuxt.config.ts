export default defineNuxtConfig({
  future: {
    // Nuxt 5 compatibility currently breaks @nuxt/content's Nitro query route build.
    compatibilityVersion: 4,
  },

  compatibilityDate: '2026-10-01',

  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    // OpenPanel product analytics (self-hosted at events.geoql.in), alongside
    // Plausible. The module copies every `openpanel` option below into
    // runtimeConfig.public (browser-exposed), so the client secret lives in the
    // private runtimeConfig.openpanel block instead.
    '@openpanel/nuxt',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://jaikaran109.github.io',
    name: 'Jai Karan Gupta',
  },

  fonts: {
    families: [
      // Inter is the established brand body/UI face (loaded via CSS stack).
      // Geist is the editorial display companion for article + section headings.
      { name: 'Geist', provider: 'google', weights: [400, 500, 600, 700, 800] },
    ],
  },

  sitemap: {
    // Static personal site — precompute the sitemap at build, no runtime cost.
    zeroRuntime: true,
  },

  components: [
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['~/assets/css/globals.css'],

  vite: {
    optimizeDeps: {
      include: ['maplibre-gl', '@geoql/maplibre-gl-starfield'],
    },
    // Vite 8.1.3 (latest) crashes with "handleUpgrade() called more than once"
    // when a second WebSocket upgrade races Nitro's dev server on the shared
    // HTTP socket (any browser-automation connection triggers it). Pinning HMR
    // to its own client port routes the HMR upgrade off the shared listener.
    // Vite 8.1.4+ renamed server.hmr.* to server.ws.* (same semantics).
    server: {
      ws: { host: 'localhost', port: 24678 },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Jai Karan Gupta - GIS Engineer & Co-Founder',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Co-Founder building geospatial infrastructure. Specializing in MapLibre, Planetiler, PMTiles, and Vue.js. Open source cartographer.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },

  icon: {
    provider: 'iconify',
    mode: 'svg',
    customCollections: [
      {
        prefix: 'base',
        dir: './app/assets/icons',
      },
    ],
  },

  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN || 'jaikaran109.github.io',
    apiHost: 'https://analytics.geoql.in',
    autoOutboundTracking: true,
  },

  openpanel: {
    // Baked in at build time: prerendered pages embed runtimeConfig.public.
    clientId: process.env.NUXT_PUBLIC_OPENPANEL_CLIENT_ID ?? '',
    apiUrl: 'https://events.geoql.in/api',
    trackScreenViews: true,
    trackOutgoingLinks: true,
    trackAttributes: true,
    // The proxy handler hardcodes api.openpanel.dev and would bypass the
    // self-hosted apiUrl; the browser POSTs to events.geoql.in directly.
    proxy: false,
  },

  content: {
    // Local dev: use file-based storage so the content module can initialize
    // and parse content without a Cloudflare D1 binding. Production deploys to
    // Cloudflare Pages provide the D1 database via the wrangler binding.
    database: import.meta.dev
      ? { type: 'file' }
      : { type: 'd1', bindingName: 'DB' },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
            dark: 'github-dark',
            light: 'github-light',
          },
          langs: [
            'bash',
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'shell',
            'md',
            'yaml',
            'rust',
            'toml',
          ],
        },
      },
    },
  },

  runtimeConfig: {
    githubToken: '',
    // Server-only. clientSecret authenticates server-side track calls
    // (server/utils/openpanel.ts); on the Worker it comes from the
    // NUXT_OPENPANEL_CLIENT_SECRET secret at runtime.
    openpanel: {
      clientId: process.env.NUXT_PUBLIC_OPENPANEL_CLIENT_ID ?? '',
      clientSecret: '',
    },
  },

  nitro: {
    // Work around Nuxt 4.6.0 SSR renderer bug on Windows (nuxt/nuxt#36467):
    // the renderer is left external by Nitro, causing
    // "Either manifest or precomputed data must be provided" on every SSR page.
    externals: {
      inline: [/[/\\]node_modules[/\\]nuxt[/\\]dist[/\\]/],
    },
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/projects', '/open-source'],
    },
    experimental: {
      wasm: true,
    },
    wasm: {
      esmImport: true,
      lazy: true,
    },
    rollupConfig: {
      output: {
        generatedCode: {
          constBindings: true,
        },
      },
    },
    replace: {
      'process.stdout': 'undefined',
    },
  },
});
