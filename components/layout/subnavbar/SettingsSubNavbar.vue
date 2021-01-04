<template>
	<i-navbar
		id="manage-sub-navbar"
		class="sub-navbar"
		fluid :collapse="false"
	>
		<i-navbar-items>
			<i-nav>
				<i-nav-item :to="localePath({ name: 'settings-notifications' })">
					{{ $t('settings.subnavbar.notifications') }}
				</i-nav-item>
				<i-nav-item :to="localePath({ name: 'settings-logging' })">
					{{ $t('settings.subnavbar.logging') }}
				</i-nav-item>
				<i-nav-item :to="localePath({ name: 'settings-license' })">
					{{ $t('settings.subnavbar.license') }}
				</i-nav-item>
				<i-nav-item :to="localePath({ name: 'settings-backup' })">
					{{ $t('settings.subnavbar.backup') }}
				</i-nav-item>
				<i-nav-item :to="localePath({ name: 'settings-maintenance' })">
					{{ $t('settings.subnavbar.maintenance') }}
				</i-nav-item>
				<i-nav-item :to="localePath({ name: 'settings-appliance' })">
					{{ $t('settings.subnavbar.appliance') }}
				</i-nav-item>
				<i-nav-item v-if="!isKubernetes" :to="localePath({ name: 'settings-patching' })">
					{{ $t('settings.subnavbar.patching') }}
				</i-nav-item>
				<i-nav-item :to="localePath({ name: 'settings-tls-configuration' })">
					{{ $t('settings.subnavbar.tls') }}
				</i-nav-item>
			</i-nav>
		</i-navbar-items>
	</i-navbar>
</template>

<script>
export default {
	name: 'SettingsSubNavbar',
	props: {
		director: {
			type: String,
			default: 'appliance',
		},
		settings: {
			type: Object,
			default: () => null,
		},
	},
	computed: {
		isKubernetes () {
			return this.director === 'kubernetes';
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

#manage-sub-navbar {
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
