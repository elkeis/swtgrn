import {
    $UpdateSelection,
    UPDATE_SELECTION,
    $SetFetchTags,
    SET_FETCH_TAGS,
    $SetTags,
    SET_TAGS
} from "./types";
import { Tag as TTag } from "../../services";

export function updateSelectionAction(tags: Array<TTag>): $UpdateSelection {
    return {
        type: UPDATE_SELECTION,
        value: tags
    }
}

export function setFetchTags(value: boolean): $SetFetchTags {
    return {
        type: SET_FETCH_TAGS,
        value
    }
}

export function setTags(tags: Array<TTag>): $SetTags {
    return {
        type: SET_TAGS,
        value: tags
    }
}
