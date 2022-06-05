import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./style";

const DisciplineCard = ({questionList, handleFilteredQuestions}) => {

    const [filterSelected, setFilterSelected] = useState(0);
    
    const filterOptions = [
        {
            id: 0,
            label: "Todos",
        },
        {
            id: 1,
            label: "Biologia",
        },
        {
            id: 2,
            label: "Física"
        }
    ]

    const filterDiscipline = (option) => {
        setFilterSelected(option.id);

        let filterResult = [...questionList];

        if(option.id !== 0) {
            filterResult = questionList.filter((question) => {
                if(question.questionCategoryId === option.id){
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
        {filterOptions.map((option) => (
            <TouchableOpacity key={option.id} onPress={() => filterDiscipline(option)}>
                <View style={style.ContainerCardFilter}>
                    <View style={filterSelected === option.id ? style.ContainerFilterSelected : style.ContainerCategory }>
                        <Image source={require("../../assets/icons/btn-verSenha.png")} />
                    </View>
                    <Text style={filterSelected === option.id ? style.CategoryFilterSelected : style.Category}>{option.label}</Text>
                </View>
            </TouchableOpacity>
        ))}
        </View>
    )
}
export default DisciplineCard;