export const VIEW_MODULE = 'view';

export const SET_MOBILE = 'setMobile';
export const SET_BANNER = 'setBanner';
export const SET_SIDEBAR = 'setSidebar';
export const SET_BREADCRUMBS = 'setBreadcrumbs';
export const ADD_BREADCRUMBS = 'addBreadcrumbs';
export const SET_PATCH_RESTARTING = 'setPatchRestarting';
export const SET_FREEZE = 'setFreeze';
export const SET_FREEZE_MODAL = 'setFreezeModal';

export const BANNER = 'banner';
export const MOBILE = 'mobile';
export const SIDEBAR_MINI = 'sidebarMini';
export const SIDEBAR_COLLAPSED = 'sidebarCollapsed';
export const BREADCRUMBS = 'breadcrumbs';
export const PATCH_RESTARTING = 'patchRestarting';
export const FREEZE = 'freeze';
export const FREEZE_MODAL = 'freezeModal';
export const IS_BACKUP_FREEZE = 'isBackupFreeze';

export const FREEZE_TYPES = {
	BACKUP: 'BACKUP',
};

export const BACKUP_FREEZE_PHASES = {
	INITIALIZATION: 'Initialization',
	IMMUDB_BACKUP: 'Immudb backup',
	POSTGRES_BACKUP: 'Postgres backup',
	GENERATING_GLOBAL_BACKUP_FILE: 'Generating global backup file',
};
