import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Connect from "react-redux/lib/connect/connect";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            });
    }

    return (
        <div>
            <div className={s.oboi}>
                <img src='https://fotooboi.org.ua/images/product_images/info_images/fotooboi-plyazh-i-palma-10312.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData
                        profile={profile} isOwner={isOwner}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                    />
                }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}> Edit</button>
        </div>}
        <div>
            <b>Full Name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} title={key} value={profile.contacts[key]}/>
        })}
        </div>
    </div>

}


const Contact = ({title, value}) => {
    if (!value) {
        return <div/>
    }
    return <div className={s.contact}><b>{title}</b>: {value}</div>

}


export default ProfileInfo;