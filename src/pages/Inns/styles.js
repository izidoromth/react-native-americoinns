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

    flatlist:{        
    },

    flatlistItem:{        
        marginBottom: 15,  
        backgroundColor: "#F5F1F1",
        borderRadius: 5
    },

    carousel:{
        borderRadius: 5,
        backgroundColor: "#C5C4C8",
        overlayColor: "#C5C4C8",
        flexDirection: 'row'
    },

    carouselImage:{
        width: 340, 
        height: 225,
        borderRadius: 5,
        backgroundColor: "#C5C4C8",
    },

    itemBottomBar:{
        width: 350,
        height: 50,        
        bottom: 15,
        position: 'absolute',
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#F3EEEE55",        
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },

    renderItemText:{
        marginLeft: 20,
        marginRight: 15,
        color: '#2A2A2A',
        fontSize: 17,
    }

});