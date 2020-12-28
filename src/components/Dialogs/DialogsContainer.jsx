import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { updateNewPostTextActionCreator } from "../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
