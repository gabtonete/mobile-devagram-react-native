import * as ImagePicker from 'expo-image-picker';


export interface IUploadImage {
    setImage: (image: ImagePicker.ImagePickerResult) => void,
    image: any
}