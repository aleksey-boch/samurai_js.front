import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wraper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs dialogs={props.state.dialogPage.dialogs}
                                             messages={props.state.dialogPage.messages}/>}/>

                    <Route path='/profile'
                           element={<Profile
                               posts={props.state.profilePage.posts}
                               addPost={props.addPost}
                           />}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
