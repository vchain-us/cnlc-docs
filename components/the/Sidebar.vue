<template>
	<i-sidebar
		id="sidebar"
		:class="{ mini }"
		:value="collapsed"
		size="lg"
		@input="onCollapse"
	>
		<i-nav vertical>
			<i-nav-item
				:to="localePath({ name: 'help' })"
				:title="mini ? $t('sidebar.help') : ''"
			>
				<fa :icon="['fas', 'question-circle']" />
				<span v-if="!mini" class="item-label">{{ $t('sidebar.help') }}</span>
			</i-nav-item>
		</i-nav>
		<div v-if="!mobile && !collapsed" class="mini-wrapper">
			<i-button
				variant="dark" link
				@click="onMini"
			>
				<fa :icon="['fas', mini ? 'chevron-right' : 'chevron-left']" />
			</i-button>
		</div>
	</i-sidebar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VIEW_MODULE, SET_SIDEBAR, MOBILE, SIDEBAR_MINI, SIDEBAR_COLLAPSED } from '@/store/view/constants';

export default {
	computed: {
		...mapGetters(VIEW_MODULE, {
			mobile: MOBILE,
			mini: SIDEBAR_MINI,
			collapsed: SIDEBAR_COLLAPSED,
		}),
		permissions() {
			return true;
		},
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setSidebar: SET_SIDEBAR,
		}),
		onCollapse (value) {
			this.setSidebar({ collapsed: value });
		},
		onMini () {
			this.setSidebar({ mini: !this.mini });
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

#sidebar {
	position: fixed;
	top: 64px;
	flex-shrink: 0;

	.sidebar {
		max-width: 100%;
		padding: $spacer-1 0;
		background: white;
		border-right: 1px solid $border-color-light;

		.sidebar-content {
			max-width: 100%;

			.item {
				display: flex;
				min-height: 50px;
				width: 100%;
				align-items: center;
				justify-content: flex-start;
				padding: $spacer-1;
				color: $color-gray-80;
				transition: background 0.3s ease, color 0.3s ease;

				.svg-inline--fa {
					margin-right: 0.5rem;
				}

				.subtitle {
					display: block;
					font-size: 65%;
					font-weight: normal;
					margin-top: -5px;
					color: $text-muted;
				}

				&.nuxt-link-active:not(:first-child),
				&.nuxt-link-exact-active {
					color: $color-primary;
					font-weight: 600;

					.subtitle {
						color: $color-primary;
					}
				}

				&:hover {
					background: $color-gray-10;
				}

				&:active {
					background: $color-gray-20;
				}
			}

			.mini-wrapper {
				position: absolute;
				display: flex;
				right: 0;
				bottom: 80px;
				left: 0;
				align-items: center;
				justify-content: flex-end;
				text-align: right;
				padding: 0 $spacer-1;
			}
		}
	}

	&.mini {
		max-width: $spacer-4 !important;

		.sidebar {
			padding: $spacer-1-2 0;

			.item {
				display: flex;
				justify-content: center;
				align-items: center;

				.svg-inline--fa {
					margin: 0;
				}
			}

			.mini-wrapper {
				justify-content: center;
			}
		}
	}
}
</style>
