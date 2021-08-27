<template>
	<article class="help-section">
		<ThePageHeading :title="article.title" :icon="['fas', 'question-circle']" />

		<TheHelpBreadcrumbs
			v-if="showBreadcrumbs" :data="articles"
			class="_margin-top-1"
		/>

		<i-card class="_margin-top-1">
			<nuxt-content :document="article" />
		</i-card>
	</article>
</template>

<script>
export default {
	name: 'HelpPageMixin',
	computed: {
		showBreadcrumbs() {
			return this.$route.path !== '/help';
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

article.help-section {
	padding-right: $spacer-4;
	background: transparent;

	.nuxt-content {
		display: grid;
		justify-self: start;

		p.inline-img {
			display: block;

			img {
				display: inline;
				margin: 0 $spacer-1-2 !important;
				padding: 0 !important;
			}

			@include breakpoint-down(sm) {
				display: inline;
			}
		}
	}

	.help--logo {
		img {
			margin: 0 !important;
		}
	}

	img {
		display:block;
		max-width: 100%;
		margin: $spacer-2 auto;
		padding: 0;
	}

	table {
		width: 100%;
		margin: $spacer-2 0;
		border-collapse: collapse;
	}

	tr:nth-of-type(even) {
		background: lighten($color-primary, 60%);
	}

	th {
		background: $color-primary;
		color: $color-white;
		font-weight: bold;
	}

	td, th {
		padding: 6px;
		border: 1px solid #e6e6e6;
		text-align: left;
	}

	.nuxt-content-highlight {
		margin: $spacer-1-2 0;
	}

	@include breakpoint-up(md) {
		border-right: 1px solid #e6e6e6;
	}

	@include breakpoint-down(sm) {
		padding: 0;
		padding-bottom: $spacer-2;

		h1 {
			font-size: 1.5rem;
			font-weight: bold;
		}

		h2 {
			font-size: 1.25rem;
			font-weight: bold;
		}

		img {
			width: 100%;
			padding: 0;
		}

		table {
			table-layout: fixed;
			width: 100%;
			word-wrap: break-word;
		}
	}
}
</style>
