import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {

}

export default class SideBarScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>SideBar!</Text>
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
