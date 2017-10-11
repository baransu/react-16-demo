import React, { Component } from 'react';
import uuid from 'uuid';

import github from './github.png';

import Editor from './Editor';
import Chat from './Chat';
import Feed from './Feed';
import Time from './Time';
import ErrorBoundry from './ErrorBoundry';
import Modal from './Modal';

class App extends Component {
  state = { feed: [], time: Date.now() };

  componentDidMount() {
    setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  addPost = text => {
    this.setState(state => ({
      feed: state.feed.concat({ id: uuid.v4(), text })
    }));
  };

  toggleModal = () => this.setState(state => ({ modal: !state.modal }));

  render() {
    return [
      <Modal visible={this.state.modal}>
        <div
          style={{
            maxHeight: '40px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{ marginRight: '20px' }}>
            <Time date={this.state.time} />
          </h1>
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.toggleModal}
          >
            Close modal
          </button>
        </div>
      </Modal>,
      <div
        key="time"
        style={{
          alignItems: 'center',
          position: 'absolute',
          right: '10px',
          top: '10px',
          display: 'flex'
        }}
      >
        <h1 style={{ marginRight: '20px' }}>
          <Time date={this.state.time} />
        </h1>

        <div style={{ maxHeight: '40px' }}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.toggleModal}
          >
            Login
          </button>
        </div>
      </div>,
      <div key="app" className="container">
        <div
          className="columns"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src={github} style={{ maxHeight: '40px', marginTop: '10px' }} />
          <h1
            style={{
              marginTop: '20px',
              marginLeft: '10px',
              display: 'inline-block'
            }}
          >
            with chat!
          </h1>
        </div>
        <div className="columns">
          <div className="two-thirds column">
            <ErrorBoundry>
              <Editor onAdd={this.addPost} />
            </ErrorBoundry>
            <Feed feed={this.state.feed} />
          </div>
          <div className="one-third column">
            <ErrorBoundry>
              <Chat />
            </ErrorBoundry>
          </div>
        </div>
      </div>
    ];
  }
}

export default App;
