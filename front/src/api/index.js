import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;
import * as SecureStore from 'expo-secure-store';

const createAxiosInstance = async () => {

    const token = await SecureStore.getItemAsync("auth-token");

    const api = (typeof manifest.packagerOpts === "object") && manifest.packagerOpts.dev
        ? `https://${manifest.debuggerHost.split(":").shift().concat(":3000")}`
        : "https://quiz-educacional.com.br";


    const instance = axios.create({
        timeout: 10000,
        baseURL: api,
        headers: { 'authorization': token == null ? "" : `Bearer ${token}` }
    });

    return instance
}

export default createAxiosInstance
