import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
}

export default class ProfileScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileScreen</Text>
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
