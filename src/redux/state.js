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
        dialogPage: {
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
            ]
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

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 15
        }
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})


window.store = store;
export default store;