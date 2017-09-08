const contactsInitialState = {
    contacts: [],
    details:{}
}

export default function (state = contactsInitialState, action) {
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return {...state, contacts: [...state.contacts, ...action.contacts] }
        case 'FETCH_DETAILS':
            return {...state, details:{...state.details, ...action.details}}
        default:
            return state;
    }
}