import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Picker } from 'react-native-picker-dropdown'
import { Ionicons } from '@expo/vector-icons';

export default class DropList extends Component {
    constructor(props) {
        super(props);
        this.state = { loginType: 'educator' }
        this.onValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange(loginType) {
        this.setState({ loginType })
    }

    render() {
        return (
            <View style={styles.container}>
                <Ionicons name="person-outline" size={24} color="white" style={styles.icon} />

                <Picker
                    style={styles.picker}
                    prompt="Choose your login profile"
                    selectedValue={this.state.loginType}
                    onValueChange={this.onValueChange}
                    mode="dropdown"
                    textStyle={styles.pickerText}
                >
                    <Ionicons name="person-outline" size={24} color="white" />

                    <Picker.Item label="Educator" value="educator" />
                    <Picker.Item label="Employee" value="employee" />
                    <Picker.Item label="Parent" value="parent" />
                    <Picker.Item label="Student" value="student" />
                </Picker>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ffa500',
        alignSelf: 'center'


    },
    icon: {
        paddingLeft: 10,
        paddingTop: 5,
    },
    picker: {
        paddingLeft: 40,
        height: 20,
        top: -10,

    },
    pickerText: {
        flex: 0.5,
        top: -8,
        color: '#FFFFFF',
        fontSize: 22,
        textAlign: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => DropList);
