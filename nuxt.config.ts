// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@pinia/nuxt'],
	pinia: {
		autoImports: ['defineStore'],
	},
	imports: {
		dirs: ['./stores'],
	},
	css: ['/assets/main.scss', '/assets/variables.scss'],
	build: {
		loaders: {
			scss: { sourceMap: false },
		},
	},
});
