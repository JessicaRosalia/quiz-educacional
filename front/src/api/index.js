import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;

const api = (typeof manifest.packagerOpts === "object") && manifest.packagerOpts.dev
    ? `http://${manifest.debuggerHost.split(":").shift().concat(":3000")}`
    : "http://quiz-educacional.com.br";

console.log(api)

const instance = axios.create({
    timeout: 180000,
    baseURL: api
});

export default instance
