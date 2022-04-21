export interface IHeader {
    default?: boolean,
    headerPost?: IHeaderPost
    searchBar?: ISearchBar
}

export interface IHeaderPost {
    onPressCancel: () => void,
    onPressContinue: () => void,
    continueEnabled: boolean
}

export interface ISearchBar {
    value: string,
    onChange: (value:string) => void 
}