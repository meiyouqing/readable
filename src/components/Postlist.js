import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPostsSortMethod, votePost } from '../actions';

class Postlist extends Component {
  render() {
    const { posts, postsSortMethod, setPostsSortMethod, vote } = this.props;
    return (
      <div className="posts-list">
        <h2>POSTS</h2>
        <p>
          <span className={`sort-post ${postsSortMethod}`}>
                        sort by:
            <b className="sort-vote" onClick={setPostsSortMethod.bind(null, 'voteScore')}>vote</b>
            <b className="sort-time" onClick={setPostsSortMethod.bind(null, 'timestamp')}>time</b>
          </span>
          <Link to="/edit/0" className="create-link">Create a new post</Link>
        </p>
        <ul>
          {
            posts.filter(post => !post.deleted)
              .sort((a, b) => (b[postsSortMethod] - a[postsSortMethod]))
              .map(post => (
                <li key={post.id}>
                  <p className="post-info">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                    <span className="category">{post.category}</span>
                    <span className="author">{post.author}</span>
                    <span className="time">{new Date(post.timestamp).toLocaleDateString()}</span>
                    <span className="vote-score">
                      <i className="up-vote" onClick={() => { vote(post.id, 'upVote'); }} />
                      <i className="down-vote" onClick={() => { vote(post.id, 'downVote'); }} />
                      {post.voteScore}
                    </span>
                  </p>
                  <p className="brief">{post.body.substr(0, 100)}</p>
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ postsSortMethod }) => ({
  postsSortMethod,
});
const mapDispatchToProps = dispatch => ({
  setPostsSortMethod: method => dispatch(setPostsSortMethod(method)),
  vote: (id, option) => dispatch(votePost(id, option)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Postlist);
