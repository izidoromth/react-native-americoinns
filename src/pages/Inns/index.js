import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Inns(){

    const navigation = useNavigation();
    
    const inns = [{id: '1', innName: 'MaceioInn', images: ['https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large']}, 
                  {id: '2', innName: 'FortalezaInn', images: ['https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large']}, 
                  {id: '3', innName: 'SalvadorInn', images: ['https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large']}, 
                  {id: '4', innName: 'RioInn', images: ['https://a0.muscache.com/im/pictures/a612c8ce-bc1b-48eb-8e99-e5c5d85049b9.jpg?aki_policy=xx_large', 'https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817824/0b506e6c_original.jpg?aki_policy=xx_large','https://a0.muscache.com/im/pictures/62817947/2bc83a52_original.jpg?aki_policy=xx_large']}]
                
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
                        <Image style={styles.carouselImage} source={{uri: item}}/>
                </TouchableOpacity>
            )
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
                    sliderWidth={350}
                    itemWidth={340}/>
                <View style={styles.itemBottomBar}>
                    <Text style={styles.renderItemText}>{item.innName}</Text>
                    <Text style={styles.renderItemText}>Ver detalhes</Text>
                </View>
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
};