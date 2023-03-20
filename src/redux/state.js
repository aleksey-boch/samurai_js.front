let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 0},
            {id: 2, message: 'It\'s my first post 2', likesCount: 10},
            {id: 3, message: 'It\'s my first post 3', likesCount: 14},
            {id: 4, message: 'It\'s my first post 4', likesCount: 15},
        ]
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 15
    }
    state.profilePage.posts.push(newPost);
}

export default state;