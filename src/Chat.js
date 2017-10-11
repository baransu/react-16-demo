import React, { Component } from 'react';
import uuid from 'uuid';
import fp from 'lodash/fp';

import Time from './Time';

const Item = props => {
  return (
    <div
      style={{ marginTop: '10px', padding: '5px', display: 'flex' }}
      className="blankslate"
    >
      <img
        style={{ marginRight: '10px' }}
        className="avatar avatar-small"
        src="https://avatars3.githubusercontent.com/u/9919?v=3&s=64"
        width="32"
        height="32"
      />
      <span
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span>{props.text}</span>
        <span>
          <Time date={props.date} />
        </span>
      </span>
    </div>
  );
};

class Chat extends Component {
  state = { input: '', items: [] };

  onChange = e => this.setState({ input: e.target.value });

  onClick = () => {
    this.setState(
      state => ({
        items: state.items.concat({
          id: uuid.v4(),
          text: state.input,
          date: Date.now()
        }),
        input: ''
      }),
      () => {
        if (this.state.items.length > 5) {
          this.sendToServer();
        }
      }
    );
  };

  onKeyPress = e => {
    if (e.which === 13) {
      this.onClick();
    }
  };

  render() {
    return (
      <div style={{ paddingTop: '10px' }}>
        <div style={{ display: 'flex' }} className="input-group">
          <input
            style={{ width: '100%' }}
            className="form-control"
            type="text"
            placeholder="What's up?"
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            value={this.state.input}
          />
          <div style={{ float: 'right', maxHeight: '40px' }}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onClick}
            >
              Send
            </button>
          </div>
        </div>
        <div>
          {fp
            .reverse(this.state.items)
            .map(item => <Item key={item.id} {...item} />)}
        </div>
      </div>
    );
  }
}

export default Chat;
