import {userAPI} from "../api/api";
import {UserType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {Action, Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of users ids
};

type InitialStateType = typeof initialState;

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW': {
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
        }
        case 'UNFOLLOW': {
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
        }
        case 'SET_USERS': {
            return {...state, users: [...action.users]};
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage};
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count};
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching};
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId),
            };
        }
        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const),
    setTotalUsersCount: (totalUserCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        count: totalUserCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
}


type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage));

        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    };
}

const _followUnfollow = async (dispatch: DispatchType,
                               userId: number,
                               apiMethod: any,
                               actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingInProgress(false, userId));

}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = userAPI.follow.bind(userAPI);
        await _followUnfollow(dispatch, userId, apiMethod, actions.followSuccess);
    };
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = userAPI.unfollow.bind(userAPI);
        await _followUnfollow(dispatch, userId, apiMethod, actions.unfollowSuccess);

    };
}

export default usersReducer;
