import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/locale'],
  npmClient: 'pnpm',
  forkTSChecker: {},
  mock: false,
  hash: true,
});
