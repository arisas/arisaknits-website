/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

/** @type {import('tailwindcss').Config} */
//https://tailwindcss.com/docs/guides/nuxtjs#standard
//https://tailwindui.com/changes-for-v2#tailwindcss-ui-is-no-longer-needed ??

module.exports = {
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};

// how to Start the Tailwind CLI build process
// https://tailwindcss.com/docs/installation
//https://dir-blogs.hashnode.dev/how-to-install-configuration-tailwind-css-beginners-guide
