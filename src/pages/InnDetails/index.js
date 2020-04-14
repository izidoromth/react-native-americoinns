import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import ImageSlider from 'react-native-image-slider';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function AmenitieItem({icon,title}){
    return(
        <View style={styles.amenitieItem}>
            <Icon name={icon} size={15} color="black" style={styles.amenitiesLineIcon}/>
            <Text style={styles.amenitieText}>{title}</Text>
        </View>
    );
}

function ReviewLayout({reviewer}){
    return(
        <View style={styles.reviewLayout}>
            <Text style={styles.reviewNameText}>{reviewer.name}</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image style={styles.reviewPicture} source={{ uri: 'https://a0.muscache.com/im/pictures/79309304/d7cda214_original.jpg?aki_policy=xx_large'}}/>
                <View style={styles.reviewComment}>
                    <Text>* * * * *</Text>
                    <Text style={styles.reviewCommentText} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
            </View>
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
                <View style={styles.featureView}>
                    <View style={styles.featureHeader}>
                        <Icon name="book-open-page-variant" size={13} color="#313030"/>
                        <Text style={styles.featureTitle}>Descrição</Text>                    
                    </View>
                    <View style={styles.horizontalSeparator}/>
                    <Text style={styles.descriptionText}>   Localizado na Ponta Verde o quarto possui uma suíte com ar-condicionado e uma sacada com vista para o mar.</Text>
                </View>
                <View style={styles.featureView}>
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
                <View style={styles.featureView}>
                    <View style={styles.featureHeader}>
                        <Icon name="book-open-page-variant" size={13} color="#313030"/>
                        <Text style={styles.featureTitle}>Avaliações</Text>                    
                    </View>
                    <View style={styles.horizontalSeparator}/>
                    <FlatList
                            data={[{name: "Gustava Santaollo"},{ name: "Hideo Kojima"},{ name: "Zangado Games"}]}
                            renderItem={({item, index}) => 
                                <ReviewLayout
                                        reviewer={item}/>
                            }/>
                </View>  
            </ScrollView>
            <View style={styles.rentLayout}>
                <Text>Agende a data de sua preferência</Text>
                <TouchableOpacity style={styles.rentButton}>
                    <Text>Alugar</Text>
                </TouchableOpacity>
            </View>                      
        </View>
    );
};