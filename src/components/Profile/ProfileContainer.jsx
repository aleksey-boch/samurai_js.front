import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile} from '../../redux/profile-reducer'


class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));
