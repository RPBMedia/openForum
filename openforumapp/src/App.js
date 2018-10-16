import React, { Component } from 'react';
import ChannelList from './ChannelList.js';
import ChannelForm from './ChannelForm.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelArray: [
        { name: 'Channel 1' },
        { name: 'Channel Support' },
        { name: 'Channel Devs' },
      ]
    };
  }


  onChannelClick(name) {
    console.log(name);
  }

  onChannelAdded(newChannelName) {
    debugger;
    const channels = this.state.channelArray;
    channels.push({
      name: newChannelName,
    });
    this.setState({
      channelArray: channels,
    });
  }

  render() {
    return (
      <div>
        <ChannelList
          channels={this.state.channelArray}
          channelClicked={this.onChannelClick}
        />
        <ChannelForm channelAdded={this.onChannelAdded.bind(this)} />
      </div>
    );
  }
}

export default App;
