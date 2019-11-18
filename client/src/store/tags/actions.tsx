import {
    $UpdateSelection,
    UPDATE_SELECTION
} from "./types";
import { TTag } from "../../services";

export function updateSelectionAction(tags: Array<TTag>): $UpdateSelection {
    return {
        type: UPDATE_SELECTION,
        value: tags
    }
}
