<template>
	<i-layout id="default-layout">
		<Banner
			v-if="banner && banner.show"
			:title="banner && banner.title"
			:subtitle="banner && banner.subtitle"
		/>
		<i-layout-header
			id="layout-header" class="_padding-0"
			:class="{ 'with-banner': banner.show }"
		>
			<navbar />
		</i-layout-header>
		<i-layout vertical>
			<sidebar :class="{ 'with-banner': banner.show }" />
			<i-layout-content id="layout-content" :class="{ mini, collapsed, 'with-banner': banner.show }">
				<i-container fluid>
					<i-row>
						<i-column>
							<nuxt />
						</i-column>
					</i-row>
				</i-container>
			</i-layout-content>
		</i-layout>
	</i-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import {
	VIEW_MODULE,
	SIDEBAR_COLLAPSED,
	SIDEBAR_MINI,
	BANNER,
} from '@/store/view/constants';
import LayoutMixin from '@/mixins/LayoutMixin';

export default {
	name: 'DefaultLayout',
	mixins: [
		LayoutMixin,
	],
	computed: {
		...mapGetters(VIEW_MODULE, {
			collapsed: SIDEBAR_COLLAPSED,
			mini: SIDEBAR_MINI,
			banner: BANNER,
		}),
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";
@import "~@inkline/inkline/src/css/mixins";

html,
body,
#__nuxt,
#__layout {
	height: 100%;
}

#default-layout {
	height: 100%;

	#layout-header {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		z-index: 9999;

		&.with-banner {
			top: $spacer-3;
		}
	}

	.sidebar-wrapper {
		&.with-banner {
			top: $spacer-3;
		}
	}

	#layout-content {
		padding-top: $spacer-4;
		padding-bottom: $spacer;
		background: $body-background-light;

		> .container {
			padding-bottom: $spacer;
		}

		&.with-banner {
			padding-top: $spacer-7;
		}

		&.mini:not(.collapsed) {
			padding-left: $spacer-4;
		}

		@include breakpoint-up(lg) {
			padding-left: 269px;
		}
	}
}
</style>
