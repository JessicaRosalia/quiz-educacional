import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;
import * as SecureStore from 'expo-secure-store';

const createAxiosInstance = async () => {

    const token = await SecureStore.getItemAsync("auth-token");
    console.log("token", token)

    const api = (typeof manifest.packagerOpts === "object") && manifest.packagerOpts.dev
        ? `http://${manifest.debuggerHost.split(":").shift().concat(":3000")}`
        : "http://quiz-educacional.com.br";

    console.log(api)

    const instance = axios.create({
        timeout: 180000,
        baseURL: api,
        headers: { 'authorization': token == null ? "" : `Bearer ${token}` }
    });

    return instance
}

export default createAxiosInstance
