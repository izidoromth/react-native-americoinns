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
        padding: 15,
        flexDirection: "column",
    },

    featureView:{
        paddingBottom: 20,
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
        color: "#312F2F"
    },

    horizontalSeparator:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: "#A09898", 
        borderBottomWidth: 1,
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

    amenitieText:{
        color:"#312F2F"
    },

    amenitiesList:{
    },

    reviewLayout:{
        padding: 10,
        marginLeft: 25,
        marginRight: 25,
        borderBottomColor: "#A09898",
        borderBottomWidth: 1,
    },

    reviewPicture:{
        height: 46, 
        width: 46, 
        borderRadius: 23
    },

    reviewNameText:{
        padding: 5,
        color: "#252424"
    },

    reviewComment:{
        marginLeft: 10,
        flex: 1,
    },

    reviewCommentText:{
        color:"#312F2F"        
    },

    rentLayout:{
        width: width,
        height: 60, 
        backgroundColor: "#E9E5E5", 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    rentButton:{
        width: 100, 
        height: 40, 
        borderRadius: 20, 
        backgroundColor: "#FAC918", 
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 1,        
        elevation: 24,
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