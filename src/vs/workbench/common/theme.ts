/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import nls = require('vs/nls');
import { registerColor, editorBackground, highContrastBorder } from 'vs/platform/theme/common/colorRegistry';
import { IDisposable, Disposable, dispose } from 'vs/base/common/lifecycle';
import { IThemeService, ITheme } from 'vs/platform/theme/common/themeService';
import { Color, RGBA } from 'vs/base/common/color';

// < --- Workbench --- >

export const WINDOW_FOREGROUND = registerColor('windowForeground', {
	dark: '#CCCCCC',
	light: '#6C6C6C',
	hc: '#FFFFFF'
}, nls.localize('windowForeground', "Overall window foreground color. This color is only used if not overridden by a component."));



// < --- Tabs --- >

export const TABS_CONTAINER_BACKGROUND = registerColor('tabsContainerBackground', {
	dark: '#252526',
	light: '#F3F3F3',
	hc: null
}, nls.localize('tabsContainerBackground', "Background color of the tabs container. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const NO_TABS_CONTAINER_BACKGROUND = registerColor('noTabsContainerBackground', {
	dark: editorBackground,
	light: editorBackground,
	hc: editorBackground
}, nls.localize('noTabsContainerBackground', "Background color of the editor title container when no tabs are enabled."));

export const ACTIVE_TAB_BACKGROUND = registerColor('activeTabBackground', {
	dark: editorBackground,
	light: editorBackground,
	hc: editorBackground
}, nls.localize('activeTabBackground', "Active tab background color. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const INACTIVE_TAB_BACKGROUND = registerColor('inactiveTabBackground', {
	dark: '#2D2D2D',
	light: '#ECECEC',
	hc: null
}, nls.localize('inactiveTabBackground', "Inactive tab background color. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const ACTIVE_TAB_ACTIVE_GROUP_FOREGROUND = registerColor('activeTabActiveGroupForeground', {
	dark: Color.white,
	light: Color.fromRGBA(new RGBA(51, 51, 51)),
	hc: Color.white
}, nls.localize('activeTabActiveGroupForeground', "Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const ACTIVE_TAB_INACTIVE_GROUP_FOREGROUND = registerColor('activeTabInactiveGroupForeground', {
	dark: Color.white.transparent(0.5),
	light: Color.fromRGBA(new RGBA(51, 51, 51)).transparent(0.7),
	hc: Color.white
}, nls.localize('activeTabInactiveGroupForeground', "Active tab foreground color in an inactive group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const INACTIVE_TAB_ACTIVE_GROUP_FOREGROUND = registerColor('inactiveTabActiveGroupForeground', {
	dark: Color.white.transparent(0.5),
	light: Color.fromRGBA(new RGBA(51, 51, 51)).transparent(0.5),
	hc: Color.white
}, nls.localize('inactiveTabActiveGroupForeground', "Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const INACTIVE_TAB_INACTIVE_GROUP_FOREGROUND = registerColor('inactiveTabInactiveGroupForeground', {
	dark: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.5).transparent(0.5),
	light: Color.fromRGBA(new RGBA(51, 51, 51)).transparent(0.5).transparent(0.7),
	hc: Color.white
}, nls.localize('inactiveTabInactiveGroupForeground', "Inactive tab foreground color in an inactive group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_BORDER = registerColor('tabBorder', {
	dark: '#252526',
	light: '#F3F3F3',
	hc: highContrastBorder
}, nls.localize('tabBorder', "Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));



// < --- Editors --- >

export const EDITOR_GROUP_BORDER_COLOR = registerColor('editorGroupBorder', {
	dark: '#444444',
	light: '#E7E7E7',
	hc: highContrastBorder
}, nls.localize('editorGroupBorder', "Color to separate multiple editor groups from each other. Editor groups are the containers of editors."));

export const EDITOR_GROUP_BACKGROUND = registerColor('editorGroupBackground', {
	dark: '#2D2D2D',
	light: '#ECECEC',
	hc: null
}, nls.localize('editorGroupBackground', "Backgrouund color of an editor group. Editor groups are the containers of editors."));

export const EDITOR_DRAG_AND_DROP_BACKGROUND = registerColor('editorDragAndDropBackground', {
	dark: Color.fromRGBA(new RGBA(83, 89, 93)).transparent(0.5),
	light: Color.fromRGBA(new RGBA(51, 153, 255)).transparent(0.18),
	hc: null
}, nls.localize('editorDragAndDropBackground', "Background color when dragging editors around."));

export const EDITOR_SIDE_BY_SIDE_BORDER = registerColor('editorSideBySideBorder', {
	dark: '#000000',
	light: '#DDDDDD',
	hc: null
}, nls.localize('editorSideBySideBorder', "Border color to separate the details from the master side for side by side editors."));


// < --- Panels --- >

export const PANEL_BACKGROUND = registerColor('panelBackground', {
	dark: editorBackground,
	light: editorBackground,
	hc: editorBackground
}, nls.localize('panelBackground', "Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_BORDER_TOP_COLOR = registerColor('panelBorderTopColor', {
	dark: Color.fromRGBA(new RGBA(128, 128, 128)).transparent(0.35),
	light: Color.fromRGBA(new RGBA(128, 128, 128)).transparent(0.35),
	hc: highContrastBorder
}, nls.localize('panelBorderTopColor', "Panel border color on the top separating to the editor. Panels are shown below the editor area and contain views like output and integrated terminal."));



// < --- Status --- >

export const STATUS_BAR_FOREGROUND = registerColor('statusBarForeground', {
	dark: '#FFFFFF',
	light: '#FFFFFF',
	hc: '#FFFFFF'
}, nls.localize('statusBarForeground', "Status bar foreground color. The status bar is shown in the bottom of the window"));

export const STATUS_BAR_BACKGROUND = registerColor('statusBarBackground', {
	dark: '#007ACC',
	light: '#007ACC',
	hc: null
}, nls.localize('statusBarBackground', "Standard status bar background color. The status bar is shown in the bottom of the window"));

export const STATUS_BAR_NO_FOLDER_BACKGROUND = registerColor('statusBarNoFolderBackground', {
	dark: '#68217A',
	light: '#68217A',
	hc: null
}, nls.localize('statusBarNoFolderBackground', "Status bar background color when no folder is opened. The status bar is shown in the bottom of the window"));

export const STATUS_BAR_ITEM_ACTIVE_BACKGROUND = registerColor('statusBarItemActiveBackground', {
	dark: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.18),
	light: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.18),
	hc: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.18)
}, nls.localize('statusBarItemActiveBackground', "Status bar item background color when clicking. The status bar is shown in the bottom of the window"));

