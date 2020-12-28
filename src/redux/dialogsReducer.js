const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Lena" },
    { id: 2, name: "Olya" },
    { id: 3, name: "Katya" },
    { id: 4, name: "Mary" },
    { id: 5, name: "Alexandr" },
  ],
  messages: [
    { id: 1, message: "Hi! How's your felling?" },
    { id: 2, message: "What do you think about last holiday?" },
    { id: 3, message: "Hello! How do you fell today?" },
    { id: 4, message: "What's up! Let's go to the park!" },
    { id: 5, message: "Good morning." },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  
    switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
    return {
      ...state,
      newMessageBody: action.body
    }  
    case SEND_MESSAGE:
      let body = state.newMessageBody;
     return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }]
      };
     default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
