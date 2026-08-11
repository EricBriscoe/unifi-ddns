import { defineConfig } from 'vitest/config';
import { cloudflareTest } from '@cloudflare/vitest-pool-workers';

export default defineConfig({
	plugins: [
		cloudflareTest({
			wrangler: { configPath: './wrangler.toml' },
		}),
	],
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json-summary', 'json'],
			reportOnFailure: true,
		},
	},
});
