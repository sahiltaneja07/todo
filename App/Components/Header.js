import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from '../Styles/HeaderStyle';

export class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>TODOS</Text>
            </View>
        );
    }
}
