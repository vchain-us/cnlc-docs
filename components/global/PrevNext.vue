<template>
	<section id="prev-next">
		<div class="prev">
			<p v-if="prev && prev.url" class="_margin-0 _margin-bottom-1">
				<a :href="`${prefix}${prev.url}`" class="_font-weight-bold">
					<fa :icon="['fas', 'long-arrow-alt-left']" />
					<span class="_margin-left-1">Previous</span>
				</a>
			</p>
			<p v-if="prev && prev.label" class="_margin-0">
				<i>{{ prev.label }}</i>
			</p>
		</div>
		<div class="next">
			<p v-if="next && next.url" class="_margin-0 _margin-bottom-1">
				<a :href="`${prefix}${next.url}`" class="_font-weight-bold">
					<span class="_margin-right-1">Next</span>
					<fa :icon="['fas', 'long-arrow-alt-right']" />
				</a>
			</p>
			<p v-if="next && next.label" class="_margin-0">
				<i>{{ next.label }}</i>
			</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PrevNext',
	props: {
		prev: {
			type: Object,
			default: () => {},
		},
		next: {
			type: Object,
			default: () => {},
		},
		prefix: {
			type: String,
			default: process.env.NODE_ENV !== 'production' ? '/help' : '/help',
		},
	},
};
</script>

<style lang="scss">
section#prev-next {
	display: flex;
	flex-direction: row;
	flex-wrap: 1;
	align-items: center;
	justify-content: space-between;

	.prev,
	.next {
		width: auto;
		min-width: 100px;
		align-items: center;
	}

	.prev {
		justify-content: flex-start;
	}

	.next {
		justify-content: flex-end;
	}
}
</style>
