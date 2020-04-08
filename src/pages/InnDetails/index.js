import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import ImageSlider from 'react-native-image-slider';

const images = ['https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large',]

export default function InnDetails(){
    return (
        <View style={styles.container}>
            <View style={styles.imageSliderView}>                  
                <ImageSlider
                    style={styles.imageSlider}
                    images={images}
                    customSlide={({ index, item, style, width }) => (
                            <Image style={styles.cardImage} source={{uri: item}}/>
                      )}
                    customButtons={(position, move) => (
                    <View style={styles.pagination}>
                        {images.map((image, index) => {
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