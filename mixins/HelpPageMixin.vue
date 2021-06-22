<template>
	<article class="help-section -github-markdown">
		<i-card class="_margin-top-1">
			<nuxt-content :document="article" />
		</i-card>
	</article>
</template>

<script>
import { mapActions } from 'vuex';
import { VIEW_MODULE, SET_BREADCRUMBS, ADD_BREADCRUMBS } from '@/store/view/constants';

export default {
	mounted () {
		if (this.article && this.article.title) {
			this.setBreadcrumbs([
				{
					icon: ['fas', 'question-circle'],
					title: this.$t('help.title'),
					path: '/help',
					disabled: this.article.index,
				},
			]);
			if (!this.article.index) {
				this.addBreadcrumbs([
					{
						icon: ['fas', 'question-circle'],
						title: this.article.title,
						path: `/help/${ this.article.slug }`,
					},
				]);
			}
		}
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setBreadcrumbs: SET_BREADCRUMBS,
			addBreadcrumbs: ADD_BREADCRUMBS,
		}),
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";
@import "~/assets/variables.scss";

article.help-section {
	.nuxt-content {
		display: grid !important;
		justify-self: flex-start;
		padding-right: $spacer-4;

		p {
			margin: 0 16px;
			padding: 0;

			&.inline-img {
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

		@include breakpoint-down(sm) {
			padding-right: 0 !important;
		}
	}

	.logo-wrapper {
		span.text--logo {
			left: 70px !important;
		}
	}

	img {
		display: block;
		max-width: 100%;
		margin: $spacer-2 $spacer-1;
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

	td,
	th {
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
