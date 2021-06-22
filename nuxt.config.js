import helpRoutes from './help';

export default {
	/*
    ** Ssr propery
    ** Doc: https://nuxtjs.org/guides/configuration-glossary/configuration-ssr
    */
	ssr: false,

	/*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
	target: 'static',

	/*
    ** Server property
    ** See https://nuxtjs.org/api/configuration-server
    */
	server: {
		host: '0.0.0.0',
		port: 8081,
	},

	/*
    ** Devtools enabled
    ** See https://https://nuxtjs.org/api/configuration-srcdir
    */
	devtools: true,

		/**
     * Set up environment variables
     * See https://nuxtjs.org/api/configuration-env
     */
	env: {
		V_VERSION: process.env.V_VERSION || '2.2.1',
		FE_VERSION: process.env.FE_VERSION || '0.0.0',
		V_COMMIT: process.env.V_COMMIT || '0000000',
		SYSTEM_LEDGER: process.env.SYSTEM_LEDGER || 'cnlc-internal-ledger',
	},

	/*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
	head: {
		title: 'CNLC Documentation',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Codenotary Immutable Ledger Documentation' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	/*
    ** Global CSS
    */
	css: [
		'~/assets/style.scss',
	],

	/*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
	plugins: [
		{ src: '~/plugins/axios' },
		{ src: '~/plugins/vue-toasted', mode: 'client' },
		{ src: '~/plugins/fontawesome' },
	],

	/*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
	components: true,

	/*
    ** Nuxt.js dev-modules
    */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/stylelint-module
		'@nuxtjs/stylelint-module',

	],

	/*
    ** Nuxt.js modules
    */
	modules: [
		'@nuxtjs/style-resources',
		// Doc: https://axios.nuxtjs.org/
		// '@nuxtjs/axios',
		// Doc: https://auth.nuxtjs.org/api/auth.html
		// '@nuxtjs/auth',
		// Doc: https://content.nuxtjs.org/
		'@nuxt/content',
		// Doc: https://github.com/potato4d/nuxt-client-init-module
		'nuxt-client-init-module',
		// Doc: https://i18n.nuxtjs.org/
		'nuxt-i18n',
		// Doc: https://inkline.io/docs/introduction/installation/nuxt
		'@inkline/nuxt',
		// Doc: https://github.com/vaso2/nuxt-fontawesome
		['nuxt-fontawesome', {
			component: 'fa',
			imports: [
				{
					set: '@fortawesome/free-brands-svg-icons',
					icons: ['faGithub', 'faGitlab', 'faGoogle'],
				},
				{
					set: '@fortawesome/free-regular-svg-icons',
					icons: [
						'faChartBar',
						'faCalendarAlt',
					],
				},
				{
					set: '@fortawesome/free-solid-svg-icons',
					icons: [
						'faBan',
						'faBell',
						'faCaretDown',
						'faCheck',
						'faCheckCircle',
						'faChevronLeft',
						'faChevronRight',
						'faCircle',
						'faCodeBranch',
						'faCog',
						'faCopy',
						'faDatabase',
						'faDownload',
						'faEnvelope',
						'faExclamationCircle',
						'faExclamationTriangle',
						'faFile',
						'faFileAlt',
						'faFolderOpen',
						'faHistory',
						'faInfoCircle',
						'faKey',
						'faList',
						'faLock',
						'faQuestionCircle',
						'faRedo',
						'faTasks',
						'faTh',
						'faThLarge',
						'faTimesCircle',
						'faTrash',
						'faTrashAlt',
						'faSave',
						'faSearch',
						'faSpinner',
						'faUser',
						'faUserCircle',
						'faLongArrowAltLeft',
						'faLongArrowAltRight',
					],
				},
			],
		}],
	],

	/**
     * Set up internationalization
     * Doc: https://nuxtjs.org/examples/i18n
     */
	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en.js' },
		],
		langDir: 'i18n/',
		lazy: true,
		defaultLocale: 'en',
	},

	/**
     * Set authenticated as default middleware
     * Doc: https://nuxtjs.org/guides/configuration-glossary/configuration-router
     */
	router: {
		middleware: [],
		base: process.env.NODE_ENV !== 'production' ? '/' : '/',
		scrollBehavior: async (to, from, savedPosition) => {
			if (savedPosition) {
				return savedPosition;
			}

			const findEl = async (hash, x = 0) => {
				return (
					document.querySelector(hash) ||
					await new Promise((resolve) => {
						if (x > 50) {
							return resolve(document.querySelector('#app'));
						}
						setTimeout(() => resolve(findEl(hash, ++x || 1)), 100);
					})
				);
			};

			if (to.hash) {
				const el = await findEl(to.hash);
				if ('scrollBehavior' in document.documentElement.style) {
					return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
				}
				else {
					return window.scrollTo(0, el.offsetTop);
				}
			}

			return { x: 0, y: 0 };
		},
	},

	generate: {
		routes: () => {
			let paths = [];
			if (helpRoutes) {
				const map = Object.keys(helpRoutes);
				if (map && map.length) {
					map.map((path) => {
						paths = [...paths, {
							route: `/help/${ helpRoutes[path] }`,
							payload: path,
						}];
					});
				}
			}
			return paths;
		},
	},

	/**
     * Import variable overrides
     */
	styleResources: {
		scss: ['~/assets/variables.scss'],
	},

	/**
     * Configure content module
     */
	content: {
		dir: 'pages',
	},
};
