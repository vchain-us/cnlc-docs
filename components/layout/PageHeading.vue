<template>
	<i-card class="page-heading" :class="classes">
		<h1 class="title">
			<fa
				v-if="icon" :icon="icon"
				class="_margin-right-1-2"
			/>
			<span class="text">
				<slot name="title">{{ title }}</slot>
				<small v-if="subtitle" class="subtitle">{{ subtitle }}</small>
			</span>
		</h1>
		<div class="content">
			<slot />
		</div>
	</i-card>
</template>

<script>
export default {
	name: 'PageHeading',
	props: {
		title: {
			type: String,
			default: '',
		},
		subtitle: {
			type: String,
			default: '',
		},
		icon: {
			type: Array,
			default: null,
		},
		plain: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classes() {
			return {
				'-plain': this.plain,
			};
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

.page-heading {
	min-height: 78px;

	&.-plain {
		border: 0;
		min-height: auto;

		.body {
			padding: 0;
			border: 0;
		}
	}

	.body {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-size: 32px;
		margin-top: 0;
		margin-bottom: 0 !important;
		font-weight: bold;
		display: flex;
		align-items: center;

		svg {
			margin-left: $spacer / 2;
			color: $color-primary;
		}

		.text {
			margin-left: $spacer / 2;
		}
	}

	.subtitle {
		font-size: 14px;
		color: $text-muted;
		font-weight: normal;
		display: block;
		margin-top: 5px;
	}

	.content {
		flex-grow: 1;
		flex-shrink: 1;
		display: flex;
		justify-content: flex-end;
	}
}
</style>
