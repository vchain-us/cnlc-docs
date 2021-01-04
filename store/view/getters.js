import {
	MOBILE,
	SIDEBAR_MINI,
	SIDEBAR_COLLAPSED,
	BANNER,
	BREADCRUMBS,
	PATCH_RESTARTING,
	FREEZE,
	FREEZE_MODAL,
	IS_BACKUP_FREEZE,
	FREEZE_TYPES,
} from './constants';

export default {
	[MOBILE](state) {
		return state.mobile;
	},
	[BANNER](state) {
		return state.banner;
	},
	[SIDEBAR_MINI](state) {
		return state.sidebar.mini;
	},
	[BREADCRUMBS](state) {
		return state.breadcrumbs;
	},
	[SIDEBAR_COLLAPSED](state) {
		return state.sidebar.collapsed;
	},
	[PATCH_RESTARTING](state) {
		return state.patchRestarting;
	},
	[FREEZE](state) {
		return state.freeze;
	},
	[FREEZE_MODAL](state) {
		return state.freezeModal;
	},
	[IS_BACKUP_FREEZE](state) {
		return state.freeze === FREEZE_TYPES.BACKUP;
	},
};
