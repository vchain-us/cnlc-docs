import {
	SET_MOBILE,
	SET_BANNER,
	SET_SIDEBAR,
	SET_BREADCRUMBS,
	ADD_BREADCRUMBS,
	SET_PATCH_RESTARTING,
	SET_FREEZE,
	SET_FREEZE_MODAL,
} from './constants';

export default {
	[SET_MOBILE](state, payload) {
		state.mobile = payload;
	},
	[SET_BANNER](state, payload) {
		state.banner = payload;
	},
	[SET_SIDEBAR](state, payload) {
		if (payload) {
			const { mini, collapsed } = payload;

			state.sidebar.mini = mini;
			state.sidebar.collapsed = collapsed;
		}
	},
	[SET_BREADCRUMBS](state, payload) {
		state.breadcrumbs = payload;
	},
	[ADD_BREADCRUMBS](state, payload) {
		state.breadcrumbs = [...state.breadcrumbs, ...payload];
	},
	[SET_PATCH_RESTARTING](state, payload) {
		state.patchRestarting = payload;
	},
	[SET_FREEZE](state, payload) {
		state.freeze = payload;
	},
	[SET_FREEZE_MODAL](state, payload) {
		state.freezeModal = payload;
	},
};
