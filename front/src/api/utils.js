import axios from 'axios';
import React from 'react';
import base64 from 'react-native-base64';
import createAxiosInstance from './';

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

export async function deleteQuestion(ttt){
    const axios = await createAxiosInstance();
    const response = axios.delete('/question', ttt, {
        headers: {
            
        },
        body: {
            ttt
        }
    });
    return response.data;
}

export async function editQuestion(parameters){
    const axios = await createAxiosInstance();
    const response = await axios.patch(`/question`, parameters, {
    });
    return response.data;
}