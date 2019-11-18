import { $Contacts } from "./types"

const initialState: $Contacts = {
    email: 'email@email.email',
    phone: '+3750000000',
    instagram: 'swtgrn'
}

export function contactsReducer(
    state = initialState,
    action: any
): $Contacts {
    switch(action.type) {
        default: return state;
    }
}
