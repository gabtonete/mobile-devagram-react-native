export interface IButton {
    onPress: () => void,
    disabled?: boolean,
    placeholder: string,
    style?: any,
    loading?: boolean
}