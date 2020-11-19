export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sawaTV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/bus-15.svg' },
      { rel: 'stylesheet', href:'https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.css' },
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/mqtt.client.js',
    '~/plugins/marquee.client.js',
    '~/plugins/vuevideo.client.js',
    //'~/plugins/mapbox.client.js',
    //'~/plugins/tippy.client.js',
    /* '~/plugins/leafletMap.client.js', */
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
