const ADD_MESSAGE = 'ADD-MESSAGE'
const TEXT_CHANGE = 'TEXT-CHANGE'

let InitialState = {
    dialogs: [
        { id: 1, name: 'dima' },
        { id: 2, name: 'pima' },
        { id: 3, name: 'Mima' }
    ],
    messages: [
        { id: 1, message: 'sssss' },
        { id: 2, message: 'sss1212' },
        { id: 3, message: 'de2edd' }
    ]

}


let MessageReduser = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            {
             let StateCopy = { ...state }
             StateCopy.messages = [...state.messages]
             StateCopy.messages.push({id: 6, message: action.massegeText})
             return StateCopy
             }

            case TEXT_CHANGE:
            {
                let StateCopy = { ...state }

                StateCopy.massegeText = action.text
                return StateCopy
            }
        default: return state
    }
}

export const AddMessageAC = (massegeText) => {
    return { type: ADD_MESSAGE,massegeText }
}

export const TextChangeCreator = (text) => {
    return { type: TEXT_CHANGE, text: text }
}

export default MessageReduser