import React, { Component } from 'react';

class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newChannelName: '',
    };
  }
  onChangeChannelName(ev) {
    console.log(ev.target.value);
    this.setState({
      newChannelName: ev.target.value,
    });
  }

  onAddChannel(ev) {
    const { newChannelName } = this.state;
    this.setState({
      newChannelName: '',
    });
    this.props.channelAdded(newChannelName);
    ev.preventDefault();
    
  }
  render() {
    return (
      <form onSubmit={this.onAddChannel.bind(this)}>
        <input
          type="text"
          onChange={this.onChangeChannelName.bind(this)}
          value={this.state.newChannelName}
        />
      </form>
    );
  }
}

export default ChannelForm;
