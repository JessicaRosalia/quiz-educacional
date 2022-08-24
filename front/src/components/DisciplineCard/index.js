import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import style from "./style";

const DisciplineCard = ({questionList, handleFilteredQuestions}) => {

    const [filterSelected, setFilterSelected] = useState(0);
    
    const filterOptions = [
        {
            id: 0,
            label: "Todas",
            photo: require("../../assets/icons/subjects/categories.png")
        },
        {
            id: 1,
            label: "Ciência",
            photo: require("../../assets/icons/subjects/science.png")
        },
        {
            id: 2,
            label: "Geografia",
            photo: require("../../assets/icons/subjects/geography.png")
        },
        {
            id: 3,
            label: "História",
            photo: require("../../assets/icons/subjects/history.png")
        },
        {
            id: 4,
            label: "Matemática",
            photo: require("../../assets/icons/subjects/math.png")
        }
    ]

    const filterDiscipline = (option) => {
        setFilterSelected(option.id);

        let filterResult = [...questionList];

        if(option.id !== 0) {
            filterResult = questionList.filter((question) => {
                if(question?.questionCategoryId === option.id){
                    return {question};
                }
            });   
        }

        if(filterResult.length === 0){
            filterResult = null;
        }

        handleFilteredQuestions(filterResult);
    }

    return (
        <View style={style.ContainerAllFilters}>
            <ScrollView horizontal>
            {filterOptions.map((option) => (
                <TouchableOpacity key={option.id} onPress={() => filterDiscipline(option)}>
                    <View style={style.ContainerCardFilter}>
                        <View style={filterSelected === option.id ? style.ContainerFilterSelected : style.ContainerCategory }>
                            <Image source={option.photo}/>
                        </View>
                        <Text style={filterSelected === option.id ? style.CategoryFilterSelected : style.Category}>{option.label}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            </ScrollView>
        </View>
    )
}
export default DisciplineCard;