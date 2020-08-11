import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions';


class ChannelList extends Component {
  changeChannel = (e) => {
    const channelName = e.target.innerText
    this.props.selectChannel(channelName)
  }

  render() {
    return(
      <div className="col-xs-3 channel-list">
        <h3>Redux chat channels</h3>
        <ul>
         <li onClick={this.changeChannel} >general</li>
         <li onClick={this.changeChannel}>react</li>
         <li onClick={this.changeChannel}>paris</li>
       </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    messages: state.messages,
    username: state.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  { selectChannel, fetchMessages },
  dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
