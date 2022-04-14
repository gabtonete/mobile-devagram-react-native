import axios, { Method } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../constants';

const URL = API_URL
const instance = axios.create({
    baseURL: URL,
    timeout: 3000
})

export const api = async(endpoint: string, method: Method, body?: any, newHeaders?: any) => {
    const token = await AsyncStorage.getItem('token');

    let headers: any = newHeaders? newHeaders : {'Content-Type': 'application/json'}

    if(token) {
        headers['Authorization'] = 'Bearer ' + token
    }

    console.log(`Executando: ${URL}${endpoint}, metodo: ${method} body ${JSON.stringify(body)} headers ${JSON.stringify(headers)}`)

    return instance.request({
        url: endpoint,
        method: method,
        data: body? body: '',
        headers: headers
    })
}

export const post = async (url: string, data: any, headers?: any) => {
    return await api(url, "POST", data, headers);
}

export const get = async (url: string, headers?: any) => {
    return await api(url, "GET", headers);
}

export const put = async (url: string, data: any, headers?: any) => {
    return await api(url, "PUT", data, headers);
}
