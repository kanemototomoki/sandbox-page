import {
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
  vitePlugin as remix,
} from '@remix-run/dev'
import { defineConfig } from 'vite'
import styleX from 'vite-plugin-stylex'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [remixCloudflareDevProxy(), remix(), tsconfigPaths(), styleX()],
})
