<template>
	<i-nav id="query-sub-navbar">
		<i-nav-item :active="isQueryRoute" :to="route('query')">
			{{ $t('query') }}
		</i-nav-item>
		<i-nav-item :to="route('query-recent')">
			{{ $t('recentQueries') }}
		</i-nav-item>
		<i-nav-item :to="route('query-saved')">
			{{ $t('savedQueries') }}
		</i-nav-item>
	</i-nav>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: 'query',
		},
	},
	computed: {
		isQueryRoute() {
			return this.$route.name === 'ledgers-id-query___en' ||
                this.$route.name === 'query___en';
		},
	},
	methods: {
		route(name) {
			const params = {};

			if (this.$route.params.id) {
				params.id = this.$route.params.id;
			}

			return this.localeRoute({
				name: params.id ? `ledgers-id-${ name }` : name,
				params,
			});
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

#query-sub-navbar {
	height: $spacer-3;
	top: $spacer-5;

	.item {
		height: $spacer-3;

		&.-active,
		&.nuxt-link-active {
			border-bottom-width: 2px;
		}
	}
}
</style>
