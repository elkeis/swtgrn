import { TTag } from "../../services";

export const UPDATE_SELECTION = 'UPDATE_SELECTION';

export interface $UpdateSelection {
    type: typeof UPDATE_SELECTION,
    value: Array<TTag>
}


export type $TagsActionTypes = $UpdateSelection;

export interface $Tags {
    all: Array<TTag>
    selected: Array<TTag>
    isFetching: boolean
    errors: Array<any>
}
