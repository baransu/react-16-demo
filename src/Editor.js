import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

class PostEditor extends Component {
  state = { post: '' };

  onChange = e => this.setState({ post: e.target.value });

  onClick = () => {
    this.props.onAdd(this.state.post);
    this.setState({ post: null });
  };

  render() {
    return (
      <div
        style={{ display: 'flex', padding: '10px', margin: '10px' }}
        className="blankslate"
      >
        <img
          style={{ marginRight: '10px' }}
          className="avatar"
          src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144"
          width="48"
          height="48"
        />
        <div style={{ width: '100%' }}>
          <textarea
            onChange={this.onChange}
            value={this.state.post.replace(/github/g, 'bitbucket')}
            placeholder="What up in the open source?"
            className="form-control"
            style={{ width: '100%', minHeight: '150px' }}
          />

          <div style={{ float: 'right', maxHeight: '40px', marginTop: '10px' }}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onClick}
            >
              Submit post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostEditor;
