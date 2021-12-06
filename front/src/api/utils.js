import base64 from 'react-native-base64'

export function getUserInfo(token) {
    const infosrc = base64.decode(token.split(".")[1]).replace(/\0/g, '')
    const info = JSON.parse(infosrc);
    return info.user;
}