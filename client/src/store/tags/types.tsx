import { Tag as TTag } from "../../services";

export const UPDATE_SELECTION = 'UPDATE_SELECTION';

export const SET_FETCH_TAGS = 'FETCH_TAGS';

export const SET_TAGS = 'SET_TAGS';

export interface $UpdateSelection {
    type: typeof UPDATE_SELECTION,
    value: Array<TTag>
}

export interface $SetFetchTags {
    type: typeof SET_FETCH_TAGS,
    value: boolean,
}

export interface $SetTags {
    type: typeof SET_TAGS,
    value: Array<TTag>
}

export type $TagsActionTypes =
    $UpdateSelection
    | $SetFetchTags
    | $SetTags;

export interface $Tags {
    all: Array<TTag>
    selected: Array<TTag>
    isFetching: boolean
    errors: Array<any>
}
