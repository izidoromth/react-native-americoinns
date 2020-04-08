import { StyleSheet } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor: "#F5F1F1",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    header:{
        backgroundColor: "#F5F1F1", 
        alignSelf: "stretch"
    },

    topTitle:{
        marginTop: 20,
        marginBottom: 10,
        fontSize: 40,
        color: "#4D4D4D",
        fontStyle: "italic",
        alignSelf: "center"
    },

    imageSliderView:{
        marginTop: Expo.Constants.statusBarHeight
    },

    imageSlider:{
        borderRadius: 5,
        backgroundColor: "transparent"
    },

    cardImage:{
        width: width, 
        height: 225,
        backgroundColor: "#C5C4C8",
    },

    pagination:{
        position: "absolute",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },

    dot:{
        margin: 4,
        height: 6,
        width: 6,
        borderRadius: 4,
        backgroundColor: "#C9C7C7",
        opacity: 0.5
    },

    dotSelected:{
        height: 7,
        width: 7,
        backgroundColor: '#FFFFFF',
        opacity: 0.8
    },

});