const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi 2'},
        {id: 3, message: 'Hi 3'},
        {id: 4, message: 'Hi 4'},
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;


const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;