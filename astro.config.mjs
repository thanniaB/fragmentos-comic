import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales';

// https://astro.build/config
export default defineConfig({
  site: 'https://thornsofadragon.netlify.app', // Set your site's URL
  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE_SETTING,
        locales: Object.fromEntries(
          Object.entries(LOCALES_SETTING).map(
            ([key, value]) => [key, value.lang ?? key]
          )
        ),
      },
    })
  ],
  fonts: [{
    provider: fontProviders.local(),
    name: "PistonBlack",
    cssVariable: "--font-piston-black",
    options: {
      variants: [{
        src: ['./src/assets/fonts/PistonBlack-Regular.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});
