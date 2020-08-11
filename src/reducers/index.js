import { combineReducers } from 'redux';
import MessagesReducer from './messages_reducer';
import UsernameReducer from './username_reducer';
import SelectedChannelReducer from './selected_channel_reducer';

const rootReducer = combineReducers({
  messages: MessagesReducer,
  username: UsernameReducer,
  currentChannel: SelectedChannelReducer
});

export default rootReducer;
