import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import configureStore from './app/store/configureStore';
import {
    SCREEN_NAMES,
    BUTTON_NAMES,
    AuthScreen,
    MainScreen,
    SideBarScreen,
    ProfileScreen,
    SettingsScreen,
} from './app/screens';

const store = configureStore();

Navigation.registerComponentWithRedux(SCREEN_NAMES.authScreen, () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux(SCREEN_NAMES.mainScreen, () => MainScreen, Provider, store);
Navigation.registerComponentWithRedux(SCREEN_NAMES.profileScreen, () => ProfileScreen, Provider, store);
Navigation.registerComponentWithRedux(SCREEN_NAMES.settingsScreen, () => SettingsScreen, Provider, store);
Navigation.registerComponent(SCREEN_NAMES.sideBarScreen, () => SideBarScreen);

Navigation.events().registerAppLaunchedListener(() => goToLoginScreen());

const renderMainLeft = () => ({
    component: {
        name: SCREEN_NAMES.sideBarScreen,
        passProps: {
            onLogOut: goToLoginScreen
        },
    },
})

const renderMainCenter = ([menuIcon, addItemIcon]) => ({
    stack: {
        children: [{
            component: {
                id: SCREEN_NAMES.mainScreen,
                name: SCREEN_NAMES.mainScreen,
                options: {
                    topBar: {
                        leftButtons: [
                            {
                                id: BUTTON_NAMES.sideBarToggleButton,
                                icon: menuIcon,
                            }
                        ],
                        rightButtons: [
                            {
                                id: BUTTON_NAMES.quickActionButton,
                                icon: addItemIcon,
                            },
                        ],
                    },
                },
                passProps: {
                    text: 'initial load'
                },
            },
        }]
    }
})

export const goToLoginScreen = () => {
    Navigation.setRoot({
        root: {
            component: {
                id: SCREEN_NAMES.authScreen,
                name: SCREEN_NAMES.authScreen,
                passProps: {
                    goToMainScreen,
                }
            },
        }
    });
}

export const goToMainScreen = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30),
        Icon.getImageSource(Platform.OS === 'android' ? 'md-add-circle' : 'ios-add-circle', 30),
    ]).then((icons) => {
        Navigation.setRoot({
            root: {
                sideMenu: {
                    left: renderMainLeft(),
                    center: renderMainCenter(icons),
                },
            },
        });
    })
}
