const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


const initialState = {
    users: [],
    //     {
    //         id: 1,
    //         photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
    //         follow: false, fullName: 'Dmitry', status: 'Im boss', location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
    //         follow: true, fullName: 'Sasha', status: 'Im boss too', location: {city: 'Kiyv', country: 'Ukraine'}
    //     },
    //     {
    //         id: 3,
    //         photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
    //         follow: false,
    //         fullName: 'Andrew',
    //         status: 'Im small boss',
    //         location: {city: 'moskow', country: 'Parasha'}
    //     },
    // ],
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                ),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                ),
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }

        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});

export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default profileReducer;