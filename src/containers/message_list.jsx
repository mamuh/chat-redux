import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../components/message';
import { fetchMessages, postMessage, setUsername } from '../actions';

class MessageList extends Component {
  renderList() {
    return this.props.messages.map(message => {
      return (
        <Message message={message} key={message.id} />
      );
    });
  };

  componentWillMount() {
    const username = prompt("What's your username?") || `anonymous${Math.floor(Math.random() * 100)}`;
    const { setUsername, fetchMessages } = this.props;
    setUsername(username);
    fetchMessages(this.props.currentChannel);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentChannel !== nextProps.currentChannel) {
      console.warn('Channel changed', this.props.currentChannel, nextProps.currentChannel)
      this.props.fetchMessages(nextProps.currentChannel);
    }
  }

  handleSubmit = (e) => {
    const { postMessage, username, currentChannel, fetchMessages } = this.props;
    e.preventDefault();
    postMessage(this.textInput.value, username, currentChannel)
    e.target.reset()
    setTimeout(() => fetchMessages(currentChannel), 150);
  }

  render() {
    return(
      <div className="col-xs-8 message-list">
      <h3>{this.props.currentChannel} channel</h3><small>Logged in as {this.props.username}</small>
        <ul>
          {this.renderList()}
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" ref={(input) => this.textInput = input} />
          <button type="submit">send</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    messages: state.messages,
    username: state.username,
    currentChannel: state.currentChannel
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  { fetchMessages,
    postMessage,
    setUsername,
  }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
