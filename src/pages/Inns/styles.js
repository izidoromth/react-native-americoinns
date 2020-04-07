import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor: "#DFDEF4",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    header:{
        backgroundColor: "#C5C4C8", 
        alignSelf: "stretch"
    },

    topTitle:{
        marginTop: 20,
        marginBottom: 10,
        fontSize: 40,
        color: "#FFF",
        fontStyle: "italic",
        fontWeight: "bold",
        alignSelf: "center"
    },

    flatlist:{    
    },

    flatlistItem:{
        marginTop: 20,
        backgroundColor: "#DFDEF4",
        borderRadius: 10
    },

    carousel:{
        backgroundColor: "#C5C4C8",
        overlayColor: "#C5C4C8",
        flexDirection: 'row'
    },

    carouselImage:{
        width: 350, 
        height: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: "#C5C4C8",
    },

    itemBottomBar:{
        height: 40,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#C5C4C8",        
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },

    renderItemText:{
        marginLeft: 15,
        marginRight: 15,
        color: "#FFF",
        shadowRadius: 5,
        shadowColor: "#000",
        fontWeight: "bold",
        fontSize: 17,
        fontFamily: ""
    }

});