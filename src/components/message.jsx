import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Emojify from 'react-emojione';

class Message extends Component {

  assignColor = (str) => {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
         hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
  }

  intToRGB = (i) => {
      var c = (i & 0x00FFFFFF)
          .toString(16)
          .toUpperCase();

      return "00000".substring(0, 6 - c.length) + c;
  }

  render() {
    const { author, content, created_at } = this.props.message
    const color = `#${this.intToRGB(this.assignColor(author))}`

    return(
      <li className="message">
        <Emojify>
          <b style={{color: color}}>{author}</b> <small> - {created_at.substring(11,19)}</small>
          <br/ >
          <p>{content}</p>
        </Emojify>
      </li>
    )
  }
}


export default Message;
