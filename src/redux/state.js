import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 0},
                {id: 2, message: 'It\'s my first post 2', likesCount: 10},
                {id: 3, message: 'It\'s my first post 3', likesCount: 14},
                {id: 4, message: 'It\'s my first post 4', likesCount: 15},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi 2'},
                {id: 3, message: 'Hi 3'},
                {id: 4, message: 'Hi 4'},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}


window.store = store;
export default store;