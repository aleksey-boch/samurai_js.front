import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
})

type MapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<WCP & MapPropsType> = (props) => {
            let {isAuth, ...restProps} = props

            if (!isAuth) return <Redirect to='/login' />

            return <WrappedComponent {...restProps as unknown as WCP}/>
    }

    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    let ConnectedRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(
        mapStateToProps)
    (RedirectComponent);

    return ConnectedRedirectComponent;
}