import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

interface Props {
    goToMainScreen: () => void;
}

export default class AuthScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>AuthScreen</Text>
                <Button
                    title="Go To Main"
                    onPress={(this.props.goToMainScreen)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
