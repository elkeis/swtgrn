export const FETCH_DATA_START = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export interface $FetchDataStartAction {
    type: typeof FETCH_DATA_START
}

export interface $FetchDataFailureAction {
    type: typeof FETCH_DATA_FAILURE,
}

export interface $FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS,
    value: Map<string, any>
}

export type $CommonActionTypes  = $FetchDataStartAction
    | $FetchDataSuccessAction
    | $FetchDataFailureAction;
