import { StyleSheet } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor: "#F5F1F1",
        flex: 1,
        flexDirection: "column",        
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },

    innHeader:{
        width: width,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#C6C5CA"
    },

    innInfo:{
        flexDirection: "column"
    },

    innTitle:{
        fontSize: 30,
        color: "#313030"
    },

    innAddress:{
        color: "#5D5A5A"
    },

    innDailyPrice:{
        fontSize: 30,
        color: "#181818"
    },

    innDetails:{
        paddingTop: 15,
        flexDirection: "column",
    },

    featureHeader:{
        marginLeft: 15,
        flexDirection: 'row', 
        alignItems: 'center'
    },

    featureTitle:{        
        paddingLeft: 10,
        fontSize: 17,
        color: "#49494B"
    },

    descriptionText:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        color: "#6D6D71"
    },

    horizontalSeparator:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: "#A09898", 
        borderBottomWidth: 1, 
        width: width - 30
    },

    amenitiesLineIcon:{
        margin: 5,
    },

    amenitieItem:{
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginLeft: 10,
    },

    amenitiesList:{
        paddingBottom: 30,
    },

    imageSliderView:{
        marginTop: Expo.Constants.statusBarHeight,
        height: 225,
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