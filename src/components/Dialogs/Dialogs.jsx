import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} />
  ));

  let postsElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{postsElements}</div>
      <div>
        <textarea
          value={newMessageBody}
          placeholder="Enter your message"
          onChange={onNewMessageChange}
        ></textarea>
      </div>
      <div>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
