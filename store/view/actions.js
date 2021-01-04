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
	[SET_MOBILE]({ commit }, payload) {
		commit(SET_MOBILE, payload);
	},
	[SET_BANNER]({ commit }, payload) {
		commit(SET_BANNER, payload);
	},
	[SET_SIDEBAR]({ commit }, payload) {
		commit(SET_SIDEBAR, payload);
	},
	[SET_BREADCRUMBS]({ commit }, payload) {
		commit(SET_BREADCRUMBS, payload);
	},
	[ADD_BREADCRUMBS]({ commit }, payload) {
		commit(ADD_BREADCRUMBS, payload);
	},
	[SET_PATCH_RESTARTING]({ commit }, payload) {
		commit(SET_PATCH_RESTARTING, payload);
	},
	[SET_FREEZE]({ commit }, payload) {
		commit(SET_FREEZE, payload);
	},
	[SET_FREEZE_MODAL]({ commit }, payload) {
		commit(SET_FREEZE_MODAL, payload);
	},
};
