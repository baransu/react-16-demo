import React, { Component } from 'react';

class ErrorBoundry extends Component {
  state = { error: false };

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  render() {
    return this.state.error ? (
      <div
        class="flash flash-error"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h3>Something bad happend here</h3>
        <div style={{ float: 'right', maxHeight: '40px' }}>
          <button
            className="btn btn-sm btn-danger"
            type="button"
            onClick={() => this.setState({ error: false })}
          >
            Let's try to fix it
          </button>
        </div>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
