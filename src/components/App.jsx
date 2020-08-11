import React from 'react';
import MessageList from './containers/message_list';
import ChannelList from './containers/channel_list';
import LeftBar from './components/left_bar';

const App = () => {
  return (
    <div className="app row">
      <LeftBar />
      <ChannelList/>
      <MessageList />
    </div>
  );
};

export default App;
