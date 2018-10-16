import React, { Component } from 'react';
import Channel from './Channel';



class ChannelList extends Component {
  render() {
    return (
      <ul>
        {this.props.channels.map((channel, key) => {
          return (<Channel key={key} onClick={() => this.props.channelClicked(channel.name)} channelName={channel.name} />)
        })}
      </ul>
    );
  }
}

export default ChannelList;
