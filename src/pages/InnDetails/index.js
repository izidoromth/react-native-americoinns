import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function InnDetails(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.topTitle}>Américo Inns</Text>
            </View>
        </View>
    );
};