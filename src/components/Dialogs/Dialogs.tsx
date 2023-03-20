import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMassageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => (<Message message={m.message} key={m.id}/>))

    let addNewMessage = (values:NewMassageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;
