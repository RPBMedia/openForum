import React, { Component } from 'react';

class Channel extends Component {
  render() {
    return (
      <li onClick={this.props.onClick.bind(this)}>{this.props.channelName}</li>
    );
  }
}

export default Channel;
