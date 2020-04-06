import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';

export default function Inns(){
    
    const inns = [{innName: 'MaceioInn', images: ['https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large']}, 
                  {innName: 'FortalezaInn', images: ['https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large']}, 
                  {innName: 'SalvadorInn', images: ['https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large']}, 
                  {innName: 'RioInn', images: ['https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large', 'https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large']}]
                

    function renderItem({item,index}){

        function carouselRender({item}){
            return (
                <Image style={styles.carouselImage} source={{uri: item}}/>
            )
        }

        return (
          <View style={styles.flatlistItem}>
            <Carousel layout={'default'}
                style={styles.carousel}
                data={item.images}
                renderItem={carouselRender}
                sliderWidth={350}
                itemWidth={350}/>
            <TouchableOpacity style={styles.renderItemTouchable}>
                <Text style={styles.renderItemText}>{item.innName}</Text>
                <Text style={styles.renderItemText}>Ver detalhes</Text>
            </TouchableOpacity>
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
                sliderWidth={350}
                sliderHeight={350}
                itemHeight={350}
                itemWidth={350}/>
        </View>
    );
};