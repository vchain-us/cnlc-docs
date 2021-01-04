<template>
	<section id="banner" class="banner _display-flex _justify-content-center _align-items-center">
		<div v-if="title && subtitle" class="_display-flex _align-items-center">
			<fa
				v-if="icon" icon="chart-line"
				class="_margin-top-1-4 _margin-right-1"
			/>
			<span class="_font-weight-bold">
				{{ title }}
			</span>\
			<span class="_font-weight-bold">
				{{ subtitle }}
			</span>
		</div>
		<div v-else-if="title" class="_display-flex _align-items-center">
			<fa
				v-if="icon" :icon="icon"
				class="_margin-top-1-4 _margin-right-1"
			/>
			<span class="_font-weight-bold">
				{{ title }}
			</span>
		</div>
		<slot name="button" />
	</section>
</template>

<script>
export default {
	name: 'Banner',
	props: {
		icon: { type: String, default: 'exclamation-circle' },
		title: { type: String, default: '' },
		subtitle: { type: String, default: '' },
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';
@import '~@inkline/inkline/src/css/mixins';

section#banner {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: $spacer-3;
	padding: $spacer-1-2 $spacer-1;
	background-color: $color-warning;
	z-index: 10009;

	span,
	.button {
		font-size: 90%;
		color: rgba(0, 0, 0, 0.7);
	}

	.button {
		border: 1px solid $color-primary;

		&:hover,
		&:active,
		&.nuxt-link-active {
			color: $color-primary;
		}

		&:hover {
			background: rgba(255, 255, 255, 0.15);
		}

		&:active,
		&.nuxt-link-active {
			border-width: 2px;
			background: rgba(255, 255, 255, 0.05);
		}
	}
}
</style>
