import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Inns(){

    const navigation = useNavigation();
    
    const [inns, setInns] = 
        useState([{id: '1', innName: 'MaceioInn', imageIndex: 0, images: ['https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large']}, 
                  {id: '2', innName: 'FortalezaInn', imageIndex: 0, images: ['https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large']}, 
                  {id: '3', innName: 'SalvadorInn', imageIndex: 0, images: ['https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large']}, 
                  {id: '4', innName: 'RioInn', imageIndex: 0, images: ['https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large', 'https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large']}]);          

    function itemPressed(){
        navigation.navigate('InnDetails');
    }

    function renderItem({item,index}){

        function carouselRender({item}){
            return (
                <TouchableOpacity 
                    activeOpacity={1}
                    key={item.id}
                    style={styles.flatlistItem}
                    onPress={itemPressed}>
                        <Image style={styles.cardImage} source={{uri: item}}/>
                </TouchableOpacity>
            )
        }

        function handleImageIndex(_imageIndex){
            var a = inns.slice(0);
            a[index].imageIndex = _imageIndex
            setInns(a);
        }

        return (       
            <View style={styles.flatlistItem}>                  
                <Carousel                         
                    layout={'tinder'}
                    ref={'carousel'}
                    style={styles.carousel}
                    data={item.images}
                    layoutCardOffset={0}
                    renderItem={carouselRender}
                    onBeforeSnapToItem={handleImageIndex}
                    sliderWidth={350}
                    itemWidth={350}/>                
                <View style={styles.itemBottomBar}>
                    <Text style={styles.cardText}>{item.innName}</Text>
                    <Text style={styles.cardText}>Ver detalhes</Text>                     
                </View>                  
                <Pagination
                    dotsLength={getDotsLength(item.images.length)}
                    activeDotIndex={item.imageIndex}
                    containerStyle={styles.pagination}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.topTitle}>Américo Inns</Text>
            </View>
            <FlatList style={styles.flatlist} showsVerticalScrollIndicator={false}
                data={inns}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                sliderWidth={350}
                sliderHeight={350}
                itemHeight={350}
                itemWidth={350}/>
        </View>
    );

    function getDotsLength(length){
        if (length > 4 ){
            return 4;
        }
        else{
            return length;
        }
    }
};