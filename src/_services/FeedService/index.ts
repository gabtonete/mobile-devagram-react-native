import AsyncStorage from '@react-native-async-storage/async-storage';
import * as devagramApiService from '../devagramApiService';

export const getPosts = async(id?: string) => {
    let url = '/feed';

    if(id) {
        url = `/feed?id=${id}` 
    }

    return await devagramApiService.get(url)
}