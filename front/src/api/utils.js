import axios from 'axios';
import React from 'react';
import base64 from 'react-native-base64';
import createAxiosInstance from './';
import * as SecureStore from 'expo-secure-store';

export function getUserInfo(token) {
    const infosrc = base64.decode(token.split(".")[1]).replace(/\0/g, '')
    const info = JSON.parse(infosrc);
    return info.user;
}

export async function postQuestion(parameters){
    const axios = await createAxiosInstance();
    const response = await axios.post('/question', parameters, {
    });
    return response.data;
}

export async function getQuestions(){
    const axios = await createAxiosInstance();
    const response = await axios.get(`/question`, {
    });
    return response.data;
}

export async function deleteQuestion(parameters){
    const axios = await createAxiosInstance();
    const response = await axios.delete('/question', {
        data: parameters
    });
    return response.data;
    // const token = await SecureStore.getItemAsync("auth-token");

    // const config = {
    //     method: 'delete',
    //     url: 'http://192.168.1.102:3000/question',
    //     headers: {
    //                 'authorization': token == null ? "" : `Bearer ${token}` ,
    //                'Content-Type': 'application/json'
    //              },
    //     body: {
    //         userId: 2,
    //         questionId: 5,
    //           },
    //           data: {
    //             userId: 2,
    //             questionId: 5,
    //           }
    //   }
    //   axios(config).then(response => console.log(response)).catch(err => console.error(err.response))
}

export async function editQuestionService(parameters){
    const axios = await createAxiosInstance();
    const response = await axios.patch(`/question`, parameters, {
    });
    return response.data;
}

export async function getUserId(){
    const axios = await createAxiosInstance();
    const response = await axios.get('/user', {
    });
    return response.data;
}