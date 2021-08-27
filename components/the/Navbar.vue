<template>
	<i-navbar
		id="navbar" fluid
		:collapse="false" :class="{ mini }"
	>
		<i-navbar-brand :to="localePath({ name: 'index' })">
			<ui-logo :size="mini ? 'normal' : 'small'" :icon="mini" />
		</i-navbar-brand>
		<i-hamburger-menu
			class="_visible-md-and-down" :active="collapsed"
			@click="onCollapse"
		/>
	</i-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { VIEW_MODULE, SET_SIDEBAR, SIDEBAR_COLLAPSED, SIDEBAR_MINI } from '~/store/view/constants';

export default {
	data: () => ({
		user: {
			username: 'Admin',
		},
	}),
	computed: {
		...mapGetters(VIEW_MODULE, {
			collapsed: SIDEBAR_COLLAPSED,
			mini: SIDEBAR_MINI,
		}),
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setSidebar: SET_SIDEBAR,
		}),
		onCollapse (value) {
			this.setSidebar({ collapsed: !this.collapsed });
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

@keyframes blink-animation {
	50% {
		opacity: 0;
	}
}

#navbar {
	min-height: $spacer-4;
	padding: 0;
	background: white;
	border-bottom: 1px solid $border-color-light;
	z-index: 999;

	.container {
		padding-left: 0;
		min-height: 100%;
	}

	.brand {
		padding: 0 0 0 1rem;
		width: 16.8rem;
		border-right: 1px solid $border-color-light;
		display: flex;
		align-items: center;
	}

	.dropdown {
		.item {
			&:hover {
				cursor: pointer;
			}
		}
	}

	.alerts-panel {
		.alerts-panel-scrollable {
			max-height: 280px;
			width: 280px;
			overflow: auto;
		}

		.alerts-panel-show-all {
			border-top: 1px solid $border-color-light;
			padding-bottom: 0;
		}
	}

	.notifications-bell {
		.has-new-icon {
			background: $color-danger;
			height: 8px;
			width: 8px;
			border-radius: 100%;
			position: absolute;
			top: 5px;
			right: 10px;
			animation: blink-animation 1s infinite;
		}
	}

	&.mini {
		.brand {
			width: 64px;
			padding: $spacer-1-2;
		}
	}
}
</style>
