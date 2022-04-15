import AsyncStorage from '@react-native-async-storage/async-storage';
import * as devagramApiService from '../devagramApiService';
import { ILogin, IUser } from './types';

export const login = async (body: ILogin) => {
    const { data } = await devagramApiService.post('/login', body);
    AsyncStorage.setItem("token", data.token);
    getUser();
}

const getUser = async () => {
    const { data }  = await devagramApiService.get('/usuario');
    await AsyncStorage.setItem('name', data.nome)
    await AsyncStorage.setItem('_id', data._id)
    await AsyncStorage.setItem('email', data.email)
    await AsyncStorage.setItem('avatar', data.avatar)
}

export const getCurrentUser = async () => {
    const user: IUser = {
        id: await AsyncStorage.getItem('_id'),
        email: await AsyncStorage.getItem('email'),
        name: await AsyncStorage.getItem('name'),
        token: await AsyncStorage.getItem('token'),
        avatar: await AsyncStorage.getItem('avatar')
    }

    return user;
}