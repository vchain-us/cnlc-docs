<template>
	<i-card>
		<i-breadcrumb>
			<i-breadcrumb-item
				v-for="(item, index) in breadcrumbs"
				:key="index"
				:active="isCurrentItem(item)"
				:to="localePath(item.path)"
			>
				{{ item.title }}
			</i-breadcrumb-item>
		</i-breadcrumb>
	</i-card>
</template>
<script>
export default {
	props: {
		data: {
			type: Array,
			default: () => ([]),
		},
	},
	computed: {
		breadcrumbs() {
			const routeParts = this.$route.path.split('/');
			const items = [];

			routeParts.forEach((part, index) => {
				if (index === 0) {
					return;
				}

				const path = routeParts.slice(0, index + 1).join('/');
				const data = this.mappedData.find(item => item.path === path);

				items.push({
					title: (data && data.title) || '',
					path,
				});
			});

			return items;
		},
		mappedData() {
			return this.data.map(item => ({
				...item,
				path: item.path.replace(/\/index$/, ''),
			}));
		},
	},
	methods: {
		isCurrentItem(item) {
			return item.path === this.$route.path;
		},
	},
};
</script>

<style lang="scss" scoped>
.breadcrumb {
	margin-bottom: 0 !important;
}
</style>
