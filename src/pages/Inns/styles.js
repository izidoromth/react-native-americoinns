import { StyleSheet } from 'react-native'
import { hydrate } from 'react-dom';

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

    flatlist:{       
    },

    flatlistItem:{  
        marginBottom: 8, 
        backgroundColor: "#F5F1F1",
        borderRadius: 5,
        width: 350, 
        height: 225,
    },

    imageSlider:{
        borderRadius: 5,
        backgroundColor: "transparent"
    },

    cardImage:{
        width: 350, 
        height: 225,
        borderRadius: 5,
        backgroundColor: "#C5C4C8",
    },

    pagination:{
        position: "absolute",
        alignSelf: "center",
        flexDirection: "row",
    },

    dot:{
        margin: 6,
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "#C9C7C7",
        opacity: 0.5
    },

    dotSelected:{
        backgroundColor: '#FFFFFF',
        opacity: 0.8
    },

    itemBottomBar:{
        width: 350,
        height: 50,        
        bottom: 0,
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#F3EEEE55",        
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },

    cardText:{
        marginLeft: 20,
        marginRight: 15,
        color: '#2A2A2A',
        fontSize: 17,
    }

});