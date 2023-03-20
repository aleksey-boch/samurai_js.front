import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.oboi}>
                <img src='https://fotooboi.org.ua/images/product_images/info_images/fotooboi-plyazh-i-palma-10312.jpg' />
            </div>

            <div className={s.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}


export default ProfileInfo;