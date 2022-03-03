import React from 'react';
import { Text, View } from 'react-native';
import style from './style.js';

const Label = ({label, required}) => {

    return (
        <View>
            {required
                ? <Text style={style.label}>{label} <Text style={style.required}>*</Text> </Text>
                : <Text style={style.label}>{label}</Text>
            }
        </View>
    )
}

export default Label;