import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    ContainerAllFilters: {
        marginLeft: 25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 30,
    },
    ContainerCardFilter: {
        display: "flex",
        alignItems: "center",
        marginRight: 20,
    },
    ContainerFilterSelected: {
        backgroundColor: "#A5A3FF",
        borderRadius: 7,
        width: 53,
        height: 51,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    ContainerCategory: {
        backgroundColor: "#FFF",
        borderRadius: 7,
        width: 53,
        height: 51,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    Category: {
        color: "rgba(0, 0, 0, 0.5)",
    },
    CategoryFilterSelected: {
        color: "#4B47FF",
        fontWeight: "bold",
    }
})

export default style;