import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text
}
    from 'react-native';

import { SearchBar } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
export default class LibraryScreen extends Component {
    static navigationOptions = {
        title: 'Links',
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>내용 넣기!</Text>
                <SearchBar
                    onChangeText={someMethod}
                    placeholder='Type Here...'
                />

                <SearchBar
                    noIcon
                    onChangeText={someMethod}
                    placeholder='Type Here...'
                />

                <SearchBar
                    round
                    onChangeText={someMethod}
                    placeholder='Type Here...'
                />

                <SearchBar
                    lightTheme
                    onChangeText={someMethod}
                    placeholder='Type Here...'
                />
            </ScrollView>
        );
    }
};