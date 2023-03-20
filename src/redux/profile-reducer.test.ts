import profileReducer, {actions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 0},
        {id: 2, message: 'It\'s my first post 2', likesCount: 10},
        {id: 3, message: 'It\'s my first post 3', likesCount: 14},
        {id: 4, message: 'It\'s my first post 4', likesCount: 15},
    ],
    profile: null,
    status: '',
    newPostText: '',
};

it('new post should be added', function () {
    let action = actions.addPostActionCreator('Yo YO')

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('new post should be correctly', function () {
    let action = actions.addPostActionCreator('Yo YO')

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('Yo YO');
});

it('after del len of messages should be decremented', function () {
    let action = actions.deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});


it('after del len of messages shouldn\'t be decremented', function () {
    let action = actions.deletePost(10)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

