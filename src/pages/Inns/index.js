import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';

import ImageSlider from 'react-native-image-slider';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

function CardItem({flatindex, innName, imageData, onSelect}){

    return (       
        <View style={styles.flatlistItem}>                  
            <ImageSlider
                style={styles.imageSlider}
                images={imageData}
                customSlide={({ index, item, style, width }) => (
                      <TouchableOpacity 
                        activeOpacity={1}
                        style={styles.flatlistItem}
                        onPress={() => onSelect(flatindex)}>
                            <Image style={styles.cardImage} source={{uri: item}}/>
                        </TouchableOpacity>
                  )}
                customButtons={(position, move) => (
                <View style={styles.pagination}>
                    {imageData.map((image, index) => {
                    return (
                        <View style={[styles.dot, position === index && styles.dotSelected]}></View>
                    );
                    })}
                </View>
                )}/>               
            <View style={styles.itemBottomBar}>
                <Text style={styles.cardText}>{innName}</Text>
                <Text style={styles.cardText}>Ver detalhes</Text>                     
            </View>               
        </View>
    )
}

export default function Inns(){ 
    
    const navigation = useNavigation();

    function itemPressed(index){
        navigation.navigate('InnDetails',{ inn : inns[index] });
    }    

    const [inns, setInns] = 
        useState([{id: '1', name: 'MaceioInn', images: ['https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large',]}, 
                  {id: '2', name: 'FortalezaInn', images: ['https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large']}, 
                  {id: '3', name: 'SalvadorInn', images: ['https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large']}, 
                  {id: '4', name: 'RioInn', images: ['https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large', 'https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large']}]);          


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>     
                <Text style={styles.topTitle}>Américo Inns</Text>
                <FlatList style={styles.flatlist} 
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={inns}
                    renderItem={({item, index}) => (
                        <CardItem
                            flatindex={index}
                            innName={item.name}
                            imageData={item.images}
                            onSelect={itemPressed}/>
                    )}
                    sliderWidth={350}
                    sliderHeight={350}
                    itemHeight={350}
                    itemWidth={350}/>
            </ScrollView>
        </View>
    );
};