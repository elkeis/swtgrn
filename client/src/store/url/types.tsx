export const SET_URL = 'SET_URL';

export interface $SetUrl {
    type: typeof SET_URL,
    value: string
}

export type UrlActions = $SetUrl;


export type $UrlState = {
    path: string,
}
