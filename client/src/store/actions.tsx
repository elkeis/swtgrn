import {
    fetch,
    productFetcher,
    tagsFetcher,
} from '../services';
import { $FetchDataStartAction, FETCH_DATA_START, $FetchDataSuccessAction, FETCH_DATA_SUCCESS, $FetchDataFailureAction, FETCH_DATA_FAILURE } from './types';


export function fetchDataStart(): $FetchDataStartAction {
    return {
        type: FETCH_DATA_START
    }
}

export function fetchDataSuccess(data: Map<string, any>): $FetchDataSuccessAction {
    return {
        type: FETCH_DATA_SUCCESS,
        value: data
    }
}

export function fetchDataFailure(): $FetchDataFailureAction {
    return {
        type: FETCH_DATA_FAILURE
    }
}

export function fetchInitialDataAsync() {
    return async (dispatch: any ) => {
        dispatch(fetchDataStart());
        const result = await fetch([productFetcher, tagsFetcher]);
        if(result.has('error')) {
            dispatch(fetchDataFailure());
        } else {
            dispatch(fetchDataSuccess(result))
        }
    }
}
