import React from 'react';
import Markdown from 'react-markdown';
import fp from 'lodash/fp';

const Item = props => {
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
      <div style={{ width: '100%', textAlign: 'left' }}>
        <Markdown className="markdown-body" source={props.text} />
      </div>
    </div>
  );
};

const Feed = props => {
  return (
    <div>
      {props.feed.length > 0 && (
        <h2 style={{ textAlign: 'center' }}>Whats there in open source?</h2>
      )}
      {fp.reverse(props.feed).map(item => <Item key={item.id} {...item} />)}
    </div>
  );
};

export default Feed;
