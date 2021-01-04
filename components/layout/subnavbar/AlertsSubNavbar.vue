<template>
	<i-navbar
		id="alerts-sub-navbar"
		class="sub-navbar"
		fluid :collapse="false"
	>
		<i-navbar-items>
			<i-nav>
				<i-nav-item :to="localePath({ name: 'alerts-active-messages' })">
					{{ $t('alerts.active.title') }}
				</i-nav-item>
				<i-nav-item :to="localePath({ name: 'alerts-acknowledged-messages' })">
					{{ $t('alerts.acknowledged.title') }}
				</i-nav-item>
			</i-nav>
		</i-navbar-items>
	</i-navbar>
</template>

<script>
export default {
	name: 'AlertsSubNavbar',
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

#alerts-sub-navbar {
	height: $spacer-3;
	top: $spacer-5;

	&.navbar.sub-navbar {
		.nav {
			.item {
				height: $spacer-3;
				font-size: 1rem;
				border-width: 4px;
			}
		}
	}
}
</style>
