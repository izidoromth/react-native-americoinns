import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import ImageSlider from 'react-native-image-slider';
import { ScrollView } from 'react-native-gesture-handler';

function AmenitieItem({icon,title}){
    return(
        <View style={styles.amenitieItem}>
            <Icon name={icon} size={15} color="black" style={styles.amenitiesLineIcon}/>
            <Text>{title}</Text>
        </View>
    );
}

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
            <View style={styles.innHeader}>
                <View style={styles.innInfo}>
                    <Text style={styles.innTitle}>{inn.name}</Text>
                    <Text style={styles.innAddress}> Ponta Verde, Maceio - AL</Text>
                </View>
                <Text style={styles.innDailyPrice}>R$ 98.00</Text>
            </View>
            <ScrollView style={styles.innDetails}>
                <View>
                    <View style={styles.featureHeader}>
                        <Icon name="book-open-page-variant" size={13} color="#313030"/>
                        <Text style={styles.featureTitle}>Descrição</Text>                    
                    </View>
                    <View style={styles.horizontalSeparator}/>
                    <Text style={styles.descriptionText}>   Localizado na Ponta Verde o quarto possui uma suíte com ar-condicionado e uma sacada com vista para o mar.</Text>
                </View>
                <View>
                    <View style={styles.featureHeader}>
                        <Icon name="assistant" size={15} color="#313030"/>
                        <Text style={styles.featureTitle}>Comodidades</Text>                    
                    </View>
                    <View style={styles.horizontalSeparator}/>
                    <FlatList 
                            style={styles.amenitiesList}
                            data={[{icon: "arrow-down", title: "Ar-condicionado"},{icon: "arrow-down", title: "Piscina"},{icon: "arrow-down", title: "Salão de jogos" },{icon: "arrow-down", title: "Wi-Fi" },{icon: "arrow-down", title: "Frigobar"}]}
                            renderItem={({item, index}) => 
                                        <AmenitieItem icon={item.icon}
                                                    title={item.title}/>}/>
                </View>  
            </ScrollView>                      
        </View>
    );
};