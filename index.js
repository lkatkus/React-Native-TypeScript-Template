import { Navigation } from "react-native-navigation";
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    SCREEN_NAMES,
    AuthScreen,
    MainScreen,
    SideBarScreen,
} from './app/screens';

Navigation.registerComponent(SCREEN_NAMES.authScreen, () => AuthScreen);
Navigation.registerComponent(SCREEN_NAMES.mainScreen, () => MainScreen);
Navigation.registerComponent(SCREEN_NAMES.sideBarScreen, () => SideBarScreen);

Navigation.events().registerAppLaunchedListener(() => {
    goToLoginScreen();
});

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
    ]).then(([menuIcon, addItemIcon]) => {
        Navigation.setRoot({
            root: {
                sideMenu: {
                    left: {
                        component: {                            
                            name: SCREEN_NAMES.sideBarScreen,
                        },
                    },
                    center: {
                        stack: {
                            children: [{
                                component: {
                                    id: SCREEN_NAMES.mainScreen,
                                    name: SCREEN_NAMES.mainScreen,
                                    options: {
                                        topBar: {
                                            leftButtons: [
                                                {
                                                    id: 'sideBarToggleButton',
                                                    icon: menuIcon,
                                                }
                                            ],
                                            rightButtons: [
                                                {
                                                    id: 'quickActionButton',
                                                    icon: addItemIcon,
                                                },
                                            ],
                                        },
                                    }
                                },
                            }]
                        },
                    },
                    right: {
                        component: {                            
                            name: SCREEN_NAMES.sideBarScreen,
                        },
                    },
                },
            },
        });
    })
}