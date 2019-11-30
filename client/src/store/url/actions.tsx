import {
    SET_URL,
    $SetUrl
} from "./types";

export function setUrl(value: string): $SetUrl {
    return {
        type: SET_URL,
        value
    }
}
