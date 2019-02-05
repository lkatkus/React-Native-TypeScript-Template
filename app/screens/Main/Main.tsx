import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, View } from 'react-native';

import { BUTTON_NAMES } from './../index';

import i18n from './../../i18n/i18n';

interface WithNavigation {
    componentId: string;
}

interface Props extends WithNavigation {

}

export default class MainScreen extends Component<Props> {
    constructor(props: Props) {
        super(props);

        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed(
        { buttonId } : { buttonId: string }
    ) {
        const {
            componentId,
        } = this.props;

        if (buttonId === BUTTON_NAMES.sideBarToggleButton) {
            Navigation.mergeOptions(componentId, {
                sideMenu: {
                    left: {
                        visible: true
                    }
                }
            });
        }

        if (buttonId === BUTTON_NAMES.quickActionButton) {
            // @ts-ignore
            alert('quickActionButton');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{ i18n('title') }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
});
