const SCREEN_NAME_PREFIX = 'myApp';

import AuthScreen from './Auth/Auth';
import MainScreen from './Main/Main';
import ProfileScreen from './Profile/Profile';
import SettingsScreen from './Settings/Settings';
import SideBarScreen from './SideBar/SideBar';

export const SCREEN_NAMES = {
    authScreen: `${SCREEN_NAME_PREFIX}.AuthScreen`,
    mainScreen: `${SCREEN_NAME_PREFIX}.MainScreen`,
    profileScreen: `${SCREEN_NAME_PREFIX}.ProfileScreen`,
    settingsScreen: `${SCREEN_NAME_PREFIX}.SettingsScreen`,
    sideBarScreen: `${SCREEN_NAME_PREFIX}.SideBar`,
}

export const BUTTON_NAMES = {
    sideBarToggleButton: 'sideBarToggleButton',
    quickActionButton: 'quickActionButton',
}

export {
    AuthScreen,
    MainScreen,
    ProfileScreen,
    SettingsScreen,
    SideBarScreen,
}