import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import store from "./redux/state";


function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wraper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs store={props.store}/>}/>

                    <Route path='/profile'
                           element={<Profile
                               dispatch={props.dispatch}
                               profilePage={props.state.profilePage}
                           />}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