export const STATUS_BAR_ITEM_HOVER_BACKGROUND = registerColor('statusBarItemHoverBackground', {
	dark: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12),
	light: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12),
	hc: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12)
}, nls.localize('statusBarItemHoverBackground', "Status bar item background color when hovering. The status bar is shown in the bottom of the window"));

export const STATUS_BAR_INFO_ITEM_BACKGROUND = registerColor('statusBarInfoItemBackground', {
	dark: '#388A34',
	light: '#388A34',
	hc: '#3883A4'
}, nls.localize('statusBarInfoItemBackground', "Status bar info item background color. The status bar is shown in the bottom of the window"));

export const STATUS_BAR_INFO_ITEM_HOVER_BACKGROUND = registerColor('statusBarInfoItemHoverBackground', {
	dark: '#369432',
	light: '#369432',
	hc: '#369432'
}, nls.localize('statusBarInfoItemHoverBackground', "Status bar info item background color when hovering. The status bar is shown in the bottom of the window"));



// < --- Activity Bar --- >

export const ACTIVITY_BAR_BACKGROUND = registerColor('activityBarBackground', {
	dark: '#333333',
	light: '#2C2C2C',
	hc: '#000000'
}, nls.localize('activityBarBackground', "Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));



// < --- Side Bar --- >

export const SIDE_BAR_BACKGROUND = registerColor('sideBarBackground', {
	dark: '#252526',
	light: '#F3F3F3',
	hc: '#000000'
}, nls.localize('sideBarBackground', "Side bar background color. The side bar is the container for views like explorer and search."));

export const SIDE_BAR_TITLE_FOREGROUND = registerColor('sideBarTitleForeground', {
	dark: '#BBBBBB',
	light: '#6f6f6f',
	hc: '#FFFFFF'
}, nls.localize('sideBarTitleForeground', "Side bar title foreground color. The side bar is the container for views like explorer and search."));



// < --- Title Bar --- >

export const TITLE_BAR_ACTIVE_FOREGROUND = registerColor('titleBarActiveForeground', {
	dark: '#CCCCCC',
	light: '#333333',
	hc: '#FFFFFF'
}, nls.localize('titleBarActiveForeground', "Title bar foreground when the window is active. Note that this color is currently only supported on macOS."));

export const TITLE_BAR_INACTIVE_FOREGROUND = registerColor('titleBarInactiveForeground', {
	dark: Color.fromRGBA(new RGBA(204, 204, 204)).transparent(0.6),
	light: Color.fromRGBA(new RGBA(51, 51, 51)).transparent(0.6),
	hc: null
}, nls.localize('titleBarInactiveForeground', "Title bar foreground when the window is inactive. Note that this color is currently only supported on macOS."));

export const TITLE_BAR_ACTIVE_BACKGROUND = registerColor('titleBarActiveBackground', {
	dark: '#3C3C3C',
	light: '#DDDDDD',
	hc: '#000000'
}, nls.localize('titleBarActiveBackground', "Title bar background when the window is active. Note that this color is currently only supported on macOS."));

export const TITLE_BAR_INACTIVE_BACKGROUND = registerColor('titleBarInactiveBackground', {
	dark: Color.fromRGBA(new RGBA(60, 60, 60)).transparent(0.6),
	light: Color.fromRGBA(new RGBA(221, 221, 221)).transparent(0.6),
	hc: null
}, nls.localize('titleBarInactiveBackground', "Title bar background when the window is inactive. Note that this color is currently only supported on macOS."));

/**
 * Base class for all themable workbench components.
 */
export class Themable extends Disposable {
	private _toUnbind: IDisposable[];
	private theme: ITheme;

	constructor(
		protected themeService: IThemeService
	) {
		super();

		this._toUnbind = [];
		this.theme = themeService.getTheme();

		// Hook up to theme changes
		this._toUnbind.push(this.themeService.onThemeChange(theme => this.onThemeChange(theme)));
	}

	protected get isHighContrastTheme(): boolean {
		return this.theme.type === 'hc';
	}

	protected get toUnbind() {
		return this._toUnbind;
	}

	protected onThemeChange(theme: ITheme): void {
		this.theme = theme;

		this.updateStyles();
	}

	protected updateStyles(): void {
		// Subclasses to override
	}

	protected getColor(id: string): string {
		const color = this.theme.getColor(id);

		return color ? color.toString() : null;
	}

	public dispose(): void {
		this._toUnbind = dispose(this._toUnbind);

		super.dispose();
	}
}
