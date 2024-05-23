import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	paths: {
		// This ain't pretty, but Svelte basically does the same
		'$lib/*': ['src/lib/*']
	},
	entry: ['tests/*.ts'],
	ignoreExportsUsedInFile: true
};

export default config;
