<template>
	<div id="breadcrumbs">
		<i-breadcrumb class="_margin-0">
			<i-breadcrumb-item
				v-for="(item, idx) in breadcrumbs"
				:key="idx"
				:class="getClass(idx)"
				:active="isCurrentItem(item)"
				:to="getPath(item, idx)"
			>
				<div
					v-if="item"
					class="_margin-0 item-wrapper"
				>
					<fa
						v-if="idx === 0 && item.icon"
						:icon="item.icon"
						class="item-icon _margin-right-1-2 -headline"
					/>
					<span
						v-if="item.title"
						:class="`item-title ${getTypography(idx)}`"
					>
						{{ item.title | truncate(36) }}
					</span>
				</div>
			</i-breadcrumb-item>
		</i-breadcrumb>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { VIEW_MODULE, BREADCRUMBS } from '~/store/view/constants';

export default {
	name: 'Breadcrumbs',
	computed: {
		...mapGetters(VIEW_MODULE, {
			breadcrumbs: BREADCRUMBS,
		}),
	},
	methods: {
		isCurrentItem (data) {
			const currentPath = this.$route && this.$route.path
				? this.$route.path.replace(/\/$/, '') : '';
			return data && (data.path === currentPath || data.disabled);
		},
		getClass (idx) {
			if (idx === 0) {
				return '-primary';
			}
			else if (idx === this.breadcrumbs.length - 1) {
				return '-tertiary';
			}
			else {
				return '-secondary';
			}
		},
		getTypography (idx) {
			if (idx === 0) {
				return '-headline';
			}
			else if (idx === this.breadcrumbs.length - 1) {
				return '-body-2';
			}
			else {
				return '-subtitle';
			}
		},
		getPath (item, idx) {
			return (idx < this.breadcrumbs.length - 1) ? this.localePath(item.path) : null;
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

#breadcrumbs {
	height: $spacer-3;

	.breadcrumb {
		.item {
			display: flex;
			height: $spacer-3;
			justify-content: flex-start;
			align-items: baseline;

			&.-secondary {
				padding-top: $spacer-1-4;
				padding-left: $spacer-1;
			}

			&.-tertiary {
				padding-top: $spacer-1-4;
				padding-left: $spacer-1;
			}

			&.-active {
				&:not(.-primary) {
					.item-title {
						color: $text-muted !important;
					}
				}

				&.-primary {
					.item-title {
						color: #333 !important;
					}
				}
			}

			.item-wrapper {
				display: flex;
				height: $spacer-3;
				justify-content: flex-start;
				align-items: center;

				.item-icon {
					padding-top: $spacer-1-4;
					color: $color-primary;
				}

				.item-title {
					color: $color-secondary;
					font-weight: bold;
				}
			}

			&::before {
				padding-top: 2px;
				padding-right: $spacer-1;
			}
		}
	}
}
</style>
