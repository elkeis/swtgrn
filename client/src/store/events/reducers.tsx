import { $Events } from "./types";

const initialState: $Events  = {
    list: []
}

export function eventsReducer (
    state = initialState,
    action: any
): $Events {
    switch (action.type) {
        default: return state;
    }
}
