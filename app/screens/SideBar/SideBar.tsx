import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, View } from 'react-native';

import { SCREEN_NAMES } from './../index';

import i18n from './../../i18n/i18n';

interface Props {
    onLogOut: () => void;
}

export default class SideBarScreen extends Component<Props> {
    onClickProfile = () => {
        this.goToScreen(SCREEN_NAMES.profileScreen);
    }

    onClickSettings = () => {
        this.goToScreen(SCREEN_NAMES.settingsScreen);
    }

    onClickLogOut = () => {
        this.props.onLogOut();
    }

    goToScreen = (screenName: string) => {
        Navigation.mergeOptions(SCREEN_NAMES.mainScreen, {
            sideMenu: {
                left: {
                    visible: false
                }
            }
        });

        Navigation.push(SCREEN_NAMES.mainScreen, {
            component: {
                name: screenName,
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{ i18n('title') }</Text>
                <Text onPress={this.onClickProfile}>{ i18n('profile') }</Text>
                <Text onPress={this.onClickSettings}>{ i18n('settings') }</Text>
                <Text onPress={this.onClickLogOut}>{ i18n('logout') }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
