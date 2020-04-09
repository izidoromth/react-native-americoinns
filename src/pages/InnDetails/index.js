import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import ImageSlider from 'react-native-image-slider';

export default function InnDetails({route, navigation}){

    const { inn } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.imageSliderView}>                  
                <ImageSlider
                    style={styles.imageSlider}
                    images={inn.images}
                    customSlide={({ index, item, style, width }) => (
                            <Image style={styles.cardImage} source={{uri: item}}/>
                      )}
                    customButtons={(position, move) => (
                    <View style={styles.pagination}>
                        {inn.images.map((image, index) => {
                        return (
                            <View style={[styles.dot, position === index && styles.dotSelected]}></View>
                        );
                        })}
                    </View>
                    )}/>              
            </View>
        </View>
    );
};