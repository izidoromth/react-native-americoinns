import { StyleSheet } from 'react-native'

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

    itemBottomBar:{
        width: 350,
        height: 50,        
        bottom: 0,
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#F3EEEEAA",        
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },

    cardText:{
        marginLeft: 20,
        marginRight: 15,
        color: '#313030',
        fontSize: 17,
    }

});