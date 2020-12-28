import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi, how are you?", likesCount: 5 },
        { message: "It's my first post", likesCount: 20 },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Lena" },
        { id: 2, name: "Olya" },
        { id: 3, name: "Katya" },
        { id: 4, name: "Mary" },
        { id: 5, name: "Alexandr" },
      ],
      postData: [
        { id: 1, message: "Hi! How's your felling?" },
        { id: 2, message: "What do you think about last holiday?" },
        { id: 3, message: "Hello! How do you fell today?" },
        { id: 4, message: "What's up! Let's go to the park!" },
        { id: 5, message: "Good morning." },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
